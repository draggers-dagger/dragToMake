import {EDIT_HEADING } from '../actions/types'

const initState = {
    isEditingH1: false,
    somehitng: "hehhehehh"
}

export default function(state = initState, action)
{
    switch(action.type){
        case EDIT_HEADING:
            return{
                ...state,
                isEditingH1: action.payload.isEdit
            }
        default:
            return state;
    }
}