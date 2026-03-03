// Navigation routes - centralized for single source of truth
export const NAV_ROUTES = {
  HOME: "/",
  BUTTONS: "/buttons",
  TYPOGRAPHY: "/typography",
};

// Sidebar menu items with support for nested/dropdown items
export const SIDEBAR_MENU = [
  {
    label: "Home",
    route: NAV_ROUTES.HOME,
    icon: "🏠",
    collapsible: false,
  },
  {
    label: "Elements",
    icon: "⚙",
    collapsible: true,
    submenu: [
      {
        label: "Buttons",
        route: NAV_ROUTES.BUTTONS,
        icon: "🔘",
      },
      {
        label: "Typography",
        route: NAV_ROUTES.TYPOGRAPHY,
        icon: "📝",
      },
    ],
  },
  {
    label: "Exit",
    route: NAV_ROUTES.HOME,
    icon: "🚪",
    collapsible: false,
  },
];
