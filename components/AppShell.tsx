import CalendarSvg from '@/assets/icons/calendar.svg';
import CrittersSvg from '@/assets/icons/critters.svg';
import IslandSvg from '@/assets/icons/island.svg';
import VillagersSvg from '@/assets/icons/villagers.svg';
// import Constants from 'expo-constants';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PressableIcon } from './PressableIcon';

//svgrepo.com for icons

export const AppShell = () => {
    // const API_KEY = Constants.expoConfig?.extra?.apiKey;

    return (
        <View style={styles.container}>
            <PressableIcon
                icon={CalendarSvg}
                backgroundColor='pink'
                onPress={() => console.log('Tapped!')}
                label='calendar'
            />
            <PressableIcon
                icon={IslandSvg}
                backgroundColor='#CDEEF7'
                onPress={() => console.log('Tapped!')}
                label='my island'
            />
            <PressableIcon
                icon={VillagersSvg}
                backgroundColor='#F7E7CE'
                onPress={() => console.log('Tapped!')}
                label='villagers'
            />
            <PressableIcon
                icon={CrittersSvg}
                backgroundColor='#FFFFC5'
                onPress={() => console.log('Tapped!')}
                label='critters'
            />
            {/* <PressableIcon
                icon={ }
                backgroundColor=''
                onPress={() => console.log('Tapped!')}
                label=''
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        gap: 20,
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    }
})