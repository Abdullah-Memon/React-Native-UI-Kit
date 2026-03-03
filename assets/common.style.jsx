import { COLORS } from "@/contants/colors";
import { StyleSheet } from "react-native";

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  section: {
    marginTop: 8,
    marginBottom: 12,
    color: COLORS.primary,
  },
});

export default commonStyles;
