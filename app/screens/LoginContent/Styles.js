import { StyleSheet } from 'react-native';
import {Dimensions } from "react-native";
import theme from '../../modules/Theme';

const screenWidth = Math.round(Dimensions.get('window').width); 
const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1, 
    },
    loginWindow: {
        alignContent: 'center',
    },
    heading: {
        color: theme.COLOR_FONT,
        fontSize: theme.FONT_SIZE_CAPITAL,
    },
    cardItemStyle: {
        opacity: 0.8
    },
    cardStyle: {
        alignItems: 'center', 
        width: screenWidth, 
        height: 300,    
        borderRadius: 4, 
        borderColor: 'black', 
        borderStyle: 'solid', 
        justifyContent: 'space-evenly', 
        opacity: 0.8
    }, 
    buttonStyle: {
        alignSelf: 'center', 
        backgroundColor: theme.COLOR_MAIN
    }
})

export default styles