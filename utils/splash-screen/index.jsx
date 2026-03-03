import Typography from "@/components/form/Typography";
import { COLORS } from "@/contants/colors";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function SplashScreen({
  title = "React Native UI Kit",
  subtitle = "Loading...",
  showLoader = true,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Typography variant="h1" style={styles.title}>
          {title}
        </Typography>

        <Typography
          variant="p"
          color={COLORS.textLight}
          style={styles.subtitle}
        >
          {subtitle}
        </Typography>

        {showLoader && (
          <ActivityIndicator
            size="large"
            color={COLORS.primary}
            style={styles.loader}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  content: {
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    marginBottom: 12,
    color: COLORS.primary,
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 20,
  },
  loader: {
    marginTop: 8,
  },
});
