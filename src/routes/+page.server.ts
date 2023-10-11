import { createVcard } from "$lib/scripts/helper";
import {
  calculateBatchExpiry,
  getReadableDate,
} from "$lib/scripts/helper/time";
import {
  createNewBatch,
  getOrCreateBatch,
  updateBatchInfo,
} from "$lib/server/supabase/batchManager";
import {
  deleteUnverifiedContacts,
  getVerifiedContacts,
} from "$lib/server/supabase/contactsManager";
import type { Batch, BatchResponse } from "$lib/types";
import type { Load } from "@sveltejs/kit";
import { isPast, parseISO } from "date-fns";
import { isArray } from "mathjs";
import { v4 as uuidv4 } from "uuid";

/** @type {import('@sveltejs/kit').Load} */
export const load: Load = async () => {
  const today = new Date();

  // batch defaults
  const expiryDate = calculateBatchExpiry(today);
  const batchDetails: Batch = {
    name: "batch-0",
    amount: 0,
    expires: expiryDate,
    archived_at: calculateBatchExpiry(calculateBatchExpiry(new Date()), 1),
    content: "",
    id: uuidv4(),
    batch_status: "active",
  };
  let batch = await getOrCreateBatch(batchDetails);
  if (batch && batch.error) return batch;

  // update batch content with latest data (i.e verified users)
  const allContacts = await getVerifiedContacts();
  if (allContacts && !isArray(allContacts) && allContacts.error)
    return allContacts;
  batch.content = createVcard(allContacts, batch.name);
  batch.amount = isArray(allContacts) ? allContacts.length : batch.amount;
  batch = await updateBatchInfo({ ...batch }, batch.id);
  if (batch && batch.error) return batch;

  console.log(!isPast(parseISO(batch.archived_at)));

  // not a new batch
  if (getReadableDate(batch.expires) != getReadableDate(expiryDate)) {
    // make file available cuz today's da day boys
    if (
      getReadableDate(today) === getReadableDate(batch.expires) ||
      (isPast(parseISO(batch.expires)) && !isPast(parseISO(batch.archived_at)))
    ) {
      const res: BatchResponse = {
        content: batch.content,
        name: batch.name,
        archived_at: batch.archived_at,
        amount: batch.amount,
        expires: batch.expires,
        status: 200,
        error: null,
        createFile: true,
      };
      return res;
    }

    if (
      getReadableDate(today) === getReadableDate(batch.archived_at) ||
      isPast(parseISO(batch.archived_at))
    ) {
      // archiving batch
      batch.batch_status = "archived";
      batch = await updateBatchInfo({ ...batch }, batch.id);
      if (batch && batch.error) return batch;

      // deleting contacts in preparation for new batch
      const delError = await deleteUnverifiedContacts();
      if (delError) return delError;

      // creating new batch
      batchDetails.name = `batch-${
        parseInt(batch.name.split("batch-")[1]) + 1
      }`;

      batch = await createNewBatch(batchDetails);
      if (batch && batch.error) return batch;

      // returning data
      const res: BatchResponse = {
        content: batch.content,
        name: batch.name,
        archived_at: batch.archived_at,
        amount: batch.amount,
        expires: batch.expires,
        status: 200,
        error: null,
        createFile: false,
      };

      return res;
    }
  }

  const res: BatchResponse = {
    content: batch.content,
    name: batch.name,
    archived_at: batch.archived_at,
    expires: batch.expires,
    status: 200,
    amount: batch.amount,
    error: null,
    createFile: false,
  };

  return res;
};
