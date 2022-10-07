import React from "react";
import { View, Text, Image } from "react-native";
import styles from './musics_styles';
const Musics = ({musics}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: musics.imageUrl}}/>
            <View style={styles.inner_container}>
                <Text style={styles.title}>{musics.title}</Text>
                <View style={styles.content_container}>
                <View style={styles.info_container}>
                <Text style={styles.artist}>{musics.artist}</Text>
                <Text style={styles.year}>{musics.year}</Text>

                </View>
                 {musics.isSoldOut && <View style={styles.soldout_container}>
                 <Text style={styles.soldout_title}>TÜKENDİ</Text></View>}
                
            </View>
                    
                        <Text>{musics.album}</Text>
                    
                </View>
        </View>
    );
};
export default Musics;