import { useEffect } from 'react';
import { Modal } from '@/components/Modal/Modal';
import { useAddJogMutation } from '@/api/jogs.api';
import { AddJogButton } from '@/common/commonComponents/AddJogButton';
import { JogForm } from '@/components/JogForm/JogForm';
import { useAddJog } from '@/common/hooks/useAddJog';

import './AddJog.scss';

export function AddJog() {
  const [addJog, { isLoading, isSuccess, data }] = useAddJogMutation();
  const { jog, isModalOpen, handleSuccess, openModal, closeModal, handleChange } = useAddJog();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await addJog({ distance: Number(jog.distance), time: Number(jog.time), date: new Date(jog.date).toISOString() });
    } catch (error) {
      console.error('Error adding jog:', error);
    }
  };

  useEffect(() => {
    if (isSuccess && data) {
      handleSuccess();
    }
  }, [isLoading]);

  return (
    <>
      <AddJogButton onClick={openModal} icon={'+'} buttonClass="add-jog-button" />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <JogForm handleChange={handleChange} handleSubmit={handleSubmit} isLoading={isLoading} />
      </Modal>
    </>
  );
}
