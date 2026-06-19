import { useState } from 'react';
import { Button, Text, View } from 'react-native';
import Routes from '../../routes/index';
export default function HomeScreen() {
  const [count, setCount] = useState(0);

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center', backgroundColor: 'white' }}>
      <Text>Salut, c'est la page d'accueil !</Text>
      <Text>Compteur : {count}</Text>
      <Routes />
      <Button title="Clique-moi " onPress={() => setCount(count + 1)} />
    </View>
  );
}
