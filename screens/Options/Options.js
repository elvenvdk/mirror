import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import OptionsRow from "../../common/OptionsRow";

const Options = ({ navigation }) => {
  return (
    <View style={optionsStyles.container}>
      <OptionsRow
        title="Update Email"
        iconLeft="at"
        iconRight="chevron-right"
      />
      <OptionsRow
        title="Update Password"
        iconLeft="lock"
        iconRight="chevron-right"
      />
      <OptionsRow
        title="Log Out"
        iconLeft="sign-out-alt"
        iconRight="chevron-right"
      />
    </View>
  );
};

const optionsStyles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 5,
  },
  optionsRows: {
    borderTopWidth: 0,
    borderTopColor: "transparent",
  },
});

export default Options;
