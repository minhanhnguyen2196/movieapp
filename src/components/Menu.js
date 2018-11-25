import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Container, Content, List, ListItem, Text, Left, Right, Icon, Body } from 'native-base';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Container>
                <Content>
                    <View>
                        <Image
                            style={{ width: '100%', height: 200 }}
                            source={{ uri: 'https://i.ytimg.com/vi/245_u3OsrnE/maxresdefault.jpg' }} />
                    </View>
                    <List>
                        <ListItem selected icon onPress={() => this.props.navigation.navigate('Region')}>
                            <Left>
                                <Icon name='thumbs-up' type='FontAwesome' />
                            </Left>
                            <Body>
                                <Text style={{ color: 'black' }}>Latest Movies</Text>
                            </Body>
                        </ListItem>
                        <ListItem selected icon onPress={() => this.props.navigation.navigate('MainScreen')}>
                            <Left>
                                <Icon name='flame' type='Ionicons' style={{ color: 'red' }} />
                            </Left>
                            <Body>
                                <Text style={{ color: 'black' }}>Hot Movies</Text>
                            </Body>
                        </ListItem>
                        <ListItem selected icon onPress={() => this.props.navigation.navigate('UpcommingMovie')}>
                            <Left>
                                <Icon name='calendar' type='FontAwesome' style={{ color: '#16a085' }} />
                            </Left>
                            <Body>
                                <Text style={{ color: 'black' }}>Upcoming Movies</Text>
                            </Body>
                        </ListItem>
                        <ListItem selected icon onPress={() => this.props.navigation.navigate('TopRatedMovie')}>
                            <Left>
                                <Icon name='star' type='FontAwesome' style={{ color: '#f1c40f' }} />
                            </Left>
                            <Body>
                                <Text style={{ color: 'black' }}>Top Rated Movies</Text>
                            </Body>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}

export default Menu;