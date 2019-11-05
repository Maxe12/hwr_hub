import { StyleSheet } from 'react-native';
import {Dimensions } from "react-native";
import theme from '../../modules/Theme';

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
        color: theme.COLOR_FONT,
        fontSize: theme.FONT_SIZE_MEDIUM,
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
    }, 
    buttonStyle: {
        alignSelf: 'center', 
        color: theme.COLOR_MAIN
    }
})

export default styles