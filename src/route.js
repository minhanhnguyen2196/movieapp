import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import MainScreen from '../src/components/MainScreen';
import Trailer from './components/Trailer';
import MovieDetail from './components/MovieDetail';
import Menu from './components/Menu';
import Region from './components/LatestMovie/Region';
import LatestList from './components/LatestMovie/LatestList'
import UpcommingMovie from './components/UpcomingMovie';
import TopRatedMovie from './components/TopRatedMovie';
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Easing, Animated, Dimensions } from 'react-native';

const { width } = Dimensions.get('window')
export const AppStack = createStackNavigator({
    MainScreen,
    Trailer,
    MovieDetail,
    Menu,
    Region,
    LatestList,
    UpcommingMovie,
    TopRatedMovie
}, {
        initialRouteName: 'MainScreen',
        navigationOptions: {
            header: null
        },
        transitionConfig: () => ({
            transitionSpec: {
                duration: 700,
                easing: Easing.out(Easing.poly(4)),
                timing: Animated.timing,
                useNativeDriver: true,
            },
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps
                const thisSceneIndex = scene.index
                const width = layout.initWidth

                const translateX = position.interpolate({
                    inputRange: [thisSceneIndex - 1, thisSceneIndex],
                    outputRange: [width, 0],
                })

                return { transform: [{ translateX }] }
            }
        })
    })

export const AppDrawer = createDrawerNavigator(
    {
        AppStack,
        Menu
    },
    {
        drawerPosition: 'left',
        drawerWidth: width * 0.7,
        contentComponent: Menu,
        initialRouteName: 'AppStack'
    }
)