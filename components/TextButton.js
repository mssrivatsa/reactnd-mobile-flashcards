import React from "react";
import { Text, View, TouchableWithoutFeedback, StyleSheet } from "react-native";

export default function TextButton({ children, onPress, disabled }) {
  return (
    <View style={styles.btnContainer}>
      <TouchableWithoutFeedback
        style={styles.button}
        disabled={disabled}
        onPress={onPress}
      >
        <Text>{children}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 50,
    minWidth: 150,
    color: "black",
    marginBottom: 60,
  },
});