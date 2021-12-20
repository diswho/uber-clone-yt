import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import tw from "twrnc";
const RideOptionsCar = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const data = [
    {
      id: "Uber-X-123",
      title: "UberX",
      multiplier: 1,
      image: "https://links.papareact.com/3pn",
    },
    {
      id: "Uber-XL-456",
      title: "UberXL",
      multiplier: 1.2,
      image: "https://links.papareact.com/5w8",
    },
    {
      id: "Uber-LUX-789",
      title: "Uber LUX",
      multiplier: 1.75,
      image: "https://links.papareact.com/7pf",
    },
  ];
  return (
    <SafeAreaView style={tw`flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-3 text-xl`}>Select a Rider!</Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item: { id, title, multiplier, image }, item }) => (
            <TouchableOpacity
              style={tw`flex-row items-center justify-between px-6 ${
                id === selected?.id && "bg-gray-200"
              }`}
              onPress={() => {
                // console.log(item);
                return setSelected(item);
              }}
            >
              <Image
                style={{ width: 80, height: 80, resizeMode: "contain" }}
                source={{ uri: image }}
              />
              <View style={tw`-ml-6`}>
                <Text style={tw`text-xl font-semibold`}>{title}</Text>
                <Text>Travel time...</Text>
              </View>
              <Text style={tw`text-xl`}>$99</Text>
            </TouchableOpacity>
          )}
        />
        <View>
          <TouchableOpacity
            style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}
            disabled={!selected}
          >
            <Text style={tw`text-center text-white text-xl`}>
              Choose {selected?.title}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default RideOptionsCar;
