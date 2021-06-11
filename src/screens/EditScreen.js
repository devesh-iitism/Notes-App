import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/NotesContext';
import NoteForm from '../components/NoteForm';

const EditScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    const note = state.find((note) => note.id === navigation.getParam('id'));

    return (
        <NoteForm />
    );
};

const styles = StyleSheet.create({});

export default EditScreen;