import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const BluetoothConnect = () => {
  const [connected, setConnected] = useState(false);
  return (
    <TouchableOpacity
      style={container}
      onPress={() => {
        if (!connected) {
          Alert.alert("Bluetooth", "Connect to Mirror?", [
            {
              text: "Connect",
              onPress: () => {
                setConnected(true);
              },
            },
            {
              text: "Cancel",
              onPress: () => {
                setConnected(false);
                return;
              },
            },
          ]);
        } else {
          Alert.alert("Bluetooth", "Disconnect from Mirror?", [
            {
              text: "Disconnect",
              onPress: () => {
                setConnected(false);
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
      <Icon name="bluetooth" size={25} color={!connected ? "black" : "blue"} />
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
