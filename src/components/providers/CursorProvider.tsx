"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

type CursorVariant = "default" | "hover" | "text" | "drag" | "hidden";

interface CursorContextType {
  variant: CursorVariant;
  setVariant: (v: CursorVariant) => void;
  label: string;
  setLabel: (l: string) => void;
}

const CursorContext = createContext<CursorContextType>({
  variant: "default",
  setVariant: () => {},
  label: "",
  setLabel: () => {},
});

export function CursorProvider({ children }: { children: ReactNode }) {
  const [variant, setVariantState] = useState<CursorVariant>("default");
  const [label, setLabelState] = useState("");

  const setVariant = useCallback((v: CursorVariant) => setVariantState(v), []);
  const setLabel = useCallback((l: string) => setLabelState(l), []);

  return (
    <CursorContext.Provider value={{ variant, setVariant, label, setLabel }}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  return useContext(CursorContext);
}
