import { COLORS } from "@/contants/colors";
import React from "react";
import {
  FlatList,
  Modal,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import Typography from "../../Typography";
import { dropdownStyles as styles } from "./dropdown.styles";

function renderIconNode(iconNode, color) {
  if (!iconNode) {
    return null;
  }

  if (React.isValidElement(iconNode)) {
    return iconNode;
  }

  if (typeof iconNode === "function") {
    return iconNode({ color, size: 16 });
  }

  if (typeof iconNode === "string" || typeof iconNode === "number") {
    return <Text style={[styles.iconText, { color }]}>{iconNode}</Text>;
  }

  return null;
}

function normalizeOption(option, labelKey, valueKey) {
  if (typeof option === "string" || typeof option === "number") {
    return {
      label: String(option),
      value: option,
      raw: option,
    };
  }

  return {
    label: String(option?.[labelKey] ?? ""),
    value: option?.[valueKey],
    raw: option,
  };
}

export default function DropdownInput({
  label,
  value,
  onValueChange,
  options = [],
  labelKey = "label",
  valueKey = "value",
  placeholder = "Select an option",
  isRequired = false,
  info,
  error,
  requiredErrorMessage,
  searchable = true,
  searchPlaceholder = "Search...",
  maxHeight = 240,
  icon,
  containerStyle,
  inputContainerStyle,
  labelStyle,
  infoStyle,
  errorStyle,
  editable = true,
}) {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [touched, setTouched] = React.useState(false);

  const normalizedOptions = React.useMemo(
    () => options.map((option) => normalizeOption(option, labelKey, valueKey)),
    [options, labelKey, valueKey],
  );

  const selectedOption = React.useMemo(
    () => normalizedOptions.find((option) => option.value === value),
    [normalizedOptions, value],
  );

  const filteredOptions = React.useMemo(() => {
    const trimmedQuery = query.trim().toLowerCase();
    if (!trimmedQuery) {
      return normalizedOptions;
    }

    return normalizedOptions.filter((option) =>
      option.label.toLowerCase().includes(trimmedQuery),
    );
  }, [normalizedOptions, query]);

  const internalError =
    isRequired &&
    touched &&
    (value === undefined || value === null || value === "")
      ? requiredErrorMessage || `${label || "This field"} is required.`
      : "";

  const displayedError = error ?? internalError;
  const hasError = Boolean(displayedError);
  const startIcon = icon?.start;
  const endIcon = icon?.end || "▾";

  const openDropdown = () => {
    if (!editable) {
      return;
    }
    setTouched(true);
    setOpen(true);
  };

  const closeDropdown = () => {
    setOpen(false);
    setQuery("");
  };

  const selectOption = (option) => {
    onValueChange?.(option.value, option.raw);
    closeDropdown();
  };

  return (
    <View style={[styles.wrapper, containerStyle]}>
      {label ? (
        <View style={styles.labelRow}>
          <Typography variant="h5" style={[styles.label, labelStyle]}>
            {label}
          </Typography>
          {isRequired ? (
            <Typography variant="h5" style={styles.requiredAsterisk}>
              *
            </Typography>
          ) : null}
        </View>
      ) : null}

      <Pressable
        onPress={openDropdown}
        style={[
          styles.inputContainer,
          hasError ? styles.inputContainerError : null,
          !editable ? styles.inputContainerDisabled : null,
          inputContainerStyle,
        ]}
      >
        {startIcon ? (
          <View style={styles.startIconContainer}>
            {renderIconNode(
              startIcon,
              hasError ? COLORS.error : COLORS.textLight,
            )}
          </View>
        ) : null}

        <Typography
          variant="p"
          style={[
            styles.valueText,
            !selectedOption?.label ? styles.placeholderText : null,
          ]}
        >
          {selectedOption?.label || placeholder}
        </Typography>

        <View style={styles.endIconContainer}>
          {renderIconNode(endIcon, hasError ? COLORS.error : COLORS.textLight)}
        </View>
      </Pressable>

      {info ? (
        <Typography
          variant="span"
          color={COLORS.textLight}
          style={[styles.infoText, infoStyle]}
        >
          {info}
        </Typography>
      ) : null}

      {hasError ? (
        <Typography
          variant="span"
          color={COLORS.error}
          style={[styles.errorText, errorStyle]}
        >
          {displayedError}
        </Typography>
      ) : null}

      <Modal transparent visible={open} animationType="fade">
        <Pressable style={styles.modalOverlay} onPress={closeDropdown}>
          <Pressable style={styles.dropdownCard} onPress={() => {}}>
            {searchable ? (
              <TextInput
                value={query}
                onChangeText={setQuery}
                placeholder={searchPlaceholder}
                placeholderTextColor={COLORS.textLight}
                style={styles.searchInput}
                autoCapitalize="none"
              />
            ) : null}

            <FlatList
              data={filteredOptions}
              keyExtractor={(item, index) => `${String(item.value)}-${index}`}
              contentContainerStyle={[styles.listContainer, { maxHeight }]}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => selectOption(item)}
                  style={[
                    styles.optionItem,
                    item.value === value ? styles.optionItemSelected : null,
                  ]}
                >
                  <Typography variant="p">{item.label}</Typography>
                </Pressable>
              )}
              ListEmptyComponent={
                <View style={styles.emptyState}>
                  <Typography variant="span" color={COLORS.textLight}>
                    No options found.
                  </Typography>
                </View>
              }
            />

            <View style={styles.closeButtonWrap}>
              <Pressable onPress={closeDropdown}>
                <Typography variant="span" color={COLORS.primary}>
                  Close
                </Typography>
              </Pressable>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}
