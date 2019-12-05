import React from 'react';
import { Container, Content, Item, Text, Input, View, Label, Button, Icon, CheckBox, Body } from 'native-base';
import theme from '../../modules/Theme';
import styles from './Styles';
import inputValidation from '../../modules/InputValidation';
import { connect } from 'react-redux';
import { createNewUser } from '../../actions/Index';

class RegisterScreen extends React.Component {
    static navigationOptions = {
        title: 'Registrieren',
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: theme.COLOR_MAIN,
        }
    }

    constructor(props) {
        super(props),
            this.state = {
                stateFirst: {
                    first: '',
                    firstIsValid: false,
                    firstrender: true
                },
                stateLast: {
                    last: '',
                    lastIsValid: false,
                    firstrender: true
                },
                stateMail: {
                    email: '',
                    emailIsValid: false,
                    firstrender: true
                },
                stateMatrknr: {
                    matrknr: '',
                    matrknrIsValid: false,
                    firstrender: true
                },
                stateStudies: {
                    studies: '',
                    studiesIsValid: false,
                    firstrender: true
                },
                statePassword: {
                    password: '',
                    passwordIsValid: false,
                    firstrender: true
                },
                studiesDual: false
            }
    }
    
    render() {
        return (
            <Container style={styles.containerStyle}>
                <Content>
                    <View style={styles.viewStyle}>
                        <Text style={styles.textStyle}>Bite fülle alle Felder aus, um dich zu Registrieren</Text>

                        <Item success={this.state.stateFirst.firstIsValid}
                            error={!this.state.stateFirst.firstIsValid && !this.state.stateFirst.firstrender}
                            floatingLabel
                            style={styles.itemStyle}>
                            <Label>Vorname</Label>
                            <Input
                                value={this.state.stateFirst.first}
                                onChangeText={(text) => {
                                    this.setState({ stateFirst: inputValidation(text, 'first') });
                                    this.render();
                                }
                                } />
                            <Icon name={this.getIcon(this.state.stateFirst.firstIsValid)} style={{ opacity: this.state.stateFirst.firstrender ? 0 : 1 }} />
                        </Item>
                        <Item success={this.state.stateLast.lastIsValid}
                            error={!this.state.stateLast.lastIsValid && !this.state.stateLast.firstrender}
                            floatingLabel
                            style={styles.itemStyle}>
                            <Label>Nachname</Label>
                            <Input
                                value={this.state.stateLast.last}
                                onChangeText={(text) => {
                                    this.setState({ stateLast: inputValidation(text, 'last') });
                                    this.render();
                                }
                                } />
                            <Icon name={this.getIcon(this.state.stateLast.lastIsValid)} style={{ opacity: this.state.stateLast.firstrender ? 0 : 1 }} />
                        </Item>
                        <Item success={this.state.stateMail.emailIsValid}
                            error={!this.state.stateMail.emailIsValid && !this.state.stateMail.firstrender}
                            floatingLabel style={styles.itemStyle}>
                            <Label>Email</Label>
                            <Input value={this.state.stateMail.email}
                                onChangeText={(text) => {
                                    this.setState({ stateMail: inputValidation(text, 'email') });
                                    this.render();
                                }
                                } />
                            <Icon name={this.getIcon(this.state.stateMail.emailIsValid)} style={{ opacity: this.state.stateMail.firstrender ? 0 : 1 }} />
                        </Item>
                        <Item success={this.state.stateMatrknr.matrknrIsValid}
                            error={!this.state.stateMatrknr.matrknrIsValid && !this.state.stateMatrknr.firstrender}
                            floatingLabel style={styles.itemStyle}>
                            <Label>Matrikelnummer</Label>
                            <Input value={this.state.stateMatrknr.matrknr}
                                onChangeText={(text) => {
                                    this.setState({ stateMatrknr: inputValidation(text, 'matrknr') });
                                    this.render();
                                }
                                } />
                            <Icon name={this.getIcon(this.state.stateMatrknr.matrknrIsValid)} style={{ opacity: this.state.stateMatrknr.firstrender ? 0 : 1 }} />
                        </Item>
                        <Item success={this.state.stateStudies.studiesIsValid}
                            error={!this.state.stateStudies.studiesIsValid && !this.state.stateStudies.firstrender}
                            floatingLabel style={styles.itemStyle}>
                            <Label>Was studierst du?</Label>
                            <Input value={this.state.stateStudies.studies}
                                onChangeText={(text) => {
                                    this.setState({ stateStudies: { studies: text, studiesIsValid: this.state.stateStudies.studiesIsValid, firstrender: this.state.stateStudies.firstrender } })
                                }}
                            />
                            <Icon name={this.getIcon(this.state.stateStudies.studiesIsValid)} style={{ opacity: this.state.stateStudies.firstrender ? 0 : 1 }} />
                        </Item>
                        <Item style={styles.itemStyle}>
                            <CheckBox checked={this.state.studiesDual}
                                onPress={() => {
                                    this.setState({ studiesDual: !this.state.studiesDual })
                                }}
                                color={theme.COLOR_MAIN_ONFOCUS} />
                            <Text style={styles.textCheckbox} >Ich studiere Dual</Text>
                        </Item>
                        <Item success={this.state.statePassword.passwordIsValid}
                            error={!this.state.statePassword.passwordIsValid && !this.state.statePassword.firstrender}
                            floatingLabel style={styles.itemStyle}>
                            <Label>Passwort</Label>
                            <Input
                                secureTextEntry
                                onChangeText={(text) => {
                                    this.setState({ statePassword: inputValidation(text, 'password') });
                                }}
                            />
                            <Icon name={this.getIcon(this.state.statePassword.passwordIsValid)} style={{ opacity: this.state.statePassword.firstrender ? 0 : 1 }} />
                        </Item>
                        <Button primary style={styles.buttonStyle} onPress={() => { this.registerHandler() }}>
                            <Text> Registrieren </Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }

    validateStudies = async () => {
        const studies = this.state.stateStudies.studies;
        const studiesDual = this.state.studiesDual ? "dual" : "Vollzeit";

        const URL = "http://192.168.58.2:3000/courses/" + studies + "/" + studiesDual;

        let response = await this.fetchStudiesFromAPI(URL);

        try {
            if (response.ANZAHL == 1) {
                this.state.stateStudies.studiesIsValid = true;
                this.state.stateStudies.firstrender = false;
                return true;
            } else {
                this.state.stateStudies.studiesIsValid = false;
                this.state.stateStudies.firstrender = false;
                return false;
            }
        } catch (error) {
            this.state.stateStudies.studiesIsValid = false;
            this.state.stateStudies.firstrender = false;
            return false;
        }
    }

    fetchStudiesFromAPI = async (URL) => {
        try {
            let res = await fetch(URL);
            let resJSON = await res.json();
            console.log(resJSON);
            return resJSON.result;
        } catch (error) {
            console.error(error);
        }
    }

    registerHandler = async () => {
        // if (await this.validateStudies()) {
        //     createUser();
        // } else {
        //     this.setState(this.state);
        // }
        this.createUser();
    }

    createUser = () => {
        const user = {
            first: this.state.stateFirst.first, 
            last: this.state.stateLast.last, 
            email: this.state.stateMail.email, 
            matrknr: this.state.stateMatrknr.matrknr, 
            pw: this.state.statePassword.password, 
            studies: this.state.stateStudies.studies, 
            dual: this.state.studiesDual
        };
        this.props.newUser(user);
    }

    getIcon = (isValid) => {
        return isValid ? 'checkmark-circle' : 'close-circle';
    }

}

mapDispatchToProps = dispatch => ({
    newUser: (user) => {
        dispatch(createNewUser(user));
    }
})

/**
 * @todo connect to recux to store state
 */
export default connect(null, mapDispatchToProps)(RegisterScreen);