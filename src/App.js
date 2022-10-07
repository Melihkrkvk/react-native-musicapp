import React, { useState } from "react";
import { SafeAreaView, View, FlatList, StyleSheet } from "react-native";
import music_data from './music_data.json';
import Musics from "./components/musics";
import SearchBar from "./components/musics/SearchBar/SearchBar";

function App() {
  const [Titlemusic, setTitlemusic] = useState(music_data);
  const renderMusic = ({item}) => <Musics musics={item}/>
  const renderSeparator = () => <View style={styles.separator} />
  const handleSearch = (text) => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();
      return currentTitle.indexOf(searchedText) > -1;


    });
    setTitlemusic(filteredList);
  };
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <View>
        <FlatList 
        data={Titlemusic} 
        renderItem={renderMusic}
        ItemSeparatorComponent={renderSeparator}
         />
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
   borderWidth: 1,
   borderColor: '#e0e0e0',
  },
});