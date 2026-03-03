import { COLORS } from "@/contants/colors";
import { StyleSheet } from "react-native";

const SIZE_TOKENS = {
  xl: { height: 56, paddingHorizontal: 24, fontSize: 18, borderRadius: 14 },
  lg: { height: 50, paddingHorizontal: 22, fontSize: 16, borderRadius: 12 },
  md: { height: 44, paddingHorizontal: 18, fontSize: 15, borderRadius: 10 },
  sm: { height: 38, paddingHorizontal: 14, fontSize: 14, borderRadius: 8 },
  xs: { height: 32, paddingHorizontal: 12, fontSize: 12, borderRadius: 8 },
};

export function getSizeTokens(size) {
  return SIZE_TOKENS[size] || SIZE_TOKENS.md;
}

export function getButtonTokens({
  variant = "primary",
  type = "contained",
  color,
  disabled = false,
}) {
  const isPrimary = variant !== "secondary";
  const baseColor = color || (isPrimary ? COLORS.primary : COLORS.text);

  if (disabled) {
    return {
      backgroundColor: COLORS.border,
      borderColor: COLORS.border,
      textColor: COLORS.textLight,
    };
  }

  if (type === "outlined") {
    return {
      backgroundColor: "transparent",
      borderColor: baseColor,
      textColor: baseColor,
    };
  }

  return {
    backgroundColor: isPrimary ? baseColor : color || COLORS.border,
    borderColor: isPrimary ? baseColor : color || COLORS.border,
    textColor: isPrimary ? COLORS.white : COLORS.text,
  };
}

export const buttonStyles = StyleSheet.create({
  base: {
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  contentWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconOnlyWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontWeight: "600",
  },
  startIcon: {
    marginRight: 8,
  },
  endIcon: {
    marginLeft: 8,
  },
  iconText: {
    fontWeight: "600",
    lineHeight: 20,
  },
});
