import createDataContext from './createDataContext';

const notesReducer = (state, action) => {
    switch(action.type) {
        case 'add_notes':
            return [...state, {id: Math.floor(Math.random()*99999), title: `Notes #${state.length+1}`}];

        case 'delete_notes':
            return state.filter((notes) => notes.id !== action.payload);
        
        default:
            return state;
    }
};

const addNotes = (dispatch) => {
    return () => {
        dispatch({type: 'add_notes'});
    };
};

const deleteNotes = (dispatch) => {
    return (id) => {
        dispatch({type: 'delete_notes', payload: id});
    };
};  

export const { Context, Provider } = createDataContext(
    notesReducer, 
    {addNotes, deleteNotes},
    []
);