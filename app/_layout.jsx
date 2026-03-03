import Sidebar from "@/components/sidebar";
import { SidebarProvider } from "@/components/sidebar/SidebarContext";
import SafeScreen from "@/utils/safe-screen";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
        hidden={false}
      />
      <SafeScreen>
        <SidebarProvider>
          <Sidebar />
          <Stack screenOptions={{ headerShown: false }} />
        </SidebarProvider>
      </SafeScreen>
    </View>
  );
}
