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
                        source={{ uri: 'https://i.ytimg.com/vi/245_u3OsrnE/maxresdefault.jpg'}} />
                    </View>
                    <List>
                        <ListItem selected icon onPress={() => this.props.navigation.navigate('Region')}>
                            <Left>
                                <Icon name='thumbs-up' type='FontAwesome' />
                            </Left>
                            <Body>
                                <Text>Latest Movies</Text>
                            </Body>
                        </ListItem>
                        <ListItem selected icon>
                            <Left>
                                <Icon name='flame' type='Ionicons' />
                            </Left>
                            <Body>
                                <Text>Hot Movies</Text>
                            </Body>
                        </ListItem>
                        <ListItem selected icon>
                            <Left>
                                <Icon name='calendar' type='FontAwesome' />
                            </Left>
                            <Body>
                                <Text>Upcoming Movies</Text>
                            </Body>
                        </ListItem>
                        <ListItem selected icon>
                            <Left>
                                <Icon name='star' type='FontAwesome' />
                            </Left>
                            <Body>
                                <Text>Top Rated Movies</Text>
                            </Body>
                        </ListItem>
                    </List>
                </Content>
            </Container>
                );
            }
        }
        
export default Menu;