import React from 'react';
import { Container, Text } from 'native-base';
import Header1 from '../../components/Header/CustomHeader';

export default class MainScreen extends React.Component{
    render(){
        return(
            <Container>
                <Header1 />
                <Text style={{alignItems: 'center', justifyContent: 'center'}}>Succesfully logged in!</Text>
            </Container>
        );
    }
}