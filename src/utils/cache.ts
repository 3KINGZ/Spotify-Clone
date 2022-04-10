import RNSInfo from "react-native-sensitive-info";

export const getValue = async (key: string) => {
  return await RNSInfo.getItem(key, {});
};

export const storeValue = async (key: string, value: any) => {
  await RNSInfo.setItem(key, value, {});
};

export const deleteItem = async (key: string) => {
  await RNSInfo.deleteItem(key, {});
};
