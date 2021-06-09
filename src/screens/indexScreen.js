import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import NotesContext from '../context/NotesContext';


const IndexScreen = () => {
    const {data, addNotes} = useContext(NotesContext);

    return <View>
        <Text>Index Screen</Text>
        <Button title="Add Notes" onPress={addNotes}/>
        <FlatList 
            data={data}
            keyExtractor={(note) => note.title}
            renderItem={({item}) => {
                return <Text>{item.title}</Text>
            }}
        />
    </View>
}

const styles = StyleSheet.create({});

export default IndexScreen;