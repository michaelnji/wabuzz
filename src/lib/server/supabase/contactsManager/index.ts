import { errorHandler } from "$lib/server/handler";
import { supabase } from "$lib/server/supabase/initiator";
import type { ContactDetails } from "$lib/types";

export const getSingleContact = async (phone: string) => {
  const { data, error, status } = await supabase
    .from("contacts")
    .select()
    .eq("phone", phone);
  
  if (error) return errorHandler(error);
  if (status == 200) {
  if (data && data.length == 1) return data[0];
    return {};
  }

  
};

export const addContact = async (data: ContactDetails) => {
  const { data: profile, error, status } = await supabase.from('contacts').insert([data]).select()
  
  if (error) return errorHandler(error)
  if (status == 200) {
    if (profile && profile.length == 1) return profile[0];
    return {};
  }
  
}