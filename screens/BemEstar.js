import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function BemEstar() {
  const mostrarInfo = (titulo, descricao) => {
    Alert.alert(titulo, descricao);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Dicas de Bem-Estar</Text>

      <TouchableOpacity style={styles.card} onPress={() => mostrarInfo('Respiração consciente', 'Pratique respiração profunda para reduzir o estresse. Puxe e solte o ar devagar em uma sequência de até 8 vezes para diminuir a ansiedade e o estresse emocional.')}>
        <Text style={styles.cardTitle}>Respiração consciente</Text>
        <Text style={styles.cardText}>Toque para saber mais.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => mostrarInfo('Exercício diário', 'Caminhar 30 minutos por dia melhora a saúde física e mental, aumenta a expectativa de vida e diminui a gordura corporal.')}>
        <Text style={styles.cardTitle}>Exercício diário</Text>
        <Text style={styles.cardText}>Toque para saber mais.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => mostrarInfo('Sono de qualidade', 'Durma 7–9 horas por noite e evite telas antes de dormir, isso irá fazer com que você acorde sempre mais disposto e descansado, além de atrasar o envelhecimento.')}>
        <Text style={styles.cardTitle}>Sono de qualidade</Text>
        <Text style={styles.cardText}>Toque para saber mais.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => mostrarInfo('Beba mais água', 'Consumir uma quantidade de água ideal para seu peso ajuda você a emagrecer mais fácil, a prevenir doenças renais, melhorar a saúde da pele, e a ter uma vida muito mais saudável.')}>
        <Text style={styles.cardTitle}>Beber água</Text>
        <Text style={styles.cardText}>Toque para saber mais.</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  card: { backgroundColor: '#d9fcd9', padding: 12, borderRadius: 8, marginBottom: 12 },
  cardTitle: { fontSize: 18, fontWeight: 'bold' },
  cardText: { fontSize: 14 },
});
