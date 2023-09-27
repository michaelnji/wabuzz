import { setItemValue } from "../localStorage"

export const toggleUserGuide = (state:boolean) : boolean => {
    setItemValue('show-notice', !state)
    return !state
}