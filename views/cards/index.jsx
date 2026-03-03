import commonStyles from "@/assets/common.style";
import Button from "@/components/btn";
import Card from "@/components/card";
import Typography from "@/components/form/Typography";
import { COLORS } from "@/contants/colors";
import { ScrollView, StyleSheet, View } from "react-native";

export default function CardsShowcaseScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Basic Card */}
        <Typography variant="h4" style={styles.section}>
          Basic Card
        </Typography>
        <Card
          cardHeader={<Typography variant="h5">Card Title</Typography>}
          cardContent={
            <Typography variant="p">
              This is a basic card with header and content sections.
            </Typography>
          }
        />

        {/* Card with Footer */}
        <Typography variant="h4" style={styles.section}>
          Card with Footer
        </Typography>
        <Card
          cardHeader={<Typography variant="h5">Action Card</Typography>}
          cardContent={
            <Typography variant="p">
              Cards can have footers with action buttons or additional
              information.
            </Typography>
          }
          cardFooter={
            <View style={styles.actions}>
              <Button
                title="Cancel"
                type="outlined"
                size="sm"
                style={styles.footerButton}
                onPress={() => {}}
              />
              <Button
                title="Confirm"
                size="sm"
                style={styles.footerButton}
                onPress={() => {}}
              />
            </View>
          }
        />

        {/* Card Variants */}
        <Typography variant="h4" style={styles.section}>
          Card Variants
        </Typography>

        <Card
          variant="default"
          cardHeader={<Typography variant="h5">Default Variant</Typography>}
          cardContent={
            <Typography variant="p">
              Default card with elevation and white background.
            </Typography>
          }
        />

        <Card
          variant="outlined"
          cardHeader={<Typography variant="h5">Outlined Variant</Typography>}
          cardContent={
            <Typography variant="p">
              Outlined card with border and no elevation.
            </Typography>
          }
          elevated={false}
        />

        <Card
          variant="filled"
          cardHeader={<Typography variant="h5">Filled Variant</Typography>}
          cardContent={
            <Typography variant="p">
              Filled card with background color matching theme.
            </Typography>
          }
        />

        {/* Card without Header */}
        <Typography variant="h4" style={styles.section}>
          Content Only
        </Typography>
        <Card
          cardContent={
            <View>
              <Typography variant="h5" style={{ marginBottom: 8 }}>
                No Header Card
              </Typography>
              <Typography variant="p">
                Cards don't require a header. Content can stand alone.
              </Typography>
            </View>
          }
        />

        {/* Interactive Card */}
        <Typography variant="h4" style={styles.section}>
          Interactive Card
        </Typography>
        <Card
          onPress={() => alert("Card pressed!")}
          cardHeader={<Typography variant="h5">Pressable Card</Typography>}
          cardContent={
            <Typography variant="p">
              Cards can be made interactive with onPress handler. Tap this card!
            </Typography>
          }
        />

        {/* Complex Card */}
        <Typography variant="h4" style={styles.section}>
          Complex Card
        </Typography>
        <Card
          cardHeader={
            <View style={styles.complexHeader}>
              <View>
                <Typography variant="h5">User Profile</Typography>
                <Typography variant="span" style={{ color: COLORS.textLight }}>
                  @johndoe
                </Typography>
              </View>
              <View style={styles.badge}>
                <Typography
                  variant="span"
                  style={{ color: COLORS.white, fontSize: 12 }}
                >
                  PRO
                </Typography>
              </View>
            </View>
          }
          cardContent={
            <View>
              <Typography variant="p" style={{ marginBottom: 12 }}>
                Full-stack developer passionate about creating beautiful and
                functional user interfaces.
              </Typography>
              <View style={styles.stats}>
                <View style={styles.stat}>
                  <Typography variant="h5">1.2K</Typography>
                  <Typography
                    variant="span"
                    style={{ color: COLORS.textLight }}
                  >
                    Followers
                  </Typography>
                </View>
                <View style={styles.stat}>
                  <Typography variant="h5">456</Typography>
                  <Typography
                    variant="span"
                    style={{ color: COLORS.textLight }}
                  >
                    Following
                  </Typography>
                </View>
                <View style={styles.stat}>
                  <Typography variant="h5">89</Typography>
                  <Typography
                    variant="span"
                    style={{ color: COLORS.textLight }}
                  >
                    Posts
                  </Typography>
                </View>
              </View>
            </View>
          }
          cardFooter={
            <View style={styles.actions}>
              <Button
                title="View Profile"
                type="outlined"
                size="sm"
                style={{ flex: 1, marginRight: 8 }}
                onPress={() => {}}
              />
              <Button
                title="Follow"
                size="sm"
                style={{ flex: 1 }}
                onPress={() => {}}
              />
            </View>
          }
        />

        {/* Custom Styled Card */}
        <Typography variant="h4" style={styles.section}>
          Custom Styled
        </Typography>
        <Card
          style={{ backgroundColor: COLORS.primary, borderRadius: 20 }}
          headerStyle={{ borderBottomColor: COLORS.white + "30" }}
          contentStyle={{ paddingVertical: 20 }}
          cardHeader={
            <Typography variant="h5" style={{ color: COLORS.white }}>
              Themed Card
            </Typography>
          }
          cardContent={
            <Typography variant="p" style={{ color: COLORS.white + "DD" }}>
              Cards can be fully customized with style props for container,
              header, content, and footer.
            </Typography>
          }
          elevated={false}
        />

        {/* Information Cards */}
        <Typography variant="h4" style={styles.section}>
          Information Cards
        </Typography>
        <View style={styles.grid}>
          <Card
            style={styles.infoCard}
            cardContent={
              <View style={styles.infoContent}>
                <Typography variant="h3" style={{ color: COLORS.success }}>
                  ✓
                </Typography>
                <Typography variant="h5" style={{ marginTop: 8 }}>
                  Success
                </Typography>
                <Typography
                  variant="span"
                  style={{ color: COLORS.textLight, textAlign: "center" }}
                >
                  Operation completed
                </Typography>
              </View>
            }
            elevated={false}
          />
          <Card
            style={styles.infoCard}
            cardContent={
              <View style={styles.infoContent}>
                <Typography variant="h3" style={{ color: COLORS.error }}>
                  ✕
                </Typography>
                <Typography variant="h5" style={{ marginTop: 8 }}>
                  Error
                </Typography>
                <Typography
                  variant="span"
                  style={{ color: COLORS.textLight, textAlign: "center" }}
                >
                  Something went wrong
                </Typography>
              </View>
            }
            elevated={false}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  ...commonStyles,
  section: {
    ...commonStyles.section,
    marginTop: 16,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  footerButton: {
    marginLeft: 8,
  },
  complexHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  badge: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  stat: {
    alignItems: "center",
  },
  grid: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  infoCard: {
    flex: 1,
  },
  infoContent: {
    alignItems: "center",
    paddingVertical: 8,
  },
});
