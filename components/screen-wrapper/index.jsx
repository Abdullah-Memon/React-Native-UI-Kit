import { COLORS } from "@/contants/colors";
import { StyleSheet, View } from "react-native";
import Typography from "../form/Typography";
import SidebarToggleButton from "../sidebar/btn";

export default function ScreenWrapper({ title, children }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Typography variant="h3" color={COLORS.white}>
          {title}
        </Typography>
        <SidebarToggleButton variant="primary" type="contained" />
      </View>
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
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
    flex: 1,
  },
});
