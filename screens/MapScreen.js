import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import tw from "twrnc";
import Map from "../components/Map";
import MapView from "react-native-maps";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCar from "../components/RideOptionsCar";
const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    
    <View>
      <Text></Text>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RideOptionsCar"
            component={RideOptionsCar}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
