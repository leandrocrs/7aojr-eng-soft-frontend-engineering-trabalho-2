import { Image, StyleSheet } from 'react-native';

export function Logo() {
  return <Image style={styles.logo} source={require('../../assets/logo.png')} />
}

const styles = StyleSheet.create({
  logo: {
    height: 66,
    width: 103,
    marginVertical: 20,
  }
});