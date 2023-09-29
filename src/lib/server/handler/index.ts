import { AuthRetryableFetchError,FunctionsError } from "@supabase/supabase-js"

export const errorHandler = (error: unknown) => {
    if (error instanceof AuthRetryableFetchError || error instanceof FunctionsError) return { error: 'Internet connection error.', status: 500 }
    
    return { error: 'An internal error ocurred.', status:500}
}