import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const DetalhesTinto5 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.opacityBackground} />
      <Image source={require('../../assets/5_tinto.png')} style={styles.wineImage} />
      <Text style={styles.wineText}>4 The Stress</Text>
      <Text style={styles.wineText}>R$ 110,00</Text>
      <TouchableOpacity onPress={() => navigation.navigate('PedidoVT2')}>
        <View style={styles.wineButton}>
          <View style={styles.opacityBackground} />
          <Image source={require('../../assets/carrinho_icon.png')} style={styles.cartIcon} />
          <Text style={styles.wineText}>Fazer Pedido</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  opacityBackground: {
    backgroundColor: 'rgba(240, 240, 240, 0.5)', // Adiciona 50% de opacidade
    borderRadius: 10,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  wineImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
  wineText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartIcon: {
    width: 65,
    height: 65,
    marginBottom: 10,
    borderRadius: 10,
  },
});

export default DetalhesTinto5;