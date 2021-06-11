import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/NotesContext';
import NoteForm from '../components/NoteForm';

const CreateScreen = ({ navigation }) => {
    const { addNotes } = useContext(Context);
    return <NoteForm />
    
};

const styles = StyleSheet.create({});

export default CreateScreen;