import { useState, useEffect } from "react";
import ImageColors from "react-native-image-colors";

export const useGetDominantColors = (uri: string, album?: any) => {
  const [albumColor, setAlbumColor] = useState({
    colorOne: { value: "", name: "" },
    colorTwo: { value: "", name: "" },
    colorThree: { value: "", name: "" },
    colorFour: { value: "", name: "" },
    rawResult: "",
  });

  const [albumColorLoading, setAlbumColorLoading] = useState(false);

  const fetchColors = async () => {
    const result = await ImageColors.getColors(uri, {
      fallback: "#000000",
      quality: "low",
      pixelSpacing: 5,
      cache: true,
    });

    switch (result.platform) {
      case "android":
      case "web":
        setAlbumColor({
          colorOne: { value: result?.lightVibrant, name: "lightVibrant" },
          colorTwo: { value: result.dominant, name: "dominant" },
          colorThree: { value: result.vibrant, name: "vibrant" },
          colorFour: { value: result.darkVibrant, name: "darkVibrant" },
          rawResult: JSON.stringify(result),
        });
        break;
      case "ios":
        setAlbumColor({
          colorOne: { value: result.background, name: "background" },
          colorTwo: { value: result.detail, name: "detail" },
          colorThree: { value: result.primary, name: "primary" },
          colorFour: { value: result.secondary, name: "secondary" },
          rawResult: JSON.stringify(result),
        });
        break;
      default:
        throw new Error("Unexpected platform");
    }

    setAlbumColorLoading(false);
  };

  useEffect(() => {
    if (album != {}) {
      fetchColors();
    }
  }, [album]);

  return [albumColor, albumColorLoading];
};
