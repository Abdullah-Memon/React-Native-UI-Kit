import React from "react";
import { View } from "react-native";
import { cardStyles } from "./card.styles";

/**
 * Reusable Card Component
 *
 * @param {Object} props
 * @param {React.ReactNode} props.cardHeader - Header content (title, icon, etc.)
 * @param {React.ReactNode} props.cardContent - Main content area
 * @param {React.ReactNode} props.cardFooter - Footer content (actions, buttons, etc.)
 * @param {Object} props.style - Custom container styles
 * @param {Object} props.headerStyle - Custom header styles
 * @param {Object} props.contentStyle - Custom content styles
 * @param {Object} props.footerStyle - Custom footer styles
 * @param {boolean} props.elevated - Add elevation/shadow (default: true)
 * @param {string} props.variant - Card variant: 'default', 'outlined', 'filled' (default: 'default')
 * @param {Function} props.onPress - Optional press handler for interactive cards
 */
export default function Card({
  cardHeader,
  cardContent,
  cardFooter,
  style,
  headerStyle,
  contentStyle,
  footerStyle,
  elevated = true,
  variant = "default",
  onPress,
  children,
}) {
  const variantStyles = cardStyles.getVariantStyles(variant);
  const elevationStyles = elevated ? cardStyles.elevated : {};

  const CardContainer = onPress ? require("react-native").Pressable : View;

  return (
    <CardContainer
      onPress={onPress}
      style={[cardStyles.container, variantStyles, elevationStyles, style]}
    >
      {cardHeader && (
        <View style={[cardStyles.header, headerStyle]}>{cardHeader}</View>
      )}

      {(cardContent || children) && (
        <View style={[cardStyles.content, contentStyle]}>
          {cardContent || children}
        </View>
      )}

      {cardFooter && (
        <View style={[cardStyles.footer, footerStyle]}>{cardFooter}</View>
      )}
    </CardContainer>
  );
}
