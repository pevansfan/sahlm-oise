import React, { useState } from 'react';
import { View, TextInput, Text, Alert, StyleSheet } from 'react-native';
import users from '../data/users.json';
import CustomButton from '../components/Button';

export default function ForgotPasswordScreen({navigation}) {
    const [email, setEmail] = useState('');

    const handleSend = async () => {
        const user = users.find(u => u.email === email);
        if (!user) {
            Alert.alert('Erreur', 'Utilisateur non trouvé');
            return;
        }
        
        Alert.alert('Succès !', 'Le lien de réintialisation a bien été envoyé.');

    };

    return (
        <View style={styles.container}>
            <Text style={styles.description}>Entrez votre email pour réinitialiser le mot de passe :</Text>
            <TextInput style={styles.input} value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" />
            <CustomButton title="Envoyer" onPress={handleSend} />
            <Text style={styles.link} onPress={() => navigation.navigate('Se connecter')}>Revenir à la page de connexion</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        marginTop: 50,
        padding: 25,
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center'
    },

    description: {
        marginBottom: 20,
    },

    label: {
        fontSize: 14,
        marginBottom: 4,
        fontWeight: 'normal',
        fontFamily: 'Manrope',
    },
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 16,
        fontSize: 16,
        fontFamily: 'Manrope',
    },
    link: {
        color: '#000',
        textDecorationLine: 'underline',
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 13,
    },
});

