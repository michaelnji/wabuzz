import { errorHandler } from "$lib/server/handler";
import { supabase } from "$lib/server/supabase/initiator";

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
