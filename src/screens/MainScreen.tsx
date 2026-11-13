import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SECTIONS } from '../data/sections';

export default function MainScreen({ navigation }: any) {
  const sortedSections = [...SECTIONS].sort((a, b) => a.distance - b.distance);
  return (
    <View style={styles.container}>
      <FlatList
        data={sortedSections}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('SectionDetail', { section: item })}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDistance}>{item.distance} км</Text>
            </View>
            <Text style={styles.cardInfo}>{item.sport} • {item.address}</Text>
            <View style={styles.cardFooter}>
              <Text style={styles.cardPrice}>{item.price} ₽</Text>
              <Ionicons name="chevron-forward" size={20} color="#999" />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  list: { padding: 15 },
  card: { backgroundColor: '#fff', padding: 15, borderRadius: 12, marginBottom: 12, elevation: 2 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', flex: 1 },
  cardDistance: { color: '#007AFF', fontWeight: 'bold' },
  cardInfo: { color: '#666', marginBottom: 10 },
  cardFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardPrice: { fontSize: 16, fontWeight: 'bold', color: '#2ecc71' },
});
