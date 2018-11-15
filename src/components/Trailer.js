import React, { Component } from 'react';
import { View, WebView } from 'react-native';
import { Container, Header, Icon, Button, Title, Left, Body, Right } from 'native-base';
class Trailer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        const { navigation } = this.props;
        const trailer = navigation.getParam('trailer')
        return (
            <View style={{ flex: 1}}>
            <Header style={{ backgroundColor: '#2f3640'}}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Trailer</Title>
                    </Body>
                    <Right />
                </Header>
                <WebView
                    source={{ uri: 'https://www.youtube.com/watch?v=' + trailer.key }}
                    style={{ flex: 1 }}
                />
            </View>


        );
    }
}

export default Trailer;