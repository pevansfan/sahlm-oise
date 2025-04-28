import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet } from 'react-native';
import CustomButton from '../components/Button';
import { CommonActions } from '@react-navigation/native';

export default function VerificationScreen({ route, navigation }) {
    const { email, code } = route.params;
    const [userCode, setUserCode] = useState('');

    const handleVerify = () => {
        if (userCode === code) {
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'HomeScreen' }],
                })
            );
        } else {
            Alert.alert('Erreur', 'Code incorrect. Réessayez.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Un code de vérification a été généré pour : {email}. Le code est : {code}</Text>
            <TextInput
                style={styles.input}
                placeholder="Entrez le code"
                keyboardType="numeric"
                value={userCode}
                onChangeText={setUserCode}
            />
            <CustomButton title="Vérifier" onPress={handleVerify} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
    },
    label: {
        fontSize: 16,
        marginBottom: 12,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
    },
});
