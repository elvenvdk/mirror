import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const OptionsRow = ({ title, rowOnpress, iconLeft, iconRight }) => {
  return (
    <TouchableOpacity style={button} onPress={rowOnpress}>
      <Icon style={leftIcon} name={iconLeft} size={20} />
      <Text style={buttonText}>{title}</Text>
      <Icon style={rightIcon} name={iconRight} size={20} />
    </TouchableOpacity>
  );
};

const optionsRowStyles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 50,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderBottomColor: "#000000",
    borderTopColor: "#000000",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "600",
  },
  leftIcon: {
    marginRight: "auto",
    marginLeft: 5,
  },
  rightIcon: {
    marginLeft: "auto",
    marginRight: 5,
  },
});

const { button, buttonText, leftIcon, rightIcon } = optionsRowStyles;

export default OptionsRow;
