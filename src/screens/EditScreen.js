import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/NotesContext';
import NoteForm from '../components/NoteForm';

const EditScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const { state, editNotes } = useContext(Context);

    const note = state.find((note) => note.id === id);

    return (
        <NoteForm 
            initialValues={{title: note.title, content: note.content}}
            onSubmit={(title, content) => {
                editNotes(id, title, content, () => navigation.pop());
            }}
        />
    );
};

const styles = StyleSheet.create({});

export default EditScreen;