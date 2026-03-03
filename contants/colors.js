export const STATIC_COLORS = {
  white: "#FFFFFF",
  black: "#000000",
  error: "#E74C3C",
  success: "#2ECC71",
  warning: "#F39C12",
  info: "#3498DB",
  sidebarBackground: "#fff8f3",
};

const coffeeTheme = {
  ...STATIC_COLORS,
  primary: "#8B593E",
  background: "#FFF8F3",
  text: "#4A3428",
  border: "#E5D3B7",
  textLight: "#9A8478",
  card: "#FFFFFF",
  shadow: "#000000",
};

const forestTheme = {
  ...STATIC_COLORS,
  primary: "#2E7D32",
  background: "#E8F5E9",
  text: "#1B5E20",
  border: "#C8E6C9",
  textLight: "#66BB6A",
  card: "#FFFFFF",
  shadow: "#000000",
};

const purpleTheme = {
  ...STATIC_COLORS,
  primary: "#6A1B9A",
  background: "#F3E5F5",
  text: "#4A148C",
  border: "#D1C4E9",
  textLight: "#BA68C8",
  card: "#FFFFFF",
  shadow: "#000000",
};

const oceanTheme = {
  ...STATIC_COLORS,
  primary: "#0277BD",
  background: "#E1F5FE",
  text: "#01579B",
  border: "#B3E5FC",
  textLight: "#4FC3F7",
  card: "#FFFFFF",
  shadow: "#000000",
};

export const THEMES = {
  coffee: coffeeTheme,
  forest: forestTheme,
  purple: purpleTheme,
  ocean: oceanTheme,
};

// 👇 change this to switch theme
export const COLORS = THEMES.ocean;
