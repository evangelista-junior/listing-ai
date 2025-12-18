import { create } from "zustand";

interface usePanelStoreProps {
  isSideMenuOpen: boolean;

  toggleSideMenu: () => void;
}

export const usePanelStore = create<usePanelStoreProps>((set) => ({
  isSideMenuOpen: false,

  toggleSideMenu: () =>
    set((state) => ({
      isSideMenuOpen: !state.isSideMenuOpen,
    })),
}));
