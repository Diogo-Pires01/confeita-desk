import { createContext, useContext, useState, type ReactNode } from 'react';

type ModalType = 'newOrder' | 'newProduct' | 'newTransaction' | null;

interface ModalContextValue {
  activeModal: ModalType;
  open: (modal: NonNullable<ModalType>) => void;
  close: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const open = (modal: NonNullable<ModalType>) => setActiveModal(modal);
  const close = () => setActiveModal(null);

  return (
    <ModalContext.Provider value={{ activeModal, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error('useModal must be used within ModalProvider');
  return ctx;
}
