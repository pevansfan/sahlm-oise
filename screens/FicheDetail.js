import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { fichesDetaillees } from '../data/dataFiches';
import IconFontAw5 from 'react-native-vector-icons/FontAwesome5';

export default function FicheDetaillee({ route, navigation }) {
    const { title } = route.params;
    const fiche = fichesDetaillees[title] || {
        descriptif: "Contenu non disponible.",
        qualification: "Contenu non disponible.",
        solution: "Contenu non disponible.",
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.topWave} />
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <IconFontAw5 name="chevron-left" size={24} color="#000" />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>

            <View style={styles.sectionDescriptif}>
                <Text style={styles.sectionTitle}>Descriptif</Text>
                <Text style={styles.sectionText}>{fiche.descriptif}</Text>
            </View>

            <View style={styles.sectionQualification}>
                <Text style={styles.sectionTitle}>Qualification juridique</Text>
                <Text style={styles.sectionText}>{fiche.qualification}</Text>
            </View>

            <View style={styles.sectionSolution}>
                <Text style={styles.sectionTitle}>Solution</Text>
                <Text style={styles.sectionText}>{fiche.solution}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        marginTop: 50,
        padding: 25,
        backgroundColor: '#fff',
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
    title: {
        fontSize: 20,
        fontWeight: 600,
        marginBottom: 20,
        fontFamily: 'Manrope',
        maxWidth: '65%',
    },
    sectionDescriptif: {
        backgroundColor: '#f0f8ff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    sectionQualification: {
        backgroundColor: '#ffe4e1',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    sectionSolution: {
        backgroundColor: '#e6ffe6',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
        fontFamily: 'Manrope',
    },
    sectionText: {
        fontSize: 11,
        fontFamily: 'Manrope',
    },

    backButton: {
        marginBottom: 30,
    },
});
