import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import { wp } from "utils";
import { fonts, colors } from "themes";

interface IHorizontalList {
  title: string;
  items: any[];
  renderItem: () => any;
  showTitle?: boolean;
}

export const HorizontalList = ({
  title,
  items,
  renderItem,
  showTitle = true,
}: IHorizontalList) => {
  console.log("itemsss", items);
  return (
    <View>
      {showTitle ? <Text style={styles.title}>{title}</Text> : null}
      <FlatList
        horizontal
        data={items}
        keyExtractor={data => data?.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: wp(19),
    marginBottom: 15,
    fontFamily: fonts.bold,
    color: colors.white_01,
  },
});
