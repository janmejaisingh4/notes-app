// import { useColorScheme } from "react-native";
// import { darkColors, lightColors } from "../constants/color";

// export const useTheme = () => {
//   const scheme = useColorScheme();

//   const colors =
//     scheme === "dark" ? darkColors : lightColors;

//   return {
//     colors,
//     isDark: scheme === "dark",
//   };
// };

import { useColorScheme } from "react-native";

import {
  darkColors,
  lightColors,
} from "../constants/color";

export const useTheme = () => {
  const scheme = useColorScheme();

  const colors =
    scheme === "dark"
      ? darkColors
      : lightColors;

  return {
    colors,
    isDark: scheme === "dark",
  };
};