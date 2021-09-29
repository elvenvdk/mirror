import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

const AppRouter = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>Testing mirror scaffolding...</Text>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppRouter;
