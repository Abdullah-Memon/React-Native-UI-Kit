import { COLORS } from "@/contants/colors";
import DateTimePicker from "@react-native-community/datetimepicker";
import React from "react";
import { Modal, Platform, Pressable, Text, View } from "react-native";
import Typography from "../../Typography";
import { dateInputStyles as styles } from "./date.styles";

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

function toDate(value) {
  if (!value) {
    return null;
  }

  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value;
  }

  const parsedDate = new Date(value);
  if (Number.isNaN(parsedDate.getTime())) {
    return null;
  }

  return parsedDate;
}

function formatDate(date, format = "YYYY-MM-DD") {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");

  if (format === "DD/MM/YYYY") {
    return `${day}/${month}/${year}`;
  }

  if (format === "MM/DD/YYYY") {
    return `${month}/${day}/${year}`;
  }

  return `${year}-${month}-${day}`;
}

export default function DateInput({
  label,
  value,
  onChange,
  isRequired = false,
  info,
  icon,
  error,
  requiredErrorMessage,
  placeholder = "Select date",
  displayFormat = "YYYY-MM-DD",
  minimumDate,
  maximumDate,
  mode = "date",
  containerStyle,
  inputContainerStyle,
  labelStyle,
  infoStyle,
  errorStyle,
  editable = true,
}) {
  const [touched, setTouched] = React.useState(false);
  const [internalError, setInternalError] = React.useState("");
  const [showPicker, setShowPicker] = React.useState(false);
  const [iosTempDate, setIosTempDate] = React.useState(
    () => toDate(value) || new Date(),
  );

  const currentDate = toDate(value);

  const validateValue = React.useCallback(
    (nextValue) => {
      const labelText = label || "This field";
      if (isRequired && !toDate(nextValue)) {
        return requiredErrorMessage || `${labelText} is required.`;
      }
      return "";
    },
    [isRequired, label, requiredErrorMessage],
  );

  React.useEffect(() => {
    if (touched) {
      setInternalError(validateValue(value));
    }
  }, [value, touched, validateValue]);

  const openPicker = () => {
    if (!editable) {
      return;
    }
    setTouched(true);
    setInternalError(validateValue(value));
    if (Platform.OS === "ios") {
      setIosTempDate(currentDate || new Date());
    }
    setShowPicker(true);
  };

  const handleAndroidChange = (_, selectedDate) => {
    setShowPicker(false);
    if (selectedDate) {
      onChange?.(selectedDate);
      setInternalError(validateValue(selectedDate));
    }
  };

  const handleIosDone = () => {
    onChange?.(iosTempDate);
    setInternalError(validateValue(iosTempDate));
    setShowPicker(false);
  };

  const displayedError = error ?? internalError;
  const hasError = Boolean(displayedError);
  const startIcon = icon?.start || "📅";
  const endIcon = icon?.end || "▾";
  const displayValue = currentDate
    ? formatDate(currentDate, displayFormat)
    : "";

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
        onPress={openPicker}
        style={[
          styles.inputContainer,
          hasError ? styles.inputContainerError : null,
          !editable ? styles.inputContainerDisabled : null,
          inputContainerStyle,
        ]}
      >
        <View style={styles.startIconContainer}>
          {renderIconNode(
            startIcon,
            hasError ? COLORS.error : COLORS.textLight,
          )}
        </View>

        <Typography
          variant="p"
          style={[
            styles.valueText,
            !displayValue ? styles.placeholderText : null,
          ]}
        >
          {displayValue || placeholder}
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

      {Platform.OS === "android" && showPicker ? (
        <DateTimePicker
          mode={mode}
          value={currentDate || new Date()}
          minimumDate={minimumDate}
          maximumDate={maximumDate}
          onChange={handleAndroidChange}
        />
      ) : null}

      {Platform.OS === "ios" ? (
        <Modal transparent visible={showPicker} animationType="fade">
          <View style={styles.modalOverlay}>
            <View style={styles.modalCard}>
              <DateTimePicker
                mode={mode}
                display="spinner"
                value={iosTempDate}
                minimumDate={minimumDate}
                maximumDate={maximumDate}
                onChange={(_, selectedDate) => {
                  if (selectedDate) {
                    setIosTempDate(selectedDate);
                  }
                }}
              />
              <View style={styles.modalActions}>
                <Pressable
                  style={styles.actionButton}
                  onPress={() => setShowPicker(false)}
                >
                  <Typography variant="span">Cancel</Typography>
                </Pressable>
                <Pressable style={styles.actionButton} onPress={handleIosDone}>
                  <Typography variant="span" color={COLORS.primary}>
                    Done
                  </Typography>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      ) : null}
    </View>
  );
}
