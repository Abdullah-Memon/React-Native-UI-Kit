import { COLORS } from "@/contants/colors";
import { StyleSheet } from "react-native";

export const dropdownStyles = StyleSheet.create({
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
  dropdownCard: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    overflow: "hidden",
  },
  searchInput: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    paddingHorizontal: 12,
    minHeight: 44,
    color: COLORS.text,
    fontSize: 14,
  },
  listContainer: {
    maxHeight: 240,
  },
  optionItem: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  optionItemSelected: {
    backgroundColor: COLORS.background,
  },
  emptyState: {
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  closeButtonWrap: {
    padding: 8,
    alignItems: "flex-end",
  },
});
