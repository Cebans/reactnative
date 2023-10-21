import React from "react";
import {TextInput, View, StyleSheet } from "react-native";

const SearchBar = (props) => {
    return(
        <View style={styles.container}>
            <TextInput
                placeholder="Buscar"
                style={styles.input}
                value={props.searchText}
                onChangeText={(text)=>props.setSearchText(text)}
            />
        </View>
    )
}
export default SearchBar;

const styles = StyleSheet.create({
    container:{
        margin:10
    },
    input:{
        backgroundColor:"#fff",
        padding: 12,
        borderRadius: 8,
        Color: "#000",
        borderWidth: 1,
        borderColor: "#182A3E"
    }
})