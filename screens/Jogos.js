import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function Jogos() {
  const mostrarInfo = (titulo, descricao) => {
    Alert.alert(titulo, descricao);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Jogos Favoritos</Text>

      <TouchableOpacity style={styles.card} onPress={() => mostrarInfo(
        'Red Dead Redemption 2',
        'O jogo se passa em um ambiente de mundo aberto com uma versão fictícia dos Estados Unidos em 1899. Considerado por muitos um dos melhores jogos de todos os tempos.'
      )}>
        <Text style={styles.cardTitle}>Red Dead Redemption 2</Text>
        <Text style={styles.cardText}>Toque para saber mais.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => mostrarInfo(
        'The Last of Us 2',
        'Cinco anos depois de uma jornada perigosa pelos Estados Unidos num cenário pós-pandêmico, Ellie e Joel foram morar em Jackson, Wyoming. É o segundo jogo mais premiado da história.'
      )}>
        <Text style={styles.cardTitle}>The Last of Us 2</Text>
        <Text style={styles.cardText}>Toque para saber mais.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => mostrarInfo(
        'God of War',
        'Com a vingança contra os deuses do Olimpo em um passado distante, Kratos agora vive como um mortal no reino dos deuses e monstros nórdicos. A saga de Kratos é a mais famosa já criada pela Playstation'
      )}>
        <Text style={styles.cardTitle}>God of War</Text>
        <Text style={styles.cardText}>Toque para saber mais.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => mostrarInfo(
        'Uncharted 4',
        'Depois de se aposentar como caçador de tesouros, Drake se vê obrigado a voltar ao mundo dos ladrões, a procura de um famoso tesouro pirata. Uncharted é uma prova de como é possivel criar um jogo com gráficos, história e jogabilidade em alto nível.'
      )}>
        <Text style={styles.cardTitle}>Uncharted 4</Text>
        <Text style={styles.cardText}>Toque para saber mais.</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  card: {
    backgroundColor: '#bfcff7',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  cardTitle: { fontSize: 18, fontWeight: 'bold' },
  cardText: { fontSize: 14 },
});
