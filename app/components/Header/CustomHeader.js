import React from 'react';
import { Header, Left, Button, Body, Title, Right, Icon } from 'native-base';
import stylesForHeader from '../Header/Styles';

export default class Header1 extends React.Component {
    render() {
        return (
            <Header style={stylesForHeader.header}>
                <Left style={{ flex: 1 }}>
                    <Button transparent>
                        <Icon style={{ color: 'white' }} name='menu' />
                    </Button>
                </Left>
                <Body style={{ flex: 1 }}>
                    <Title style={{ color: 'white' }}>HWR Hub</Title>
                </Body>
                <Right style={{ flex: 1 }} />
            </Header>
        );
    }
}