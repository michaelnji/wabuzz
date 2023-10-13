import { addDays, format, formatDistanceToNow, parseISO } from "date-fns";
import { isString } from "mathjs";

export const calculateBatchExpiry = (
  date: Date | number,
  amount: number = 7
): Date => {return addDays(date, amount)};

export const calculateTimeToExpiration = (date: Date | number) => {
  return formatDistanceToNow(date);
};

export const getReadableDate = (date: Date | number) => {
  const formatConfig = "eeee do MMM yyyy";
  return isString(date)
    ? format(parseISO(date), formatConfig)
    : format(date, formatConfig);
};
