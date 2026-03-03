// Navigation routes - centralized for single source of truth
export const NAV_ROUTES = {
  WELCOME: "/",
  HOME: "/showcase",
  ELEMENTS: {
    BUTTONS: "/buttons",
    TYPOGRAPHY: "/typography",
    INPUT: "/input",
    CARDS: "/cards",
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
      {
        label: "Input",
        route: NAV_ROUTES.ELEMENTS.INPUT,
        icon: "⌨️",
      },
      {
        label: "Cards",
        route: NAV_ROUTES.ELEMENTS.CARDS,
        icon: "🃏",
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
