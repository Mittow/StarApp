export const Utils = {
  isMobile(): boolean {
    const mobileBreakpoint = 768;
    return window.innerWidth < mobileBreakpoint;
  }
} 