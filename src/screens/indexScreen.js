import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/NotesContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = () => {
    const {state, addNotes, deleteNotes} = useContext(Context);

    return <View>
        <Button title="Add Notes" onPress={addNotes}/>
        <FlatList 
            data={state}
            keyExtractor={(note) => note.title}
            renderItem={({item}) => {
                return <View style={styles.row}>
                    <Text style={styles.title}>{item.title} - {item.id}</Text>
                    <TouchableOpacity onPress={() => deleteNotes(item.id)}>
                        <Feather style={styles.icon} name="trash"/>
                    </TouchableOpacity>
                </View>
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});

export default IndexScreen;