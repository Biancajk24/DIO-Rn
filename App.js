import * as React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
  Linking,
} from 'react-native';

const colorDarkFontGithub = '#4F565E';
const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const imageProfileGithub =
  'https://avatars.githubusercontent.com/u/104093116?v=4';
const urlToMyGithub = 'https://github.com/Biancajk24';

const App = () => {

  const handlePressGoToGithub = async ()=> {
    console.log('Verificando link:');
    const res = await Linking.openURL(urlToMyGithub);
    if(res){
      console.log('Link Aprovado');
      console.log('Abrindo Link...');
      await Linking.openURL(urlToMyGithub)
    }
  };
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content"/>
      <View style={style.content}>
        <Image
          accessibilityLabel="Bianca no ano novo"
          style={style.avatar}
          source={{ uri: imageProfileGithub }}
        />
        <Text
          accessibilityLabel="Nome: bianca souza"
          style={[style.defaultText, style.name]}>
          Bianca Souza
        </Text>
        <Text
          accessibilityLabel="Nickname: bianca souza"
          style={[style.defaultText, style.nickname]}>
          Biancajk24
        </Text>
        <Text
          accessibilityLabel="Description: 20 anos | HTML | CSS | Javascript | UNICID 📚"
          style={[style.defaultText, style.description]}>
          20 anos | HTML | CSS | Javascript | UNICID 📚
        </Text>
        <Pressable onPress= {handlePressGoToGithub}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>
              Open in Github
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    // Column
    backgroundColor: colorGithub,
    flex: 1, // Expandir a imagem para a tela inteira
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },

  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGithub,
  },
  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 24,
  },
  nickname: {
    fontSize: 18,
    color: colorDarkFontGithub,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  button: {
    marginTop: 20,
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
