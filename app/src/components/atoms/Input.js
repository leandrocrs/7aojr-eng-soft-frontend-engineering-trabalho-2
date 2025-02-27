import { TextInput, StyleSheet } from 'react-native';

/**
 * @param {import('react-native').TextInputProps} param0 
 */
export const Input = ({ style, ...rest }) => {
  return <TextInput
    autoCorrect={false}
    autoComplete="off"
    autoCapitalize="none"
    spellCheck={false}
    style={[styles.input, style]}
    {...rest}
  />;
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 16,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#fff',
    width: '100%',
    marginBottom: 20,
  },
});