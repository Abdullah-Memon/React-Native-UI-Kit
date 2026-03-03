import { COLORS } from "@/contants/colors";
import { Platform, StyleSheet } from "react-native";

export const cardStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    overflow: "hidden",
    marginVertical: 8,
  },
  elevated: {
    ...Platform.select({
      ios: {
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  footer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  // Variant styles
  default: {
    backgroundColor: COLORS.card,
    borderWidth: 0,
  },
  outlined: {
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  filled: {
    backgroundColor: COLORS.background,
    borderWidth: 0,
  },
  // Utility method to get variant styles
  getVariantStyles: (variant) => {
    switch (variant) {
      case "outlined":
        return cardStyles.outlined;
      case "filled":
        return cardStyles.filled;
      default:
        return cardStyles.default;
    }
  },
});
