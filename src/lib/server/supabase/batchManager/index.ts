import { isEmptyObject } from "$lib/scripts/helper";
import { errorHandler } from "$lib/server/handler";
import { supabase } from "$lib/server/supabase/initiator";
import type { Batch } from "$lib/types";

export const getCurrentBatch = async () => {
  const { data, error, status } = await supabase
    .from("batch")
    .select()
    .eq("batch_status", "active");

  if (error) return errorHandler(error);
  if (status == 200) {
    if (data && data.length == 1) return data[0];
    return {};
  }
};

export const getAllBatches = async () => {
  const { data, error, status } = await supabase
    .from("batch")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) return errorHandler(error);
  if (status == 200) {
    if (data && data.length > 0) return data;
    return [];
  }
};

export const createNewBatch = async (details: Batch) => {
  const { data, error } = await supabase
    .from("batch")
    .insert([details])
    .select();
    

  if (error) return errorHandler(error);
  return data[0]
};

export const getOrCreateBatch = async (details: Batch) => {
  const currentBatch = await getCurrentBatch();
  if (currentBatch && currentBatch.error) return currentBatch;
  if (currentBatch && !isEmptyObject(currentBatch)) return currentBatch;
  const newBatch = await createNewBatch(details);
  return newBatch;
};

export const updateBatchInfo = async (
  
  info: Batch,
  id: string
) => {
  const { data, error, status } = await supabase
    .from("batch")
    .update({ ...info })
    .eq("id", id)
    .select();
  if (error) return errorHandler(error);
  if (status == 200) {
    if (data && data.length == 1) return data[0];
    return {};
  }
};
