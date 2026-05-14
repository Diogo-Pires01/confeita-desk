import { useModal } from '../../contexts/ModalContext';
import NewOrderModal from './NewOrderModal';
import NewProductModal from './NewProductModal';
import NewTransactionModal from './NewTransactionModal';

export default function ModalRoot() {
  const { activeModal } = useModal();

  if (!activeModal) return null;

  const modals = {
    newOrder: <NewOrderModal />,
    newProduct: <NewProductModal />,
    newTransaction: <NewTransactionModal />,
  };

  return modals[activeModal];
}
