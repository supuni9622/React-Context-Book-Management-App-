 /*
        Reducers 
            * Reducer function - interacts with the state/data
            * Action object - type of change what we are goint to do in reducer function
            * Dispatch function - send the action to reducer
          
            *  Reducer(action, state) ===> 
                        1. Check the action.hljs-type
                        2. Update the state object
                        3. Return the state
    */

export const bookReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_BOOK' : 
            return [...state, {
                name: action.book.bookValue, 
                author: action.book.author, 
                id :  Math.random()*100
            }];
        
        case 'REMOVE_BOOK' : 
            return state.filter(book => book.id !== action.id);

        default:
            return state;
    }
}