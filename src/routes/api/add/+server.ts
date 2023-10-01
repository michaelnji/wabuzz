import {
  addContact,
  getSingleContact,
 
} from "$lib/server/supabase/contactsManager";
import type { AddContactResponse, ContactDetails } from "$lib/types";
import { json, type RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ request }) => {
  const {
    phone,
    country,
    country_code,
    name,
    verification_status,
    id,
    ban_reason,
  } = await request.json();

  let responseData: AddContactResponse;
  const contactFromServer = await getSingleContact(phone);

  if (contactFromServer && contactFromServer.error) {
    responseData = {
      status: 500,
      message: contactFromServer.error,
      data: {},
    };
    return json(responseData);
  }

  if (contactFromServer.phone == phone) {
    const contactFromDb = {
      status: 200,
      error: null,
      exist: true,
      ...contactFromServer,
    };

    responseData = {
      status: contactFromDb.status,
      message: "Contact already exists",
      data: contactFromDb,
    };

    return json(responseData);
  }

  const details: ContactDetails = {
    phone,
    name,
    country,
    country_code,
    verification_status,
    id,
    ban_reason,
  };
  const addedContact = await addContact(details);

  if (addedContact && addedContact.error) {
    responseData = {
      status: 500,
      message: addedContact.error,
      data: {},
    };
    return json(responseData);
  }

 
  responseData = {
    status: 200,
    message: "Contact submission complete",
    data: {...addedContact, error: null, exists: false},
  };
  return json(responseData);
};
