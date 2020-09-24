import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function TouchButton({ children, onPress, disabled }) {
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity
        style={styles.button}
        disabled={disabled}
        onPress={onPress}
      >
        <Text>{children}</Text>
      </TouchableOpacity>
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
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "black",
    color: "black",
    marginBottom: 60,
  },
});

