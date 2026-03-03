import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { buttonStyles, getButtonTokens, getSizeTokens } from "./btn.styles";

function renderIconNode(iconNode, color, fontSize) {
  if (!iconNode) {
    return null;
  }

  if (React.isValidElement(iconNode)) {
    return iconNode;
  }

  if (typeof iconNode === "function") {
    return iconNode({ color, size: fontSize });
  }

  if (typeof iconNode === "string" || typeof iconNode === "number") {
    return (
      <Text style={[buttonStyles.iconText, { color, fontSize }]}>
        {iconNode}
      </Text>
    );
  }

  return null;
}

export default function Button({
  title = "Button",
  onPress,
  variant = "primary",
  type = "contained",
  color,
  size = "md",
  icon,
  btnType = "text",
  className,
  style,
  textStyle,
  disabled = false,
}) {
  const sizeTokens = getSizeTokens(size);
  const colorTokens = getButtonTokens({ variant, type, color, disabled });

  const startIcon = icon?.start;
  const endIcon = icon?.end;

  const buttonContent =
    btnType === "icon" ? (
      <View style={buttonStyles.iconOnlyWrapper}>
        {renderIconNode(
          startIcon || endIcon,
          colorTokens.textColor,
          sizeTokens.fontSize,
        )}
      </View>
    ) : (
      <View style={buttonStyles.contentWrapper}>
        {startIcon ? (
          <View style={buttonStyles.startIcon}>
            {renderIconNode(
              startIcon,
              colorTokens.textColor,
              sizeTokens.fontSize,
            )}
          </View>
        ) : null}
        <Text
          style={[
            buttonStyles.label,
            { color: colorTokens.textColor, fontSize: sizeTokens.fontSize },
            textStyle,
          ]}
        >
          {title}
        </Text>
        {endIcon ? (
          <View style={buttonStyles.endIcon}>
            {renderIconNode(
              endIcon,
              colorTokens.textColor,
              sizeTokens.fontSize,
            )}
          </View>
        ) : null}
      </View>
    );

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      disabled={disabled}
      className={className}
      style={[
        buttonStyles.base,
        {
          backgroundColor: colorTokens.backgroundColor,
          borderColor: colorTokens.borderColor,
          minHeight: sizeTokens.height,
          paddingHorizontal: sizeTokens.paddingHorizontal,
          borderRadius: sizeTokens.borderRadius,
          opacity: disabled ? 0.6 : 1,
        },
        style,
      ]}
    >
      {buttonContent}
    </TouchableOpacity>
  );
}
