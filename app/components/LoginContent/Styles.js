import { StyleSheet } from 'react-native';
import {Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get('window').width); 
const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.9
    },
    loginWindow: {
        alignContent: 'center',
    },
    heading: {
        color: 'black',
        fontSize: 15,
    },
    cardItemStyle: {
        backgroundColor: 'rgba(126, 126, 126, 0)',
    },
    cardStyle: {
        alignItems: 'center', 
        width: screenWidth, 
        height: 300,  
        backgroundColor: 'white', 
        opacity: 0.9, 
        borderRadius: 4, 
        borderColor: 'black', 
        borderStyle: 'solid', 
        justifyContent: 'space-evenly'
    }
})

export default styles