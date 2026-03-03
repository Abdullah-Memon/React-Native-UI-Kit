import { COLORS } from "@/contants/colors";
import { StyleSheet } from "react-native";

const TYPOGRAPHY_TOKENS = {
  h1: {
    fontSize: 32,
    fontWeight: "700",
    lineHeight: 40,
    letterSpacing: -0.5,
  },
  h2: {
    fontSize: 28,
    fontWeight: "700",
    lineHeight: 36,
    letterSpacing: -0.3,
  },
  h3: {
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 32,
  },
  h4: {
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 28,
  },
  h5: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
  },
  p: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 22,
  },
  span: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 18,
  },
};

export function getTypographyTokens(variant = "p") {
  return TYPOGRAPHY_TOKENS[variant] || TYPOGRAPHY_TOKENS.p;
}

export const typographyStyles = StyleSheet.create({
  base: {
    color: COLORS.text,
  },
  h1: {
    fontSize: 32,
    fontWeight: "700",
    lineHeight: 40,
    letterSpacing: -0.5,
    color: COLORS.text,
  },
  h2: {
    fontSize: 28,
    fontWeight: "700",
    lineHeight: 36,
    letterSpacing: -0.3,
    color: COLORS.text,
  },
  h3: {
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 32,
    color: COLORS.text,
  },
  h4: {
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 28,
    color: COLORS.text,
  },
  h5: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
    color: COLORS.text,
  },
  p: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 22,
    color: COLORS.text,
  },
  span: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 18,
    color: COLORS.text,
  },
});
