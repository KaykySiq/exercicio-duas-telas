import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function ExploreScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.backButton}>
        <Button title="Voltar" onPress={() => router.push('/(tabs)')} />
      </View>

      <Image
        source={require('@/assets/images/forca-jovem-vascao.jpg')} // troque por imagem desejada
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.text}>Você é Vascaíno!!!!</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  image: {
    width: 700,
    height: 400,
    marginBottom: 30,
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111',
    textAlign: 'center',
  },
});
