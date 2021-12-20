import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlive";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import NavFavourities from "./NavFavourities";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>NavigateCard</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            styles={{ container: { flex: 0 }, textInput: { fontSize: 18 } }}
            placeholder="Where Form?"
            styles={toInputBoxStyle}
            fetchDetails={false}
            returnKeyType={"search"}
            minLength={2}
            enablePoweredByContainer={false}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            query={{ key: GOOGLE_MAPS_APIKEY, language: "en" }}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptionsCar");
            }}
          />
        </View>
        <NavFavourities />
        <View style={tw`justify-evenly flex flex-row bg-white py-2 mt-auto border-t border-gray-100`}>
          <TouchableOpacity
            onPress={() => navigation.navigate("RideOptionsCar")}
            style={tw`flex flex-row bg-black w-24 px-4 py-3 rounded-full justify-between`}
          >
            {/* <Text style={tw`mt-2 text-lg font-semibold`}>Click</Text> */}
            <Icon name="car" type="font-awesome" size={16} color="white" />
            <Text style={tw`text-white text-center`}>Rides</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("RideOptionsCar")}
            style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full bg-gray-200`}
          >
            <Icon
              name="fast-food-outline"
              type="ionicon"
              size={16}
              color="black"
            />
            <Text style={tw`text-black text-center`}>Eats</Text>
          </TouchableOpacity>
        </View>
        {/* <View>
          <TouchableOpacity style={tw`absolute top-3 left-5 p-3 rounded-full`}>
            <Icon name="chevron-left" type="fontawesome" />
          </TouchableOpacity>
        </View> */}
      </View>
    </SafeAreaView>
  );
};
export default NavigateCard;

const toInputBoxStyle = StyleSheet.create({
  container: { backgroundColor: "white", paddingTop: 20, flex: 0 },
  textInput: { backgroundColor: "#dddddf", borderRadius: 0, fontSize: 18 },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
