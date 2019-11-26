import { StyleSheet } from 'react-native';
import theme from '../../modules/Theme';

export default StyleSheet.create({
    viewStyle: {
        flex: 1,
        alignContent: 'space-between', 
        justifyContent: 'space-between'
    }, 
    itemStyle: {
        marginTop: 20, 
        backgroundColor: 'white',  
    }, 
    buttonStyle: {
        backgroundColor: theme.COLOR_MAIN, 
        alignSelf: 'center', 
        marginTop: 40
    }, 
    textStyle: {
        marginTop: 20,
        fontSize: theme.FONT_SIZE_CAPITAL, 
        fontStyle: 'normal', 
        fontWeight: 'bold'
    }, 
    textCheckbox: {
        marginLeft: 20
    }
})