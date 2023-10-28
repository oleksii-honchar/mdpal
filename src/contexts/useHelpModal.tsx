import { createContext, FC, ReactNode, useState } from "react";

interface HelpModalContextProviderProps {
  children?: ReactNode;
}

interface HelpModalContextProps {
  state: boolean;
  setModalState: (state: boolean) => void;
}

export const HelpModalContext = createContext<HelpModalContextProps>({
  state: false,
  setModalState: () => {},
});

export function HelpModalContextProvider({ children }: HelpModalContextProviderProps): ReactNode {
  const [state, setModalState] = useState<boolean>(false);

  return <HelpModalContext.Provider value={{ state, setModalState }}>{children}</HelpModalContext.Provider>;
}
