import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ThemeButton = ({ title, btnOnPress, ...btnStyle }) => {
  return (
    <TouchableOpacity
      onPress={btnOnPress}
      style={(btnStyle, themeButtonStyles.button)}
    >
      <Text style={themeButtonStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const themeButtonStyles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
    height: 50,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: "#000000",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "600",
  },
});

export default ThemeButton;
