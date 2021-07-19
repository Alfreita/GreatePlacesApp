import React, { useLayoutEffect, useEffect } from "react";
import { View, StyleSheet, Text, Platform, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderCustomButtom";
import { useDispatch, useSelector } from "react-redux";
import PlaceItem from "../components/PlaceItem";
import * as placesAction from "../store/actions/placesAction";
const PlacesListScreen = (props: any) => {
  const { navigation } = props;
  const placesList = useSelector((state: any) => state.places.places);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Add places"
            iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
            onPress={() => navigation.navigate({ name: "NewPlace" })}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);
  useEffect(() => {
    dispatch(placesAction.loadPlaces());
  }, [dispatch]);
  return (
    <FlatList
      data={placesList}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <PlaceItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          address={itemData.item.address}
          onSelect={() => {
            navigation.navigate({
              name: "PlaceDetail",
              params: {
                placeTitle: itemData.item.title,
                placeId: itemData.item.id,
              },
            });
          }}
        />
      )}
    />
  );
};
const styles = StyleSheet.create({});

export default PlacesListScreen;
