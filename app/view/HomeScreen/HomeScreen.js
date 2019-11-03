import React from 'react';
import { Container } from 'native-base';
import Header1 from '../../components/Header/CustomHeader';
import LoginBody from '../../components/LoginContent/LoginBody';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <Container>
              <Header1 /> 
              <LoginBody navigation={this.props.navigation} />
            </Container>
        )
    }
}
