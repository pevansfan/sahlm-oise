import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { fichesDetaillees } from '../data/dataFiches'; // Importation des données
import CustomButton from '../components/Button';
import IconFontAw5 from 'react-native-vector-icons/FontAwesome5';

export default function SearchScreen({ route, navigation }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    // Fonction de recherche qui filtre les fiches en fonction de la requête
    const handleSearch = () => {
        const filteredResults = Object.keys(fichesDetaillees).filter(key =>
            key.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (filteredResults.length === 0) {
            setErrorMessage('Aucun résultat trouvé');
        } else {
            setErrorMessage('');
        }

        setResults(filteredResults);
    };

    // Fonction pour afficher les détails de chaque fiche sélectionnée
    const renderItem = ({ item }) => {
        const fiche = fichesDetaillees[item];
        return (
            <TouchableOpacity style={styles.resultItem}>
                <Text style={styles.resultText}>{item}</Text>
                <Text style={styles.resultDescription}>{fiche.descriptif}</Text>
                <Text style={styles.resultQualification}>{fiche.qualification}</Text>
                <Text style={styles.resultSolution}>{fiche.solution}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <IconFontAw5 name="chevron-left" size={24} color="#000" />
            </TouchableOpacity>
            <Text style={styles.header}>Recherche de Fiches</Text>
            <TextInput
                style={styles.searchInput}
                placeholder="Rechercher une fiche..."
                value={searchQuery}
                onChangeText={setSearchQuery}
            />
            <CustomButton title="Rechercher" onPress={handleSearch} />

            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

            <FlatList
                data={results}
                keyExtractor={(item) => item}
                renderItem={renderItem}
                style={styles.resultList}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f9f9f9',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
        fontFamily: 'Manrope',
    },
    searchInput: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 10,
        marginBottom: 20,
    },
    errorMessage: {
        color: 'red',
        marginBottom: 10,
        fontSize: 16,
    },
    resultList: {
        marginTop: 10,
    },
    resultItem: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    resultText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    resultDescription: {
        fontSize: 14,
        color: '#555',
        marginTop: 5,
    },
    resultQualification: {
        fontSize: 14,
        color: '#555',
        marginTop: 5,
    },
    resultSolution: {
        fontSize: 14,
        color: '#555',
        marginTop: 5,
    },

    backButton: {
        marginBottom: 30,
    },
});
