import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SafeScreen({
  children,
  style,
  edges = ["top", "left", "right", "bottom"],
  ...props
}) {
  return (
    <SafeAreaView edges={edges} style={[styles.container, style]} {...props}>
      <View style={styles.innerContainer}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d1d1d",
  },
  innerContainer: {
    flex: 1,
  },
});
