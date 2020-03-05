import {ADD_NEW_CARD} from './types'
export const addCard = (imgUrl, title, description) => {
    return {
        type: ADD_NEW_CARD,
        payload: {
            imgUrl,
            title,
            description
        }
    }
}