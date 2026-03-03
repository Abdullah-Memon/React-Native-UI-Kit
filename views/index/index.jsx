import Button from "@/components/btn";
import Typography from "@/components/form/Typography";
import { COLORS } from "@/contants/colors";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";

export default function WelcomeScreen() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/showcase");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Typography variant="h1" style={styles.title}>
          React Native UI Kit
        </Typography>

        <Typography
          variant="h4"
          color={COLORS.textLight}
          style={styles.subtitle}
        >
          Developed by Abdullah Memon
        </Typography>

        <Typography variant="p" color={COLORS.text} style={styles.description}>
          A comprehensive collection of reusable, theme-driven React Native
          components designed to accelerate your development. This UI Kit
          includes Buttons, Typography, Sidebar, and more—all ready to use with
          simple prop-based configuration.
        </Typography>

        <Typography variant="h5" style={styles.featureTitle}>
          ✨ Features
        </Typography>

        <Typography variant="p" color={COLORS.text} style={styles.feature}>
          • Reusable shared components
        </Typography>
        <Typography variant="p" color={COLORS.text} style={styles.feature}>
          • Theme-driven styling with multiple color palettes
        </Typography>
        <Typography variant="p" color={COLORS.text} style={styles.feature}>
          • Simple prop-based configuration
        </Typography>
        <Typography variant="p" color={COLORS.text} style={styles.feature}>
          • TypeScript-free JavaScript/JSX codebase
        </Typography>
        <Typography variant="p" color={COLORS.text} style={styles.feature}>
          • Easy to extend and customize
        </Typography>

        <Typography variant="h5" style={styles.ctaTitle}>
          Ready to explore?
        </Typography>

        <Button
          title="Continue to Showcase"
          onPress={handleContinue}
          size="lg"
          style={styles.ctaButton}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.background,
    paddingBottom: 32,
  },
  content: {
    padding: 20,
    justifyContent: "center",
  },
  title: {
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 24,
  },
  description: {
    marginBottom: 24,
    lineHeight: 24,
  },
  featureTitle: {
    marginBottom: 12,
    color: COLORS.primary,
  },
  feature: {
    marginBottom: 8,
  },
  ctaTitle: {
    marginTop: 24,
    marginBottom: 16,
    color: COLORS.primary,
  },
  ctaButton: {
    marginTop: 12,
  },
});
