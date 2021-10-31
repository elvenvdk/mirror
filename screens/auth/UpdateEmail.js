import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TextInput, Alert } from "react-native";
import ThemeButton from "../../common/ThemeButton";

import { updateUserEmail } from "../../api/auth";
import { checkEmail } from "../../helpers";

const UpdateEmail = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const changeTextHandler = (txt) => {
    setEmail(txt);
  };

  const submitHandler = async () => {
    try {
      setLoading(true);
      if (email.length && checkEmail(email)) {
        await updateUserEmail(email);
        Alert.alert("Success", "Your email was successfully updated");
        setLoading(false);
        if (!loading) navigation.goBack();
      }
      if (!checkEmail(email)) {
        Alert.alert("Error", "Must be a valid email");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      Alert.alert("Error", "There was an error updating your email");
    }
  };

  return (
    <View style={updateEmail.container}>
      <TextInput
        placeholder="Enter email"
        autoCapitalize="none"
        textContentType="emailAddress"
        onChangeText={(txt) => {
          changeTextHandler(txt);
        }}
        style={updateEmail.input}
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

const updateEmail = StyleSheet.create({
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

export default UpdateEmail;
