import {
    EDIT_HEADING
} from './types'

export const editHeading = (isEdit) => dispatch => {
    dispatch ({
        type: EDIT_HEADING,
        payload: {
            isEdit
        }
    })
}
