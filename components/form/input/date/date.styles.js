import { COLORS } from "@/contants/colors";
import { StyleSheet } from "react-native";

export const dateInputStyles = StyleSheet.create({
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
  valueText: {
    flex: 1,
    color: COLORS.text,
    fontSize: 14,
    paddingVertical: 12,
  },
  placeholderText: {
    color: COLORS.textLight,
  },
  iconText: {
    fontSize: 16,
    lineHeight: 16,
  },
  startIconContainer: {
    marginRight: 8,
  },
  endIconContainer: {
    marginLeft: 8,
  },
  infoText: {
    marginTop: 6,
  },
  errorText: {
    marginTop: 6,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    padding: 16,
  },
  modalCard: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: 12,
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 8,
  },
  actionButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginLeft: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
});
