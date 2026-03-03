import { COLORS } from "@/contants/colors";
import { StyleSheet, View } from "react-native";
import Typography from "../form/Typography";
import SidebarToggleButton from "../sidebar/btn";

export default function ScreenWrapper({ title, children }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SidebarToggleButton variant="primary" type="contained" size="md" />
        <Typography variant="h4" color={COLORS.white}>
          {title}
        </Typography>
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
    padding: 12,
    paddingLeft: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    flex: 1,
  },
});
