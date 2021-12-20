import { FlatList, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import tw from "twrnc";
const NavFavourities = () => {
  const data = [
    {
      id: "123",
      icon: "home",
      location: "Home",
      description: "Code Street, London, UK",
    },
    {
      id: "456",
      icon: "briefcase",
      location: "Work",
      description: "London Eye, London, UK",
    },
  ];
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, { height: 1 }]} />
      )}
      renderItem={({ item: { icon, description, location } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-2`}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            size={15}
            color="white"
            type="ionicon"
          />
          <View>
            <Text style={tw`text-lg font-semibold`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{description}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};
export default NavFavourities;
