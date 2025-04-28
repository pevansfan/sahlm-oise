import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from 'react-native';
import IconFontAw5 from 'react-native-vector-icons/FontAwesome5';

export default function CategoriesScreen({ route, navigation }) {
    const { type } = route.params;

    const categoriesData = {
        collectif: [
            'Salissures, abandon d’objets, encombrants et jets de détritus',
            'Dégradations dans les halls',
            'Squats dans les parties communes',
        ],
        privatif: [
            'Fêtes à répétition',
            'Conflits de voisinage',
            'Animaux bruyants',
        ],
        usage: [
            'Sous-location illégale',
            'Utilisation commerciale du logement',
            'Transformation sans autorisation',
        ],
        biens: [
            'Vols dans les parties communes',
            'Dégradations de véhicules',
            'Cambriolages',
        ],
    };

    const categories = categoriesData[type] || ['Aucune catégorie disponible'];

    return (
        <View style={styles.container}>
            <View style={styles.topWave} />
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <IconFontAw5 name="chevron-left" size={24} color="#000" />
            </TouchableOpacity>
            <Text style={styles.title}>Catégories : <Text style={styles.titleCategory}>{type}</Text></Text>
            <FlatList
                data={categories}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.categoryItem}
                        onPress={() => navigation.navigate('FicheDetail', { title: item })}
                    >
                        <Text style={styles.categoryText}>{item}</Text>
                    </TouchableOpacity>
                )}
            />
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
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        fontFamily: 'Manrope',
    },
    categoryItem: {
        backgroundColor: '#6AB023',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
    },
    categoryText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Manrope',
    },

    backButton: {
        marginBottom: 30,
    },

    titleCategory: {
        fontWeight: 'normal'
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
});
