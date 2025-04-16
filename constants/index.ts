export const SECTIONS_IDS = {
  INTRO: "intro",
  EXPERIENCES: "experiences",
  PROJECTS: "projects",
  CONTACT: "contact",
} as const;

export const SCROLL_MARGIN_SETTINGS = {
  desktop: {
    scrollMarginTop: "140px",
    scrollSnapAlign: "start",
  },
  mobile: {
    scrollMarginTop: "80px",
    scrollSnapAlign: "start",
  },
} as const;
