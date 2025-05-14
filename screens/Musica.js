import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function Musica() {
  const mostrarInfo = (titulo, descricao) => {
    Alert.alert(titulo, descricao);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cantores Favoritos</Text>

      <TouchableOpacity style={styles.card} onPress={() => mostrarInfo('Eminem', 'Considerado um dos maiores rappers de todos os tempos, revolucionou o hip hop com sua explosão nos anos 2000, até hoje é o rapper mais vendido da história, foi o homem que popularizou a "diss track" no mundo da música, possui hits atemporais como Lose Yourself, Till I Colapse, The Real Slim Shady entre outros.')}>
        <Text style={styles.cardTitle}>Eminem</Text>
        <Text style={styles.cardText}>Toque para saber mais.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => mostrarInfo('Michael Jackson', 'O maior nome da história da música pop, um dos maiores artistas e celebridades que a humanidade já teve, compositor de músicas lendárias e que jamais serão esquecidas, Michael é um fenômeno desde criança, lançou músicas como Billie Jean, Thriller, Beat it, Smooth Criminal e etc.')}>
        <Text style={styles.cardTitle}>Michael Jackson</Text>
        <Text style={styles.cardText}>Toque para saber mais.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => mostrarInfo('Drake', 'Da sua geração no hip hop, sem dúvidas é o mais famoso, com maior engajamento e popularidade, emergiu em 2011 e é um líder em vendas, views, repercussão, prêmios e polêmicas. Também é dono de hits como Hotline Bling, Gods Plan, One Dance e muitos outros.')}>
        <Text style={styles.cardTitle}>Drake</Text>
        <Text style={styles.cardText}>Toque para saber mais.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => mostrarInfo('Racionais', 'Pioneiros na cultura do hip hop brasileiro, os maiores que o Brasil já viu, revolucionários com suas letras poéticas sobre a trajetória de vida que muitos brasileiros se identificam, Mano Brown, Ice Blue, KL Jay e Edi Rock são patrimônios culturais do rap de nosso país.')}>
        <Text style={styles.cardTitle}>Racionais</Text>
        <Text style={styles.cardText}>Toque para saber mais.</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  card: { backgroundColor: '#ffe0f0', padding: 12, borderRadius: 8, marginBottom: 12 },
  cardTitle: { fontSize: 18, fontWeight: 'bold' },
  cardText: { fontSize: 14 },
});
