import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SvgProps } from 'react-native-svg';

type PressableIconProps = {
    icon: React.ComponentType<SvgProps>;
    backgroundColor: string;
    onPress?: () => void;
    label: string;
}

export const PressableIcon = ({ icon: IconComponent, backgroundColor, onPress, label }: PressableIconProps) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={onPress}>
                {({ pressed }) => (
                    <View
                        style={[
                            styles.square,
                            {
                                backgroundColor,
                                transform: [{ scale: pressed ? 0.96 : 1 }],
                                opacity: pressed ? 0.9 : 1,
                            },
                        ]}
                    >
                        <IconComponent width={65} height={65} />
                    </View>
                )}
            </Pressable>
            <Text style={styles.label}>{label}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    square: {
        height: 90,
        width: 90,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 9,

        // iOS shadow
        shadowColor: '#C9B8A6',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.35,
        shadowRadius: 6,

        // Android shadow
        elevation: 6,
    },
    label: {
        fontFamily: 'Sniglet_400Regular',
        fontSize: 15,
        letterSpacing: 0.3,
        color: '#5A4F45',
    }
})