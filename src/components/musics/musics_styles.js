import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: "row",
        
        
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,

    },
    inner_container: {
        padding: 10,
        flex: 1,
        justifyContent: 'center',
       
    },
    title: {
        fontWeight: 'bold',
        fontSize: 27,
    },
    info_container: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        marginBottom: 8,


    },
    year: {
        marginLeft: 10,
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 12,
    },
    artist: {
        fontWeight: 'bold',
        marginTop: 4,
    },
    soldout_container: {
        borderWidth: 1,
        borderColor: 'red',
        padding: 5,
        borderRadius: 5,
        

        
    },
    soldout_title: {
        color: 'red',
      
        
    },
    content_container: {
        flexDirection: 'row',
        
        
        
    },

   




});