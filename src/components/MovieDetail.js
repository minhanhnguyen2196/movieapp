import React, { PureComponent } from 'react';
import { View, Image, ScrollView, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import { Container, Content, Button, Text, Header, Left, Icon, Right, Body, Title } from 'native-base';
const baseImgUrl = 'https://image.tmdb.org/t/p/w185/';
const baseLogoUrl = 'https://image.tmdb.org/t/p/w92/';
const url = 'https://api.themoviedb.org/3/movie/';
const param = '?api_key=de2160c2c7da7ae411932a495296b3aa&language=en-US&append_to_response=credits,releases,videos'

var profile = require('../assets/profile.png')
class MovieDetail extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            movieDetail: {},
            loading: false
        };
    }
    componentWillMount = () => {
        const { navigation } = this.props;
        const detail = navigation.getParam('detail');
        const fullUrl = url + detail.id + param;
        fetch(fullUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(resJson => {
                console.log(resJson);
                this.setState({ movieDetail: resJson })
            })
            .catch(err => console.log(err))
    }

    _renderImage = ({ item }) => (
        <View style={{ alignItems: 'center', padding: 10 }}>
            <Image source={ item.profile_path ? {  uri: baseImgUrl + item.profile_path } : profile} style={{ width: 80, height: 100 }} />
            <Text style={{ padding: 4 }}>{item.name}</Text>
        </View>
    );


    render() {
        const { loading, movieDetail } = this.state;
        const { navigation } = this.props;
        const detail = navigation.getParam('detail');
        let descr = movieDetail.genres ? movieDetail.genres.map((val, key) => {
            if (movieDetail.genres.length === key + 1) {
                return val.name
            } else return val.name + ', '
        }) : ''

        let directorArray = movieDetail.credits ? movieDetail.credits.crew.filter(o => o.job === 'Director') : [];
        let director = directorArray.length > 0 ? directorArray[0].name : ''
        let productionCompany = movieDetail.production_companies ? movieDetail.production_companies.map((val, key) => {
            return (
                <View key={key} style={{ alignItems: 'center', padding: 10 }}>
                    <Image source={{ uri: baseLogoUrl + val.logo_path }} resizeMode='contain' style={{ flex: 1, minWidth: 92, minHeight: 37 }} />
                    <Text style={{ padding: 4 }}>{val.name}</Text>
                </View>
            )
        }) : null

        let language = movieDetail.spoken_languages ? movieDetail.spoken_languages.map((val, key) => {
            if (movieDetail.spoken_languages.length === key + 1) {
                return val.name
            } else return val.name + ', '
        }) : ''
        return (
            <Container>
                <Header style={{ backgroundColor: '#2f3640' }}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Detail</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    {
                        movieDetail.title ?
                            <View style={{ flex: 1 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flex: 1 }}>
                                        <Image
                                            style={{ height: 180, width: 120, }}
                                            source={{ uri: baseImgUrl + movieDetail.poster_path }} />
                                    </View>

                                    <View style={{ paddingLeft: 20, flex: 2 }}>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{movieDetail.title}</Text>
                                        <Text>IMDb point: {movieDetail.vote_average}</Text>
                                        <Text>Director: {director} </Text>
                                        <Text>Language: {language}</Text>
                                        <Text>Released: {detail.release_date}</Text>
                                        <Text>Duration: {movieDetail.runtime} minutes</Text>
                                        <Text>Revenue: {movieDetail.revenue} $</Text>
                                        <TouchableOpacity
                                            onPress={() => this.props.navigation.navigate('Trailer', { trailer: movieDetail.videos.results[0] })}
                                            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', padding: 5 }}>
                                            <Icon name='play-circle' type='FontAwesome' style={{ color: '#2980b9' }} fontSize={18} />
                                            <Text style={{ color: '#2980b9', fontSize: 15, paddingHorizontal: 4 }}>Watch trailer</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={{ padding: 10 }}>
                                    <Text>Genres</Text>
                                    <Text>{descr}</Text>
                                </View>

                                <View style={{ padding: 10 }}>
                                    <Text style={{ paddingVertical: 10 }}>Production</Text>
                                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                        <View style={{ flexDirection: 'row' }}>
                                            {productionCompany}
                                        </View>
                                    </ScrollView>
                                </View>

                                <View style={{ padding: 10 }}>
                                    <Text style={{ paddingVertical: 10 }}>Cast</Text>
                                    {
                                        movieDetail.credits &&
                                        <FlatList
                                            keyExtractor={(item, index) => index.toString()}
                                            data={movieDetail.credits.cast}
                                            renderItem={this._renderImage}
                                            horizontal={true}
                                            removeClippedSubviews
                                            showsHorizontalScrollIndicator={false}
                                        />

                                    }
                                </View>
                                <View style={{ padding: 10 }}>
                                    <Text style={{ paddingVertical: 10 }}>Overview</Text>
                                    <Text>
                                        {movieDetail.overview}
                                    </Text>
                                </View>
                            </View>
                            : <ActivityIndicator animating color='#c23616' size='large' />
                    }
                </Content>
            </Container>
        );
    }
}

export default MovieDetail;


{/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    <View style={{ flexDirection: 'row' }}>
        {cast}
    </View>
</ScrollView> */}