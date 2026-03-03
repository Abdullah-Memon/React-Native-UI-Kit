import commonStyles from "@/assets/common.style";
import Button from "@/components/btn";
import Typography from "@/components/form/Typography";
import { COLORS } from "@/contants/colors";
import { ScrollView, StyleSheet, View } from "react-native";

export default function ButtonsShowcaseScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Typography variant="h4" style={styles.section}>
          Variants
        </Typography>
        <Button title="Primary" variant="primary" onPress={() => {}} />
        <Button
          title="Secondary"
          variant="secondary"
          onPress={() => {}}
          style={styles.gap}
        />

        <Typography variant="h4" style={styles.section}>
          Types
        </Typography>
        <Button title="Contained" type="contained" onPress={() => {}} />
        <Button
          title="Outlined"
          type="outlined"
          onPress={() => {}}
          style={styles.gap}
        />

        <Typography variant="h4" style={styles.section}>
          Sizes
        </Typography>
        <Button title="XL Button" size="xl" onPress={() => {}} />
        <Button
          title="LG Button"
          size="lg"
          onPress={() => {}}
          style={styles.gap}
        />
        <Button
          title="MD Button"
          size="md"
          onPress={() => {}}
          style={styles.gap}
        />
        <Button
          title="SM Button"
          size="sm"
          onPress={() => {}}
          style={styles.gap}
        />
        <Button
          title="XS Button"
          size="xs"
          onPress={() => {}}
          style={styles.gap}
        />

        <Typography variant="h4" style={styles.section}>
          With Icons
        </Typography>
        <Button title="Start Icon" icon={{ start: "←" }} onPress={() => {}} />
        <Button
          title="End Icon"
          icon={{ end: "→" }}
          onPress={() => {}}
          style={styles.gap}
        />
        <Button
          title="Both Icons"
          icon={{ start: "★", end: "✓" }}
          onPress={() => {}}
          style={styles.gap}
        />

        <Typography variant="h4" style={styles.section}>
          Icon Only Buttons
        </Typography>
        <View style={styles.iconRow}>
          <Button
            btnType="icon"
            icon={{ start: "🔍" }}
            onPress={() => {}}
            size="md"
          />
          <Button
            btnType="icon"
            icon={{ start: "⚙" }}
            variant="secondary"
            onPress={() => {}}
            size="md"
            style={styles.iconGap}
          />
          <Button
            btnType="icon"
            icon={{ start: "＋" }}
            type="outlined"
            onPress={() => {}}
            size="md"
            style={styles.iconGap}
          />
        </View>

        <Typography variant="h4" style={styles.section}>
          Colors & States
        </Typography>
        <Button
          title="Custom Color (Income)"
          color={COLORS.success}
          onPress={() => {}}
        />
        <Button
          title="Custom Color (Expense)"
          type="outlined"
          color={COLORS.error}
          onPress={() => {}}
          style={styles.gap}
        />
        <Button
          title="Disabled Button"
          disabled={true}
          onPress={() => {}}
          style={styles.gap}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  ...commonStyles,
  header: {
    backgroundColor: COLORS.primary,
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  section: {
    ...commonStyles.section,
    marginTop: 16,
    marginBottom: 12,
  },
  gap: {
    marginTop: 10,
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconGap: {
    marginLeft: 10,
  },
});
