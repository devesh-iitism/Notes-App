import createDataContext from './createDataContext';

const notesReducer = (state, action) => {
    switch(action.type) {
        case 'add_notes':
            return [...state, {title: `Notes #${state.length+1}`}];

        default:
            return state;
    }
};

const addNotes = (dispatch) => {
    return () => {
        dispatch({type: 'add_notes'});
    };
};

export const { Context, Provider } = createDataContext(
    notesReducer, 
    {addNotes},
    []
);