import React from "react";
import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Ionicon from "react-native-vector-icons/Ionicons";

import { HorizontalList } from "components";
import { Album } from "components/Album";
import { fetchNewReleases } from "store/slices/content.slice";
import { wp } from "utils";
import { colors, fonts } from "themes";

export const HomeScreen = () => {
  const dispatch = useDispatch();

  const { newReleasesLoading, newReleases } = useSelector(
    state => state.content,
  );

  console.log("nwr", newReleases);

  const _fetchNewReleases = () => {
    dispatch(fetchNewReleases());
  };

  useEffect(() => {
    _fetchNewReleases();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>New releases</Text>

        <View style={styles.buttonsContainer}>
          <Ionicon
            name="notifications-outline"
            size={wp(20)}
            color={colors.white_01}
            style={styles.button}
          />
          <Ionicon
            name="timer-outline"
            size={wp(20)}
            color={colors.white_01}
            style={styles.button}
          />
          <Ionicon
            name="settings-outline"
            size={wp(20)}
            color={colors.white_01}
            style={styles.button}
          />
        </View>
      </View>

      <HorizontalList
        showTitle={false}
        title="New Releases"
        items={newReleases?.albums?.items}
        renderItem={({ item }: any) => <Album album={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black_01,
    flex: 1,
    padding: 15,
  },
  title: {
    color: colors.white_01,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: wp(19),
    marginBottom: 15,
    fontFamily: fonts.bold,
    color: colors.white_01,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    marginHorizontal: 5,
  },
});
