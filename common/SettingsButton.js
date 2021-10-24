import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import Icon from "react-native-vector-icons/FontAwesome5";

const Settings = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={settingsStyle.container}
      onPress={() => {
        navigation.navigate("OptionsRoutes");
      }}
    >
      <Icon name="user-cog" size={25} />
    </TouchableOpacity>
  );
};

const settingsStyle = StyleSheet.create({
  container: {
    marginLeft: 20,
  },
});

export default Settings;
