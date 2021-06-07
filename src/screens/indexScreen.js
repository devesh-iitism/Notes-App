import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NotesContext from '../context/NotesContext';


const IndexScreen = () => {
    const value = useContext(NotesContext);

    return <View>
        <Text>Index Screen {value}</Text>
    </View>
}

const styles = StyleSheet.create({});

export default IndexScreen;