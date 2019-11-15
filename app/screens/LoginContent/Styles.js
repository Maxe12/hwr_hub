import { StyleSheet } from 'react-native';
import theme from '../../modules/Theme';

const BACKGROUND_COLOR = 'rgba(215, 215, 212, 0.8)';
const COMPONENT_WIDTH = 280;

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1, 
    },
    cardItemHeader: {
        backgroundColor: BACKGROUND_COLOR, 
        marginTop: 10
    }, 
    cardItemBody: {
        backgroundColor: BACKGROUND_COLOR
    }, 
    textHeader: {
        textAlign: 'center', 
        color: 'black'
    }, 
    inputItems: {
        width: COMPONENT_WIDTH, 
        marginTop: 20, 
        backgroundColor: 'white'
    }, 
    buttonItem: {
        marginTop: 30
    }, 
    buttonComponent: {
        width: COMPONENT_WIDTH, 
        backgroundColor: theme.COLOR_MAIN
    }, 
    registerText: {
        marginTop: 20
    }, 
    opacityStyle: {
        color: theme.COLOR_MAIN
    }
})

export default styles