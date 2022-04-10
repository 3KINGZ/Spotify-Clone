import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { IMAGES } from "../assets/images";
import { colors } from "../themes/colors";
import { fonts } from "../themes/fonts";
import { wp, hp } from "../utils/scaler";
import { signIn } from "../store/slices/auth.slice";

export const AuthScreen = () => {
  const dispatch = useDispatch();

  const { loading } = useSelector(state => state.auth);

  console.log(loading);

  const login = () => {
    dispatch(signIn());
  };

  return (
    <>
      <StatusBar backgroundColor={colors.black_01} barStyle="light-content" />
      <View style={styles.container}>
        <View>
          <Image source={IMAGES.spotify_green} style={styles.logo} />
          <Text style={styles.headerText}>Millions of Songs.</Text>
          <Text style={styles.headerText}>Free on spotify.</Text>
        </View>

        <TouchableOpacity style={styles.buttonContainer} onPress={login}>
          {loading ? (
            <ActivityIndicator color={colors.black_02} size={wp(16)} />
          ) : (
            <Text style={styles.buttonText}>Login</Text>
          )}
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black_01,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  logo: {
    width: wp(53),
    height: hp(53),
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 10,
  },
  headerText: {
    fontSize: wp(28),
    textAlign: "center",
    fontFamily: fonts.bold,
    color: colors.white_01,
  },
  buttonContainer: {
    padding: 20,
    borderRadius: 45,
    backgroundColor: colors.green_01,
    width: "100%",
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: wp(16),
    color: colors.black_02,
    textAlign: "center",
    fontFamily: fonts.bold,
  },
});
