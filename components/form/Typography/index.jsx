import { COLORS } from "@/contants/colors";
import { Text } from "react-native";
import { getTypographyTokens, typographyStyles } from "./typography.styles";

export default function Typography({
  variant = "p",
  fontSize,
  color,
  children,
  style,
  ...props
}) {
  const typographyTokens = getTypographyTokens(variant);
  const variantStyle = typographyStyles[variant] || typographyStyles.p;

  const textColor = color || COLORS.text;
  const customFontSize = fontSize || typographyTokens.fontSize;

  return (
    <Text
      style={[
        variantStyle,
        {
          fontSize: customFontSize,
          color: textColor,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
}
