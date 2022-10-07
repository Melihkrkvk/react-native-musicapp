import React from "react";
import { TextInput, View } from "react-native";
import styles from './SearchBar_styles';

const SearchBar = (props) => {
    
    return (
        <View style={styles.container}>
            <TextInput 
            placeholder="Ara..."
            onChangeText={props.onSearch}
            
            />
        </View>
    );
};

export default SearchBar;