import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const stylesForHeader = StyleSheet.create({
    header: {
        backgroundColor: 'red',
        paddingTop: getStatusBarHeight(),
        height: 70 + getStatusBarHeight(),
        paddingBottom: 0
    }
});

export default stylesForHeader