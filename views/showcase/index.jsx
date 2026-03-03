import Button from "@/components/btn";
import Typography from "@/components/form/Typography";
import { NAV_ROUTES } from "@/components/sidebar/nav-routes";
import { COLORS } from "@/contants/colors";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";

export default function ShowcaseScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Typography variant="h3" style={styles.section}>
          Welcome to the UI Kit
        </Typography>

        <Typography
          variant="p"
          color={COLORS.textLight}
          style={styles.description}
        >
          This showcase demonstrates all the shared components available in the
          UI Kit. Use the sidebar menu to explore different component sections.
        </Typography>

        <Typography variant="h4" style={styles.featureHeading}>
          📦 Available Components
        </Typography>

        <View style={styles.grid}>
          <View style={styles.card}>
            <Typography variant="h5" style={styles.cardTitle}>
              🔘 Buttons
            </Typography>
            <Typography variant="span" color={COLORS.textLight}>
              Multiple variants, sizes, and styles
            </Typography>
          </View>

          <View style={styles.card}>
            <Typography variant="h5" style={styles.cardTitle}>
              📝 Typography
            </Typography>
            <Typography variant="span" color={COLORS.textLight}>
              H1-H5 headings, paragraph, and span
            </Typography>
          </View>

          <View style={styles.card}>
            <Typography variant="h5" style={styles.cardTitle}>
              🎨 Themes
            </Typography>
            <Typography variant="span" color={COLORS.textLight}>
              Coffee, Forest, Purple, Ocean themes
            </Typography>
          </View>

          <View style={styles.card}>
            <Typography variant="h5" style={styles.cardTitle}>
              📂 Sidebar
            </Typography>
            <Typography variant="span" color={COLORS.textLight}>
              Animated navigation sidebar
            </Typography>
          </View>
        </View>

        <Typography variant="h4" style={styles.usageHeading}>
          🚀 Getting Started
        </Typography>

        <Typography variant="p" style={styles.usage}>
          Import components and use them with props:
        </Typography>

        <View style={styles.codeBlock}>
          <Typography
            variant="span"
            fontSize={11}
            color={COLORS.white}
            style={styles.code}
          >
            {'<Button title="Click" onPress={() => {}} />'}
          </Typography>
        </View>

        <Button
          title="Explore Buttons →"
          onPress={() => router.push(NAV_ROUTES.BUTTONS)}
          size="lg"
          style={styles.exploreButton}
        />
        <Button
          title="Explore Typography →"
          onPress={() => router.push(NAV_ROUTES.TYPOGRAPHY)}
          size="lg"
          variant="secondary"
          style={styles.exploreButton}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    backgroundColor: COLORS.primary,
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  section: {
    marginBottom: 12,
  },
  description: {
    marginBottom: 24,
    lineHeight: 22,
  },
  featureHeading: {
    marginTop: 20,
    marginBottom: 12,
    color: COLORS.primary,
  },
  grid: {
    marginBottom: 24,
  },
  card: {
    backgroundColor: COLORS.card,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderColor: COLORS.border,
    borderWidth: 1,
  },
  cardTitle: {
    marginBottom: 8,
    color: COLORS.text,
  },
  usageHeading: {
    marginTop: 24,
    marginBottom: 12,
    color: COLORS.primary,
  },
  usage: {
    marginBottom: 12,
  },
  codeBlock: {
    backgroundColor: "#2d2d2d",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  code: {
    fontFamily: "Courier New",
  },
  exploreButton: {
    marginBottom: 12,
  },
});
