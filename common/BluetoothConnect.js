import React, { useEffect, useState } from "react";
import { useGlobal } from "reactn";
import { Alert, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const BluetoothConnect = () => {
  const [bluetoothConnected, setBluetoothConnected] =
    useGlobal("bluetoothConnected");
  return (
    <TouchableOpacity
      style={container}
      onPress={() => {
        if (!bluetoothConnected) {
          Alert.alert("Bluetooth", "Connect to Mirror?", [
            {
              text: "Connect",
              onPress: () => {
                setBluetoothConnected(true);
              },
            },
            {
              text: "Cancel",
              onPress: () => {
                setBluetoothConnected(false);
                return;
              },
            },
          ]);
        } else {
          Alert.alert("Bluetooth", "Disconnect from Mirror?", [
            {
              text: "Disconnect",
              onPress: () => {
                setBluetoothConnected(false);
              },
            },
            {
              text: "Cancel",
              onPress: () => {
                return;
              },
            },
          ]);
        }
      }}
    >
      <Icon
        name="bluetooth"
        size={25}
        color={!bluetoothConnected ? "black" : "blue"}
      />
    </TouchableOpacity>
  );
};

const bluetoothConnectStyles = StyleSheet.create({
  container: {
    marginRight: 20,
  },
});

const { container } = bluetoothConnectStyles;

export default BluetoothConnect;
