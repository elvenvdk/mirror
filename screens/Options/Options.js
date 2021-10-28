import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import OptionsRow from "../../common/OptionsRow";

import { signoutUser } from "../../api/auth";

const Options = () => {
  const navigation = useNavigation();
  return (
    <View style={optionsStyles.container}>
      <OptionsRow
        title="Update Email"
        iconLeft="at"
        iconRight="chevron-right"
        rowOnpress={() => {
          navigation.navigate("Update Email");
        }}
      />
      <OptionsRow
        title="Update Password"
        iconLeft="lock"
        iconRight="chevron-right"
        rowOnpress={() => {
          navigation.navigate("Update Password");
        }}
      />
      <OptionsRow
        title="Log Out"
        iconLeft="sign-out-alt"
        rowOnpress={async () => {
          await signoutUser();
          navigation.navigate("Home");
        }}
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
