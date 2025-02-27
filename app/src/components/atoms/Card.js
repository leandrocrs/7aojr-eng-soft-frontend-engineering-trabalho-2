import { View, Text, StyleSheet } from 'react-native';

const STATUS_COLORS = {
  success: '#CEEBB4', // Verde para sucesso
  error: '#EBB4B4', // Vermelho para erro
  default: '#EAEAEA', // Cor padrão
};

export const Card = ({ title, status }) => {
  const backgroundColor = STATUS_COLORS[status] || STATUS_COLORS.default;

  return (
    <View style={[styles.container, { backgroundColor }]}> 
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 20,
  },
  text: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});