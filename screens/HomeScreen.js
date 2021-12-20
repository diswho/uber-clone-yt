import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import tw from "twrnc";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlive";
import NavFavourities from "../components/NavFavourities";

const HomeScreen = () => {
  // console.log(GOOGLE_MAPS_APIKEY)
  // console.log("HomeScreen");
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={{ uri: "https://links.papareact.com/gzs" }}
        />
        <GooglePlacesAutocomplete
          styles={{ container: { flex: 0 }, textInput: { fontSize: 18 } }}
          placeholder="Where Form"
          nearbyPlacesAPI="GooglePlacesSearch"
          enablePoweredByContainer={false}
          fetchDetails={true}
          returnKeyType={"search"}
          minLength={2}
          onPress={(data, details = null) => {
            // console.log(data, details);
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
        />
        <NavOptions />
        <NavFavourities />
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({ text: { color: "blue" } });
