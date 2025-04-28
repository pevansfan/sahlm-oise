import React, { useState } from 'react';
import { View, TextInput, Text, Alert, StyleSheet, TouchableOpacity, Image } from 'react-native';
import CustomButton from '../components/Button';
import users from '../data/users.json';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verificationCode, setVerificationCode] = useState('');

    const handleLogin = () => {
        const user = users.find(u => u.email === email && u.password === password);
        if (!user) {
            Alert.alert('Erreur', 'Identifiants incorrects.');
            return;
        }
        if (!user.verified) {
            Alert.alert('Erreur', 'Compte non vérifié.');
            return;
        }

        const code = Math.floor(100000 + Math.random() * 900000).toString();
        navigation.navigate('VerificationScreen', { email, code });
    };

    return (
        <View style={styles.container}>
            <View style={styles.topWave} />
            <View style={styles.bottomWave} />
            <Image
                source={require('../assets/img/hlm-oise.png')}
                style={styles.image}
                resizeMode="contain"
            />
            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
            />
            <Text style={styles.label}>Mot de passe</Text>
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <CustomButton title="Se connecter" onPress={handleLogin} />
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordScreen')}>
                <Text style={styles.link}>Mot de passe oubliée ?</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    label: {
        fontSize: 14,
        marginBottom: 4,
        fontWeight: 'normal',
        fontFamily: 'Manrope',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 16,
        fontSize: 16,
        fontFamily: 'Manrope',
    },
    buttonContainer: {
        marginBottom: 16,
    },
    link: {
        color: '#000',
        textDecorationLine: 'underline',
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 13,
    },

    topWave: {
        position: 'absolute',
        top: -100,
        left: -150,
        width: 300,
        height: 200,
        backgroundColor: '#b8e03a',
        borderRadius: 100,
        transform: [{ rotate: '45deg' }],
    },
    bottomWave: {
        position: 'absolute',
        bottom: -60,
        right: -60,
        width: 200,
        height: 200,
        backgroundColor: '#b8e03a',
        borderRadius: 100,
        transform: [{ rotate: '45deg' }],
    },

    image: {
        width: 150,
        height: 150,
        marginBottom: 40,
        alignSelf: 'center',
    },
});
