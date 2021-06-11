import { call } from 'react-native-reanimated';
import createDataContext from './createDataContext';

const notesReducer = (state, action) => {
    switch(action.type) {
        case 'add_notes':
            return [
                ...state, 
                {
                    id: Math.floor(Math.random()*99999),
                    title: action.payload.title,
                    content: action.payload.content
                }
            ];

        case 'delete_notes':
            return state.filter((notes) => notes.id !== action.payload);
        
        case 'edit_notes':
            return state.map((note) => {
                return note.id === action.payload.id ?
                    action.payload :
                    note;
            });

        default:
            return state;
    }
};

const addNotes = (dispatch) => {
    return (title, content, callback) => {
        dispatch({type: 'add_notes', payload: {title, content}});
        
        if(callback)
            callback();
    };
};

const deleteNotes = (dispatch) => {
    return (id) => {
        dispatch({type: 'delete_notes', payload: id});
    };
}; 

const editNotes = (dispatch) => {
    return (id, title, content, callback) => {
        dispatch({type: 'edit_notes', payload: {id, title, content}});
        if(callback)
            callback();
    };
};

export const { Context, Provider } = createDataContext(
    notesReducer, 
    {addNotes, deleteNotes, editNotes},
    [{title: 'TEST NOTE', content: 'TEST CONTENT', id: 1}]
);