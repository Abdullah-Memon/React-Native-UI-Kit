import commonStyles from "@/assets/common.style";
import Typography from "@/components/form/Typography";
import { COLORS } from "@/contants/colors";
import { ScrollView, StyleSheet, View } from "react-native";

export default function TypographyShowcaseScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Typography variant="h3" style={styles.section}>
          Heading Variants
        </Typography>

        <Typography variant="h1">This is H1 Heading</Typography>
        <Typography variant="h2" style={styles.gap}>
          This is H2 Heading
        </Typography>
        <Typography variant="h3" style={styles.gap}>
          This is H3 Heading
        </Typography>
        <Typography variant="h4" style={styles.gap}>
          This is H4 Heading
        </Typography>
        <Typography variant="h5" style={styles.gap}>
          This is H5 Heading
        </Typography>

        <Typography variant="h3" style={styles.section}>
          Body Text
        </Typography>
        <Typography variant="p" style={styles.textBlock}>
          This is a paragraph text. It's suitable for longer content and body
          text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <Typography variant="span" style={styles.gap}>
          This is a small span text, useful for captions and small labels.
        </Typography>

        <Typography variant="h3" style={styles.section}>
          Color Variants
        </Typography>

        <Typography variant="h4" color={COLORS.primary}>
          Primary Color
        </Typography>
        <Typography variant="p" color={COLORS.primary} style={styles.gap}>
          This text uses the primary theme color.
        </Typography>

        <Typography variant="h4" color={COLORS.success} style={styles.gap}>
          Income Color (Green)
        </Typography>
        <Typography variant="p" color={COLORS.success} style={styles.gap}>
          This text indicates income, displayed in green.
        </Typography>

        <Typography variant="h4" color={COLORS.error} style={styles.gap}>
          Expense Color (Red)
        </Typography>
        <Typography variant="p" color={COLORS.error} style={styles.gap}>
          This text indicates expense, displayed in red.
        </Typography>

        <Typography variant="h4" color={COLORS.textLight} style={styles.gap}>
          Light Text
        </Typography>
        <Typography var="p" color={COLORS.textLight} style={styles.gap}>
          This is light text, useful for secondary information.
        </Typography>

        <Typography variant="h3" style={styles.section}>
          Custom Font Sizes
        </Typography>

        <Typography variant="h1" fontSize={40}>
          Extra Large (40px)
        </Typography>
        <Typography variant="p" fontSize={18} style={styles.gap}>
          Larger Paragraph (18px)
        </Typography>
        <Typography variant="span" fontSize={16} style={styles.gap}>
          Larger Span (16px)
        </Typography>
        <Typography variant="p" fontSize={10} style={styles.gap}>
          Smaller Text (10px)
        </Typography>

        <Typography variant="h3" style={styles.section}>
          Combined Props
        </Typography>

        <Typography
          variant="h2"
          color={COLORS.primary}
          fontSize={28}
          style={styles.combined}
        >
          Custom Styled Heading
        </Typography>
        <Typography
          variant="p"
          color={COLORS.success}
          fontSize={16}
          style={styles.gap}
        >
          This combines multiple custom props for unique styling.
        </Typography>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  ...commonStyles,
  section: {
    ...commonStyles.section,
    marginTop: 20,
    marginBottom: 12,
  },
  gap: {
    marginTop: 10,
  },
  textBlock: {
    lineHeight: 24,
    marginBottom: 8,
  },
  combined: {
    marginBottom: 8,
  },
});
