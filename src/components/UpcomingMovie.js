import React, { Component } from 'react';
import { View, ActivityIndicator, TouchableWithoutFeedback, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Container, Header, Content, Left, Right, Body, Text, Button, Title, Input, Item, Icon } from 'native-base'

const baseImgUrl = 'https://image.tmdb.org/t/p/w300/';
const { height, width } = Dimensions.get('window');
const url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=de2160c2c7da7ae411932a495296b3aa&language=en-US&page=1';
class UpcommingMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            loading: true, searchInput: ''
        };
    }

    componentDidMount = () => {
        fetch(url, {
            method: 'get'
        })
            .then(res => res.json())
            .then(resJson => {
                this.setState({ list: resJson.results, loading: false })
            })
    }

    render() {
        const { loading, list, searchInput } = this.state;
        let images = list.map((val, key) => {
            return (
                <TouchableWithoutFeedback key={key} onPress={() => this.props.navigation.navigate('MovieDetail', { detail: val })} >
                    <Image
                        source={{ uri: baseImgUrl + val.poster_path }}
                        style={{ width: width / 2, height: 250, }}
                    />
                </TouchableWithoutFeedback>
            )
        })

        return (
            <Container>
                <Header style={{ backgroundColor: '#2f3640' }}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                            <Icon name='bars' type='FontAwesome' />
                        </Button>
                    </Left>
                    <Body style={{ flex: 1, alignItems: 'center' }}>
                        <Title>Upcomming movies</Title>
                    </Body>
                    <Right></Right>
                </Header>
                <Header searchBar rounded style={{ backgroundColor: '#2f3640' }}>
                    <Item style={{ alignItems: 'center' }}>
                        <Icon name="ios-search" />
                        <Input
                            returnKeyType='search'
                            ref={input => { this.textInput = input }}
                            defaultValue={searchInput}
                            onSubmitEditing={() => this.searchMovie()}
                            onChangeText={(text) => this._onChangeText(text)}
                            placeholder="Search" />

                        {
                            (searchInput !== '') &&
                            <TouchableOpacity
                                onPress={() => this.cancelSearch()}
                                style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: 'steelblue', paddingRight: 20, }}>Cancel</Text>
                            </TouchableOpacity>
                        }

                    </Item>
                </Header>
                <Content >
                    {
                        loading && <ActivityIndicator animating color='#c23616' size='large' />
                    }
                    <View style={{
                        flexDirection: 'row',
                        flex: 1,
                        flexWrap: 'wrap',

                    }}>
                        {images}
                    </View>
                </Content>
            </Container>
        )
    }
}

export default UpcommingMovie;