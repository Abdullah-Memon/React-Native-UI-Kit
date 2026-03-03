import Sidebar from "@/components/sidebar";
import { SidebarProvider } from "@/components/sidebar/SidebarContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <SidebarProvider>
      <Sidebar />
      <Stack screenOptions={{ headerShown: false }} />
    </SidebarProvider>
  );
}
