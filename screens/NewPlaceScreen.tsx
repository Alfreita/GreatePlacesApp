import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  TextInput,
  Text,
  ScrollView,
} from "react-native";
import Color from "../constants/Color";
import { useDispatch } from "react-redux";
import * as placesAction from "../store/actions/placesAction";

const NewPlaceScreen = (props: any) => {
  const [title, setTitle] = useState("");
  const { navigation } = props;
  const dispatch = useDispatch();
  const savePlaceHandler = () => {
    dispatch(placesAction.addPlace(title));
    navigation.goBack();
  };
  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}> New Place</Text>
        <TextInput
          onChangeText={(text) => setTitle(text)}
          value={title}
          style={styles.textInput}
        />
        <Button
          title="Save Place"
          color={Color.primary}
          onPress={() => savePlaceHandler()}
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  form: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  textInput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
});

export default NewPlaceScreen;
