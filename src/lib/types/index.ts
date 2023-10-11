type contactStatus =
  | "verified"
  | "not verified"
  | "permanently verified"
  | "banned";
  
type batchStatus = "active" | "archived";

export type ContactDetails = {
  name: string;
  phone: string;
  country_code: string | unknown;
  country: string | unknown;
  verification_status: contactStatus;
  ban_reason: string;
  id: string;
};

export type Batch = {
  name: string;
  amount: number;
  expires: Date;
  content: string;
  id: string;
  archived_at: Date | string;
  batch_status: batchStatus;
};

export type AddContactResponse = {
  message: string;
  data: ContactDetails | object;
  status: number;
};

export type BatchResponse = {
  name: string;
  amount: number;
  content: string;
  status: number;
  error: string | null;
  createFile: boolean;
  archived_at: Date | string;
  expires: Date | string;
};
