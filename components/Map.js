import React, { useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";
import { selectOrigin, selectDestination, setTravelTimeInformation } from "../slices/navSlive";
import { GOOGLE_MAPS_APIKEY } from "@env";
import tw from "twrnc";
import MapViewDirections from "react-native-maps-directions";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!origin || !destination) return;
    mapRef.current.fitToSuppliedMarker(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origin, destination]);

  useEffect(() => {
    if (!origin || !destination) return;

    const getTravelTime = async () => {
      fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperail&destinations=${destination.description}&origins=${origin.description}&key=${GOOGLE_MAPS_APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          dispatch(setTravelTimeInformation(data.rows[0].elements[0]))
        });
    };
    getTravelTime();
  }, [origin, destination, GOOGLE_MAPS_APIKEY]);
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
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="red"
        />
      )}
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
      {/* {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
        />
      )} */}
      {/* 17.964932328717936, 102.67671269198968 */}
      <Marker
        coordinate={{
          latitude: 17.964932328717936,
          longitude: 102.67671269198968,
        }}
        title="Destination"
        description="Your end point"
        identifier="destination"
      />
    </MapView>
  );
};
export default Map;
