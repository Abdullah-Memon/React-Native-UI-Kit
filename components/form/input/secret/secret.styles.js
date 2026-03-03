import { COLORS } from "@/contants/colors";
import { StyleSheet } from "react-native";

export const secretInputStyles = StyleSheet.create({
  wrapper: {
    width: "100%",
    marginBottom: 16,
  },
  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  label: {
    color: COLORS.text,
  },
  requiredAsterisk: {
    marginLeft: 4,
    color: COLORS.error,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    minHeight: 48,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainerError: {
    borderColor: COLORS.error,
  },
  inputContainerDisabled: {
    opacity: 0.6,
  },
  input: {
    flex: 1,
    color: COLORS.text,
    fontSize: 14,
    paddingVertical: 10,
  },
  startIconContainer: {
    marginRight: 8,
  },
  endIconContainer: {
    marginLeft: 8,
  },
  iconText: {
    fontSize: 16,
    lineHeight: 16,
  },
  toggleButton: {
    paddingVertical: 6,
    paddingHorizontal: 6,
    marginLeft: 8,
  },
  infoText: {
    marginTop: 6,
  },
  errorText: {
    marginTop: 6,
  },
});
