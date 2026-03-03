import Typography from "@/components/form/Typography";
import { COLORS } from "@/contants/colors";
import { useRouter } from "expo-router";
import React from "react";
import {
    Animated,
    Pressable,
    ScrollView,
    StyleSheet,
    View,
} from "react-native";
import { useSidebar } from "./SidebarContext";
import { SIDEBAR_MENU } from "./nav-routes";

export default function Sidebar() {
  const { isOpen, closeSidebar } = useSidebar();
  const router = useRouter();
  const slideAnim = React.useRef(new Animated.Value(isOpen ? 0 : -280)).current;
  const [expandedItems, setExpandedItems] = React.useState({});

  React.useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isOpen ? 0 : -280,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isOpen, slideAnim]);

  const handleNavigation = (route) => {
    closeSidebar();
    router.push(route);
  };

  const toggleExpand = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      {isOpen && <Pressable style={styles.overlay} onPress={closeSidebar} />}
      <Animated.View
        style={[
          styles.sidebarContainer,
          {
            transform: [{ translateX: slideAnim }],
          },
        ]}
      >
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.header}>
            <Typography variant="h3" color={COLORS.white}>
              Menu
            </Typography>
          </View>

          {SIDEBAR_MENU.map((item, index) =>
            item.collapsible ? (
              <View key={index}>
                <Pressable
                  style={({ pressed }) => [
                    styles.menuItem,
                    pressed && styles.menuItemPressed,
                  ]}
                  onPress={() => toggleExpand(index)}
                >
                  <Typography variant="p" style={styles.menuIcon}>
                    {item.icon}
                  </Typography>
                  <Typography
                    variant="p"
                    color={COLORS.white}
                    style={styles.menuLabel}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    variant="p"
                    color={COLORS.white}
                    style={styles.expandIcon}
                  >
                    {expandedItems[index] ? "▼" : "▶"}
                  </Typography>
                </Pressable>

                {expandedItems[index] && item.submenu && (
                  <View style={styles.submenu}>
                    {item.submenu.map((subitem, subindex) => (
                      <Pressable
                        key={subindex}
                        style={({ pressed }) => [
                          styles.submenuItem,
                          pressed && styles.submenuItemPressed,
                        ]}
                        onPress={() => handleNavigation(subitem.route)}
                      >
                        <Typography variant="p" style={styles.submenuIcon}>
                          {subitem.icon}
                        </Typography>
                        <Typography variant="p" color={COLORS.white}>
                          {subitem.label}
                        </Typography>
                      </Pressable>
                    ))}
                  </View>
                )}
              </View>
            ) : (
              <Pressable
                key={index}
                style={({ pressed }) => [
                  styles.menuItem,
                  pressed && styles.menuItemPressed,
                ]}
                onPress={() => handleNavigation(item.route)}
              >
                <Typography variant="p" style={styles.menuIcon}>
                  {item.icon}
                </Typography>
                <Typography variant="p" color={COLORS.white}>
                  {item.label}
                </Typography>
              </Pressable>
            ),
          )}
        </ScrollView>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  sidebarContainer: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 280,
    backgroundColor: COLORS.primary,
    zIndex: 100,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  overlay: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 99,
  },
  content: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingTop: 0,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.2)",
    marginBottom: 16,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginHorizontal: 8,
    marginVertical: 4,
    borderRadius: 8,
    backgroundColor: "transparent",
  },
  menuItemPressed: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },
  menuIcon: {
    marginRight: 12,
    fontSize: 18,
  },
  menuLabel: {
    flex: 1,
  },
  expandIcon: {
    fontSize: 12,
    marginLeft: "auto",
  },
  submenu: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    marginVertical: 0,
  },
  submenuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 32,
    paddingVertical: 12,
    marginHorizontal: 8,
    marginVertical: 2,
    borderRadius: 6,
    backgroundColor: "transparent",
  },
  submenuItemPressed: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  submenuIcon: {
    marginRight: 12,
    fontSize: 16,
  },
});
