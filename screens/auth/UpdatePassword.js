import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TextInput, Alert } from "react-native";
import ThemeButton from "../../common/ThemeButton";

import { updateUserPassword } from "../../api/auth";
import { checkEmail } from "../../helpers";

const UpdatePassword = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [matchedPassword, setMatchedPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const changeTextHandler = (txt) => {
    setPassword(txt);
  };

  const submitHandler = async () => {
    try {
      setLoading(true);
      if (password.length) {
        const res = await updateUserPassword(password);
        Alert.alert("Success", res.msg);
        setLoading(false);
        if (!loading) navigation.goBack();
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      Alert.alert("Error", "There was an error updating your password");
    }
  };

  return (
    <View style={updatePassword.container}>
      <TextInput
        placeholder="Enter password"
        autoCapitalize="none"
        textContentType="password"
        secureTextEntry={true}
        onChangeText={(txt) => {
          changeTextHandler(txt);
        }}
        style={updatePassword.input}
      />
      <TextInput
        placeholder="Enter password again"
        autoCapitalize="none"
        textContentType="password"
        onChangeText={(txt) => {
          changeTextHandler(txt);
        }}
        style={updatePassword.input}
      />
      <ThemeButton
        title="Update"
        btnOnPress={() => {
          submitHandler();
        }}
      />
    </View>
  );
};

const updatePassword = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    fontSize: 18,
    height: "100%",
  },
  input: {
    width: "95%",
    height: 50,
    textAlign: "center",
    marginTop: 20,
    fontSize: 18,
    backgroundColor: "#dbdbdb",
  },
});

export default UpdatePassword;
