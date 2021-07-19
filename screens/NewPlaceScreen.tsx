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
import ImagePickerComponent from "../components/ImageSelector";
import LocationPicker from "../components/LocationPicker";

const NewPlaceScreen = (props: any) => {
  const [title, setTitle] = useState("");
  const [imageTake, setImageTake] = useState("");
  const [pickAPlace, setAPlace] = useState<any>();
  const { navigation } = props;
  const dispatch = useDispatch();
  const savePlaceHandler = () => {
    console.log(pickAPlace);
    dispatch(placesAction.addPlace(title, imageTake, pickAPlace));
    navigation.goBack();
  };
  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}> Title</Text>
        <TextInput
          onChangeText={(text) => setTitle(text)}
          value={title}
          style={styles.textInput}
        />
        <ImagePickerComponent setImage={setImageTake} />
        <LocationPicker navigation={navigation} setAPlace={setAPlace} />
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
