import { ADD_NEW_CARD } from '../actions/types'

const initState = {
    description: "",
    title: "",
    imgUrl: ""
}

export default function (state = initState, action) {
    switch (action.type) {
        case ADD_NEW_CARD:
            return {
                ...state,
                imgUrl: action.payload.imgUrl,
                title: action.payload.title,
                description: action.payload.description
            }
        default:
            return state;
    }
}