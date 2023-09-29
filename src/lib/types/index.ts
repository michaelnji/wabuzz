export type ContactDetails = {
  name: string;
  phone: string;
  country_code: string | unknown;
  country: string | unknown;
  verification_status: string;
  ban_reason: string,
  
};

export type AddContactResponse = {
  message: string,
  data: ContactDetails | object,
  status: number
  }