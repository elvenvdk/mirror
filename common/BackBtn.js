import React from "react";
import { useGlobal } from "reactn";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { useNavigation } from "@react-navigation/native";

const BackBtn = () => {
  const [currentRoute, setCurrentRoute] = useGlobal("currentRoute");
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Home");
        setCurrentRoute("Main");
      }}
    >
      <Icon name="chevron-left" size={30} />
    </TouchableOpacity>
  );
};

export default BackBtn;

const styles = StyleSheet.create({});
