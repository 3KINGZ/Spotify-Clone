import React from "react";
import AIcon from "react-native-vector-icons/AntDesign";
import FIcon from "react-native-vector-icons/Foundation";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";

import { colors } from "../themes/colors";
import { wp } from "../utils/scaler";

interface ITabIcon {
  iconName: string;
  active: boolean;
}

export const TabIcon = ({ iconName, active }: ITabIcon) => {
  return (
    <>
      {iconName === "home" ? (
        <FIcon
          name={iconName}
          color={active ? colors.white_01 : colors.white_03}
          size={wp(22)}
        />
      ) : iconName === "search1" ? (
        <AIcon
          name={iconName}
          color={active ? colors.white_01 : colors.white_03}
          size={wp(22)}
        />
      ) : (
        <MCIcon
          name={iconName}
          color={active ? colors.white_01 : colors.white_03}
          size={wp(22)}
        />
      )}
    </>
  );
};
