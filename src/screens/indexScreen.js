import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Context } from '../context/NotesContext';


const IndexScreen = () => {
    const {state, addNotes} = useContext(Context);

    return <View>
        <Text>Index Screen</Text>
        <Button title="Add Notes" onPress={addNotes}/>
        <FlatList 
            data={state}
            keyExtractor={(note) => note.title}
            renderItem={({item}) => {
                return <Text>{item.title}</Text>
            }}
        />
    </View>
}

const styles = StyleSheet.create({});

export default IndexScreen;