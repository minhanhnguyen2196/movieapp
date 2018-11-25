import React, { Component } from 'react';
import { View, Image, TextInput, Dimensions, TouchableWithoutFeedback, ActivityIndicator, TouchableOpacity } from 'react-native';
import {
    Header,
    Container,
    Content,
    Left,
    Right,
    Body,
    Button,
    Icon,
    Title,
    InputGroup,
    Input,
    Text,
    Item

} from 'native-base'

const fullUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=de2160c2c7da7ae411932a495296b3aa&sort_by=popularity.desc'
const baseImgUrl = 'https://image.tmdb.org/t/p/w300/';
const { height, width } = Dimensions.get('window');
class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialList: [],
            searchList: [],
            loading: true,
            searchInput: ''
        };
    }

    componentDidMount() {
        fetch(fullUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(resJson => {
                this.setState({ initialList: resJson.results, loading: false, searchList: resJson.results })
            })
            .catch(err => console.log(err))
    }
    _onChangeText = (text) => {
        this.setState({ searchInput: text })

    }

    searchMovie = () => {
        const { searchInput } = this.state;
        if (searchInput !== '') {
            fetch('https://api.themoviedb.org/3/search/movie?api_key=de2160c2c7da7ae411932a495296b3aa&language=en-US&page=1&query=' + searchInput,
                {
                    method: 'get',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                .then(res => res.json())
                .then(resJson => {
                    this.setState({ searchList: resJson.results })
                })
        }
    }
    cancelSearch = () => {
        this.setState({ searchInput: '', searchList: this.state.initialList })
        this.textInput._root.clear();
    }
    render() {
        const { loading, searchInput, searchList } = this.state;
        let images = searchList.map((val, key) => {
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
                        <Title>Hot movies</Title>
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
        );
    }
}

export default MainScreen;