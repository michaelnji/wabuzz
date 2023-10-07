import { AuthRetryableFetchError,FunctionsError } from "@supabase/supabase-js"

export const errorHandler = (error: {message: string, details: string}) => {
    console.log(error)
    if (
      error instanceof AuthRetryableFetchError ||
      error instanceof FunctionsError ||
      error.message == "TypeError: fetch failed"
    )
      return { error: "Can't fetch information, no internet.", status: 500 };
    
    return { error: 'An internal error ocurred.', status:500}
}