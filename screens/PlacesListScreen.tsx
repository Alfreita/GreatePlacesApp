import React, { useLayoutEffect } from "react";
import { View, StyleSheet, Text, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderCustomButtom";

const PlacesListScreen = (props: any) => {
  const { navigation } = props;
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
  return (
    <View>
      <Text> Places List</Text>
    </View>
  );
};
const styles = StyleSheet.create({});

export default PlacesListScreen;
