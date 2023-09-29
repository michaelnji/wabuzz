// import { getSingleContact } from "$lib/server/supabase/contactsManager";
import type { AddContactResponse } from "$lib/types";
import { json, type RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ request }) => {
  const { phone, country, country_code, name } = await request.json();
  const contactFromDb = {
    status: 200,
    error: null,
    phone,
    country,
    country_code,
    name,
    exist: false,
    verification_status: "permanently verified",
    ban_reason: "",
  };

  const responseData: AddContactResponse = {
    status: contactFromDb && contactFromDb.status ? contactFromDb.status : 200,
    message:
      contactFromDb && contactFromDb.error ? contactFromDb.error : "Contact submission complete",
    data: contactFromDb,
  };

  return json(responseData);
};
