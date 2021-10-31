import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { useGlobal } from "reactn";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Gallery from "../screens/image/Gallery";
import ShutterButton from "../screens/image/ShutterButton";

const TabsRouter = ({ navigation }) => {
  const [currentRoute, setCurrentRoute] = useGlobal("currentRoute");
  const Tab = createBottomTabNavigator();
  const route = useRoute();

  useEffect(() => {
    setCurrentRoute(route.name);
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="Shutter Button"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Shutter Button"
        component={ShutterButton}
        options={{
          tabBarIcon: () => <Icon name="camera" size={30} />,
        }}
      />
      <Tab.Screen
        name="Image Gallery"
        component={Gallery}
        options={{ tabBarIcon: () => <Icon name="images" size={30} /> }}
      />
    </Tab.Navigator>
  );
};

const ImageRouterStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TabsRouter;
