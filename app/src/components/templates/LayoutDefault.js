import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, View } from 'react-native';
import { Logo } from "../atoms/Logo";

export function LayoutDefault({ children, LayoutLogo = Logo }) {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}
      >
        <View style={styles.content}>
          <LayoutLogo />
          {children}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 40,
    paddingTop: 0
  }
});
