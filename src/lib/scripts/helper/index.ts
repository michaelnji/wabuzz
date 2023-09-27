import { setItemValue } from "../localStorage"

export const toggleUserGuide = (state:boolean) : boolean => {
    setItemValue('show-notice', !state)
    return !state
}

export const isValidName = (name: string = '') => {
    const re = /^[^0-9]+$/g;
    const found : boolean = re.test(name);
    return found
} 