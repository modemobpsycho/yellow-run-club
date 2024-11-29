import { SadEmotionSVG } from '@/common/icons/SadEmotionSVG';
import { useAddJog } from '@/common/hooks/useAddJog';
import { useAddJogMutation } from '@/api/jogs.api';
import { useEffect } from 'react';
import { Modal } from '@/components/Modal/Modal';
import { AddJogButton } from '@/common/commonComponents/AddJogButton';
import { JogForm } from '@/components/JogForm/JogForm';

import './EmptyJogs.scss';

export default function EmptyJogs() {
  const [addJog, { isLoading, isSuccess, data }] = useAddJogMutation();
  const { jog, isModalOpen, handleSuccess, openModal, closeModal, handleChange } = useAddJog();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await addJog({
        distance: Number(jog.distance),
        time: Number(jog.time),
        date: new Date(jog.date).toISOString()
      });
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
      <div className="empty-jogs-wrapper">
        <SadEmotionSVG />
        <p className="empty-jogs-text">Nothing is there</p>
        <AddJogButton onClick={openModal} icon="Create your jog first" buttonClass="empty-jogs-button" />
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <JogForm handleChange={handleChange} handleSubmit={handleSubmit} isLoading={isLoading} />
      </Modal>
    </>
  );
}
