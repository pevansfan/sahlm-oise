import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontAw6 from 'react-native-vector-icons/FontAwesome6';
import IconFontAw5 from 'react-native-vector-icons/FontAwesome5';

export default function HomeScreen({ navigation }) {
    const handleLogout = () => {
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            })
        );
    };

    const handleCardPress = (categoryType) => {
        navigation.navigate('CategoriesScreen', { type: categoryType });
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.topWave} />
            <Image
                source={require('../assets/img/hlm-oise2.png')}
                style={styles.image}
                resizeMode="contain"
            />
            <Text style={styles.title}>Salut ! 👋</Text>
            <Text style={styles.title}>Comment puis-je t'aider aujourd'hui ?</Text>
            <View style={styles.cards}>
                <TouchableOpacity style={styles.card} onPress={() => handleCardPress('collectif')}>
                    <IconFontAw6 style={styles.icon} name="user-group" size={24} color="#fff" />
                    <Text style={styles.cardTitle}>Atteintes à la tranquilité des espaces collectifs</Text>
                </TouchableOpacity>

                <View style={styles.card}>
                    <IconFontAw6 style={styles.icon} name="user-large" size={24} color="#fff" />
                    <Text style={styles.cardTitle}>Atteintes à la tranquilité des espaces privatifs</Text>
                </View>
                <View style={styles.card}>
                    <IconFontAw5 style={styles.icon} name="house-damage" size={24} color="#fff" />
                    <Text style={styles.cardTitle}>Atteintes dû à des détournements d’usage</Text>
                </View>
                <View style={styles.card}>
                    <IconFontAw5 style={styles.icon} name="hand-holding-usd" size={24} color="#fff" />
                    <Text style={styles.cardTitle}>Atteintes aux biens</Text>
                </View>
                <View style={styles.card}>
                    <IconMaterial style={styles.icon} name="sleep-off" size={24} color="#fff" />
                    <Text style={styles.cardTitle}>Atteintes à la tranquilité des espaces collectifs</Text>
                </View>
                <View style={styles.card}>
                    <IconMaterial style={styles.icon} name="sleep-off" size={24} color="#fff" />
                    <Text style={styles.cardTitle}>Atteintes à la tranquilité des espaces collectifs</Text>
                </View>
            </View>
            {/* <Button
                title="Déconnexion"
                onPress={() => {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Se connecter' }],
                    });
                }}
            /> */}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        padding: 25,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 30,
        fontFamily: 'Manrope',
        fontWeight: 'bold'
    },

    icon: {
        marginBottom: 20,
    },

    topWave: {
        position: 'absolute',
        top: -80,
        right: -80,
        width: 300,
        height: 150,
        backgroundColor: '#b8e03a',
        borderRadius: 100,
        transform: [{ rotate: '45deg' }],
    },

    image: {
        width: 100,
        height: 100,
        marginBottom: 40,
    },

    cards: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 50,
        marginBottom: 50,
        alignItems: 'center',
        gap: 10,
    },

    card: {
        display: 'flex',
        flexBasis: '48%',
        backgroundColor: '#6AB023',
        padding: 20,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#578825',
        height: 150
    },

    cardTitle: {
        color: '#fff',
        fontFamily: 'Manrope',
    },
});
