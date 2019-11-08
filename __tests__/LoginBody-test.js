import 'react-native';
import React from 'react';
import LoginBody from '../app/screens/LoginContent/LoginBody';
import renderer from 'react-test-renderer';
import store from '../app/store/Index';

test('LoginBody snapChot-test', ()=>{
    const snap = renderer.create(
        <LoginBody  store={store} />
    ).toJSON();
    expect(snap).toMatchSnapshot();
})