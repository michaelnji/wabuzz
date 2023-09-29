import { setItemValue } from "../localStorage"

export const toggleUserGuide = (state:boolean) : boolean => {
    setItemValue('show-notice', !state)
    return !state
}

export const isValidName = (name: string = '') : boolean => {
    const re = /^[^0-9]+$/g;
    const found : boolean = re.test(name);
    return found
} 
export const isValidPhone = (phone: string = '') : boolean => {
   const re = /^[0-9]+$/g;
    const found : boolean = re.test(phone);
    return found
} 

export const sanitizer = (dirtyString: string): string => {
    let cleansedString: string = dirtyString
    const badChars : string = '^?/"!@#$%&*()_+-=><,.;:{}[]\'|'
    for (let i = 0; i < badChars.length-1; i++){
        cleansedString = cleansedString.replaceAll(badChars[i], "");

    }
    return cleansedString
}