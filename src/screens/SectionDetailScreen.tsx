import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SectionDetailScreen({ route }: any) {
  const { section } = route.params;
  const handleBooking = () => { Alert.alert('Успех!', 'Вы записаны на пробное занятие в "' + section.title + '"'); };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{section.title}</Text>
        <Text style={styles.sport}>{section.sport}</Text>
      </View>
      <View style={styles.infoBlock}>
        <View style={styles.infoRow}><Ionicons name="location" size={20} color="#007AFF" /><Text style={styles.infoText}>{section.address}</Text></View>
        <View style={styles.infoRow}><Ionicons name="cash" size={20} color="#2ecc71" /><Text style={styles.infoText}>{section.price} ₽ / занятие</Text></View>
        <View style={styles.infoRow}><Ionicons name="person" size={20} color="#f39c12" /><Text style={styles.infoText}>{section.trainer}</Text></View>
        <View style={styles.infoRow}><Ionicons name="calendar" size={20} color="#9b59b6" /><Text style={styles.infoText}>{section.schedule}</Text></View>
      </View>
      <View style={styles.descriptionBlock}>
        <Text style={styles.descriptionTitle}>Описание</Text>
        <Text style={styles.description}>{section.description}</Text>
      </View>
      <View style={styles.buttonContainer}><Button title="Записаться на пробное" onPress={handleBooking} color="#4CAF50" /></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { padding: 20, borderBottomWidth: 1, borderBottomColor: '#eee' },
  title: { fontSize: 24, fontWeight: 'bold' },
  sport: { fontSize: 16, color: '#666', marginTop: 5 },
  infoBlock: { padding: 20, gap: 15 },
  infoRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  infoText: { fontSize: 16, color: '#333', flex: 1 },
  descriptionBlock: { padding: 20, borderTopWidth: 1, borderTopColor: '#eee' },
  descriptionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  description: { fontSize: 14, color: '#666', lineHeight: 22 },
  buttonContainer: { padding: 20 },
});
