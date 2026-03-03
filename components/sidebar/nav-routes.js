// Navigation routes - centralized for single source of truth
export const NAV_ROUTES = {
  WELCOME: "/",
  HOME: "/showcase",
  ELEMENTS: {
    BUTTONS: "/buttons",
    TYPOGRAPHY: "/typography",
  },
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
        route: NAV_ROUTES.ELEMENTS.BUTTONS,
        icon: "🔘",
      },
      {
        label: "Typography",
        route: NAV_ROUTES.ELEMENTS.TYPOGRAPHY,
        icon: "📝",
      },
    ],
  },
  {
    label: "Exit",
    route: NAV_ROUTES.WELCOME,
    icon: "🚪",
    collapsible: false,
  },
];
