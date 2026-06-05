import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Order } from '../types/order';

type ModalType =
  | 'newOrder'
  | 'newProduct'
  | 'newTransaction'
  | 'editOrder'
  | null;

type ModalPayload = Order | null;

interface ModalContextValue {
  activeModal: ModalType;
  payload: ModalPayload;
  open: (modal: NonNullable<ModalType>, data?: ModalPayload) => void;
  close: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [payload, setPayload] = useState<ModalPayload>(null);

  const open = (modal: NonNullable<ModalType>, data: ModalPayload = null) => {
    setActiveModal(modal);
    setPayload(data);
  };

  const close = () => {
    setActiveModal(null);
    setPayload(null);
  };

  return (
    <ModalContext.Provider value={{ activeModal, payload, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx)
    throw new Error('useModal deve ser usado dentro de um ModalProvider');
  return ctx;
}
