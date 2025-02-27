import { TouchableOpacity, Text, StyleSheet } from 'react-native';

/**
 * @param {{ 
 *    title: string;
 *    style?: import('react-native').StyleProp<import('react-native').ViewStyle>;
 *    textStyle?: import('react-native').StyleProp<import('react-native').TextStyle>;
 *    onPress?: () => void;
 * }} props
 */
export const Button = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#C07272',
    padding: 22,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  text: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});