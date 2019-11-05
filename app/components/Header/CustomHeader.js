import React from 'react';
import { Header, Left, Body, Title, Right } from 'native-base';
import stylesForHeader from '../Header/Styles';

export default class Header1 extends React.Component {
    render() {
        return (
            <Header style={stylesForHeader.header}>
                <Left style={{ flex: 1 }}>
                </Left>
                <Body style={{ flex: 1 }}>
                    <Title style={{ color: 'white' }}>HWR Hub</Title>
                </Body>
                <Right style={{ flex: 1 }} />
            </Header>
        );
    }
}