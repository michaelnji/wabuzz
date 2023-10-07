import { addDays, format, formatDistanceToNow, parseISO } from "date-fns";
import { isString} from 'mathjs'

export const calculateBatchExpiry = (
  date: Date | number,
  amount: number = 1
) => {
  return addDays(date, amount);
};

export const calculateTimeToExpiration = (date: Date | number) => {
  return formatDistanceToNow(date);
};

export const getReadableDate = (date: Date | number) =>{
  const formatConfig = 'eeee do MMM yyyy'
  if(isString(date))  return format(parseISO(date), formatConfig);
  return format(date,formatConfig)
  
}