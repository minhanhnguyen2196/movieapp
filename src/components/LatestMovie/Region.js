import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Image, Dimensions } from 'react-native';
import { Container, Content, Header, Left, Right, Body, Text, Button, Icon, Title } from 'native-base';

const { width, height } = Dimensions.get('window')
class Region extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                            <Icon name='bars' type='FontAwesome' />
                        </Button>
                    </Left>
                    <Body style={{ flex: 1, alignItems: 'center' }}>
                        <Title>Choose region</Title>
                    </Body>
                    <Right></Right>
                </Header>
                <Content>
                    <View style={{
                        flexDirection: 'row',
                        flex: 1,
                        flexWrap: 'wrap',
                    }}>
                        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('LatestList', { region: 'us' })} >
                            <View style={{ alignItems: 'center', justifyContent: 'center', paddingBottom: 5 }}>
                                <Image
                                    source={{ uri: 'https://cdn.countryflags.com/thumbs/united-states-of-america/flag-square-250.png' }}
                                    style={{ width: width / 2, height: 100, }}
                                />
                                <Text>US</Text>
                            </View>

                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('LatestList', { region: 'vn' })} >
                            <View style={{ alignItems: 'center', justifyContent: 'center', paddingBottom: 5}}>
                                <Image
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/800px-Flag_of_Vietnam.svg.png' }}
                                    style={{ width: width / 2 , height: 100, }}
                                />
                                <Text>Vietnam</Text>
                            </View>

                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('LatestList', { region: 'kr' })} >
                            <View style={{ alignItems: 'center', justifyContent: 'center', paddingBottom: 5  }}>
                                <Image
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Flag_of_the_Provisional_Government_of_the_Republic_of_Korea.svg/1200px-Flag_of_the_Provisional_Government_of_the_Republic_of_Korea.svg.png' }}
                                    style={{ width: width / 2  , height: 100, }}
                                />
                                <Text>Korea</Text>
                            </View>

                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('LatestList', { region: 'cn' })} >
                            <View style={{ alignItems: 'center', justifyContent: 'center', paddingBottom: 5  }}>
                                <Image
                                    source={{ uri: 'data:image/png;base64,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' }}
                                    style={{ width: width / 2 , height: 100, }}
                                />
                                <Text>China</Text>
                            </View>

                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('LatestList', { region: 'fr' })} >
                            <View style={{ alignItems: 'center', justifyContent: 'center', paddingBottom: 5  }}>
                                <Image
                                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDR3-Ar03rdHGQwEc0M6SSMaobnnCehdvLEhi45Di8r1TjhM1J' }}
                                    style={{ width: width / 2 , height: 100, }}
                                />
                                <Text>France</Text>
                            </View>

                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('LatestList', { region: 'in' })} >
                            <View style={{ alignItems: 'center', justifyContent: 'center', paddingBottom: 5  }}>
                                <Image
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png' }}
                                    style={{ width: width / 2 , height: 100, }}
                                />
                                <Text>India</Text>
                            </View>

                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('LatestList', { region: 'uk' })} >
                            <View style={{ alignItems: 'center', justifyContent: 'center', paddingBottom: 5  }}>
                                <Image
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png' }}
                                    style={{ width: width / 2 , height: 100, }}
                                />
                                <Text>England</Text>
                            </View>

                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('LatestList', { region: 'de' })} >
                            <View style={{ alignItems: 'center', justifyContent: 'center', paddingBottom: 5  }}>
                                <Image
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1280px-Flag_of_Germany.svg.png' }}
                                    style={{ width: width / 2 , height: 100, }}
                                />
                                <Text>German</Text>
                            </View>

                        </TouchableWithoutFeedback>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default Region;