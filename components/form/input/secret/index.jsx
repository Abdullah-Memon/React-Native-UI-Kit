import { COLORS } from "@/contants/colors";
import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import Typography from "../../Typography";
import { secretInputStyles as styles } from "./secret.styles";

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

function getPattern(regex) {
  if (!regex) {
    return null;
  }

  if (regex instanceof RegExp) {
    return regex;
  }

  if (typeof regex === "string") {
    try {
      return new RegExp(regex);
    } catch {
      return null;
    }
  }

  return null;
}

export default function SecretInput({
  label,
  value,
  onChangeText,
  placeholder = "Enter value",
  regex,
  isRequired = false,
  info,
  icon,
  error,
  requiredErrorMessage,
  regexErrorMessage,
  validateOnChange = false,
  isShowPasswordAllowed = true,
  showIcon = "👁️",
  hideIcon = "🙈",
  containerStyle,
  inputContainerStyle,
  inputStyle,
  labelStyle,
  infoStyle,
  errorStyle,
  editable = true,
  secureTextEntry,
  ...props
}) {
  const [touched, setTouched] = React.useState(false);
  const [internalError, setInternalError] = React.useState("");
  const [isVisible, setIsVisible] = React.useState(false);

  const pattern = React.useMemo(() => getPattern(regex), [regex]);

  const validateValue = React.useCallback(
    (nextValue) => {
      const safeValue = nextValue ?? "";
      const labelText = label || "This field";

      if (isRequired && String(safeValue).trim().length === 0) {
        return requiredErrorMessage || `${labelText} is required.`;
      }

      if (pattern && String(safeValue).length > 0) {
        pattern.lastIndex = 0;
        const isValid = pattern.test(String(safeValue));

        if (!isValid) {
          return regexErrorMessage || `${labelText} format is invalid.`;
        }
      }

      return "";
    },
    [isRequired, label, pattern, requiredErrorMessage, regexErrorMessage],
  );

  const handleChangeText = (text) => {
    onChangeText?.(text);

    if (validateOnChange || touched) {
      setInternalError(validateValue(text));
    }
  };

  const handleBlur = (event) => {
    setTouched(true);
    setInternalError(validateValue(value));
    props.onBlur?.(event);
  };

  React.useEffect(() => {
    if (validateOnChange || touched) {
      setInternalError(validateValue(value));
    }
  }, [value, touched, validateOnChange, validateValue]);

  const displayedError = error ?? internalError;
  const hasError = Boolean(displayedError);
  const startIcon = icon?.start;
  const endIcon = icon?.end;

  const shouldSecure =
    typeof secureTextEntry === "boolean"
      ? secureTextEntry
      : isShowPasswordAllowed
        ? !isVisible
        : true;

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

      <View
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

        <TextInput
          value={value}
          onChangeText={handleChangeText}
          placeholder={placeholder}
          placeholderTextColor={COLORS.textLight}
          style={[styles.input, inputStyle]}
          onBlur={handleBlur}
          editable={editable}
          secureTextEntry={shouldSecure}
          autoCapitalize="none"
          {...props}
        />

        {endIcon ? (
          <View style={styles.endIconContainer}>
            {renderIconNode(
              endIcon,
              hasError ? COLORS.error : COLORS.textLight,
            )}
          </View>
        ) : null}

        {isShowPasswordAllowed ? (
          <Pressable
            onPress={() => setIsVisible((prev) => !prev)}
            style={styles.toggleButton}
          >
            {renderIconNode(isVisible ? hideIcon : showIcon, COLORS.textLight)}
          </Pressable>
        ) : null}
      </View>

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
    </View>
  );
}
