// src/context/ModalContext.tsx
import React, { createContext, ReactNode, useState } from "react";

type ModalState = "login" | "register" | null;

export interface ModalContextType {
  modalState: ModalState;
  openModal: (modalType: ModalState) => void;
  closeModal: () => void;
  currentPath: string;
  setCurrentPath: (path: string) => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [modalState, setModalState] = useState<ModalState>(null);
  const [currentPath, setCurrentPath] = useState<string>("/");

  const openModal = (modalType: ModalState) => {
    setModalState(modalType);
  };

  const closeModal = () => {
    setModalState(null);
  };

  return (
    <ModalContext.Provider
      value={{
        modalState,
        openModal,
        closeModal,
        currentPath,
        setCurrentPath,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
