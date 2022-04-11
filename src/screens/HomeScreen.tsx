import React from "react";
import { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";
import { batch, useDispatch, useSelector } from "react-redux";
import Ionicon from "react-native-vector-icons/Ionicons";

import {
  Category,
  HorizontalList,
  Recommended,
  Spacer,
  TopListen,
  Album,
  PlayerScreenHOC,
  Loading,
} from "components";
import {
  fetchCategories,
  fetchNewReleases,
  fetchRecommended,
  fetchTopListen,
} from "store/slices/content.slice";
import { wp } from "utils";
import { colors, fonts } from "themes";
import { generateGreeting } from "helpers";

export const HomeScreen = () => {
  const dispatch = useDispatch();

  const {
    newReleasesLoading,
    newReleases,
    categories,
    categoriesLoading,
    recommended,
    recommendedLoading,
    topListen,
    topListenLoading,
  } = useSelector(state => state.content);

  const _fetchNewReleases = () => {
    batch(() => {
      dispatch(fetchNewReleases());
      dispatch(fetchCategories());
      dispatch(fetchRecommended());
      dispatch(fetchTopListen());
    });
  };

  useEffect(() => {
    _fetchNewReleases();
  }, []);

  return (
    <PlayerScreenHOC>
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={
              newReleasesLoading ||
              categoriesLoading ||
              recommendedLoading ||
              topListenLoading
            }
            onRefresh={
              (!newReleasesLoading ||
                !categoriesLoading ||
                !recommendedLoading ||
                !topListenLoading) &&
              _fetchNewReleases
            }
          />
        }>
        {newReleasesLoading ||
        categoriesLoading ||
        recommendedLoading ||
        topListenLoading ? (
          <Loading />
        ) : (
          <>
            <View style={styles.headerContainer}>
              <Text style={styles.headerTitle}>{generateGreeting()}</Text>

              <View style={styles.buttonsContainer}>
                <TouchableOpacity>
                  <Ionicon
                    name="notifications-outline"
                    size={wp(20)}
                    color={colors.white_01}
                    style={styles.button}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicon
                    name="timer-outline"
                    size={wp(20)}
                    color={colors.white_01}
                    style={styles.button}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicon
                    name="settings-outline"
                    size={wp(20)}
                    color={colors.white_01}
                    style={styles.button}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <HorizontalList
              title="New Releases"
              items={newReleases?.albums?.items}
              renderItem={({ item }: any) => <Album album={item} />}
            />
            <Spacer vertical space={15} />
            <HorizontalList
              title="Recommended"
              items={recommended?.tracks}
              renderItem={({ item }: any) => <Recommended recommended={item} />}
            />
            <Spacer vertical space={15} />
            <HorizontalList
              title="Top Listen"
              items={topListen?.playlists?.items}
              renderItem={({ item }: any) => <TopListen track={item} />}
            />
            <Spacer vertical space={15} />
            <HorizontalList
              title="Categories"
              items={categories?.categories?.items}
              renderItem={({ item }: any) => <Category category={item} />}
            />
            <Spacer vertical space={15} />
          </>
        )}
      </ScrollView>
    </PlayerScreenHOC>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black_02,
    flex: 1,
    padding: 15,
    paddingTop: 30,
  },
  title: {
    color: colors.white_01,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: wp(19),
    marginBottom: 15,
    fontFamily: fonts.bold,
    color: colors.white_01,
    textAlignVertical: "bottom",
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
