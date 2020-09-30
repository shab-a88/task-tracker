const initialState = { list: ['hello']}

export const listReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'Add':
            return {
                ...state,
                list: [...state.list, action.payload]  
            }
            default:
                return state
    }
}

export const selectListValue = state => state.list