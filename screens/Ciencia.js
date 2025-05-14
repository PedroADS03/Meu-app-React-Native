import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function Ciencia() {
  const mostrarInfo = (titulo, descricao) => {
    Alert.alert(titulo, descricao);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ciência</Text>

      <TouchableOpacity style={styles.card} onPress={() => mostrarInfo('Único animal realmente carnívoro', 'As cobras são os únicos animais verdadeiramente carnívoros, elas só comem outros animais, nenhum tipo de planta ou vegetais.')}>
        <Text style={styles.cardTitle}>Cobras</Text>
        <Text style={styles.cardText}>Toque para saber mais.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => mostrarInfo('Isaac Newton', 'Físico que formulou as leis da gravidade e do movimento, considerado o pai da fisíca moderna e um dos seres humanos mais importantes que já existiram.')}>
        <Text style={styles.cardTitle}>Isaac Newton</Text>
        <Text style={styles.cardText}>Toque para saber mais.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => mostrarInfo('Células do corpo humano', 'Nosso corpo tem trilhões de células com funções incríveis e diferentes uma das outras, e com uma capacidade de regenaração e multiplicação que impressiona muito os cientistas.')}>
        <Text style={styles.cardTitle}>Células do corpo humano</Text>
        <Text style={styles.cardText}>Toque para saber mais.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => mostrarInfo('Você pesa bem menos na Lua', 'Graças à gravidade, que em nosso satélite natural é um sexto a da Terra, uma pessoa com 68 quilos pesaria míseros 11 quilos.')}>
        <Text style={styles.cardTitle}>Lua e gravidade</Text>
        <Text style={styles.cardText}>Toque para saber mais.</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  card: { backgroundColor: '#fff3cd', padding: 12, borderRadius: 8, marginBottom: 12 },
  cardTitle: { fontSize: 18, fontWeight: 'bold' },
  cardText: { fontSize: 14 },
});
