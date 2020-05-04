import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import theme from '../../modules/Theme';

const stylesForHeader = StyleSheet.create({
    header: {
        backgroundColor: theme.COLOR_MAIN,
        paddingTop: getStatusBarHeight(),
        height: 60 + getStatusBarHeight(),
        paddingBottom: 0
    }
});

/**
 * @todo nach Statusbar entscheiden wie groß der Header ist...
 */

export default stylesForHeader