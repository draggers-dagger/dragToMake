import {
    EDIT_HEADING
} from './types'

export const editHeading = (isEdit) => {
    return {
        type: EDIT_HEADING,
        payload: {
            isEdit
        }
    }
}
