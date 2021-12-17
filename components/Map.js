import React from "react";
import { Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import tw from "twrnc";
import { selectOrigin } from "../slices/navSlive";

const Map = () => {
  const origin = useSelector(selectOrigin);
  return (
    <MapView
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: 17.96909812949608,
        longitude: 102.61344674762296,
        // latitude: origin.location.lat,
        // longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {/* {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
        />
      )} */}
      <Marker
        coordinate={{
          latitude: 17.96909812949608,
          longitude: 102.61344674762296,
        }}
        title="Origin"
        description="Your start point"
        identifier="origin"
      />
    </MapView>
  );
};
export default Map;
