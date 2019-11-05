import React from 'react';
import { connect } from 'react-redux';
import {Text} from 'native-base';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props)
        return (
            <Text style={{ alignSelf: 'center' }}>Hello {this.props.user.username}</Text>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      user: state.Userdata
    };
  };

export default connect(mapStateToProps, null)(Greeting)