import { RunIconSVG } from '@/common/icons/RunIconSVG';
import { IconButton } from '@mui/material';
import { IJog } from '@/common/types/jog.interface';
import { useDeleteJogMutation, useUpdateJogMutation } from '@/api/jogs.api';
import { useEffect } from 'react';
import { Modal } from '@/components/Modal/Modal';
import { getMinutes, getKilometers } from '@/common/helpers/math';
import { JogForm } from '@/components/JogForm/JogForm';
import { useAddJog } from '@/common/hooks/useAddJog';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import './JogElement.scss';

export function JogElement({ jog }: { jog: IJog }) {
  const [deleteJog, { isLoading: isLoadingDelete }] = useDeleteJogMutation();
  const [updateJog, { isSuccess: isSuccessUpdate, isLoading: isLoadingUpdate }] = useUpdateJogMutation();
  const { jog: addJog, isModalOpen, handleSuccess, openModal, closeModal, handleChange } = useAddJog();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await updateJog({
        id: jog.id,
        distance: Number(addJog.distance),
        time: Number(addJog.time),
        date: new Date(addJog.date).toISOString()
      });
    } catch (error) {
      console.error('Error adding jog:', error);
    }
  };

  useEffect(() => {
    if (isSuccessUpdate) {
      handleSuccess();
    }
  }, [isLoadingUpdate]);

  const handleDelete = async () => {
    try {
      await deleteJog(jog.id);
    } catch (error) {
      console.error('Error deleting jog:', error);
    }
  };

  return (
    <>
      <div className="jog-element">
        <RunIconSVG />
        <div className="jog-element-info">
          <p className="jog-element-date">{new Date(jog.date).toLocaleDateString()}</p>
          <div className="jog-element-info-values">
            <p className="jog-element-value">
              <strong>Speed:</strong> {jog.speed}
            </p>
            <p className="jog-element-value">
              <strong>Distance:</strong> {getKilometers(jog.distance)} km
            </p>
            <p className="jog-element-value">
              <strong>Time:</strong> {getMinutes(jog.time)} min
            </p>
          </div>
        </div>
        <div className="jog-element-buttons">
          <IconButton className="jog-element-edit-button" onClick={openModal} disabled={isLoadingUpdate}>
            <EditIcon />
          </IconButton>
          <IconButton className="jog-element-delete-button" onClick={handleDelete} disabled={isLoadingDelete}>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <JogForm handleChange={handleChange} handleSubmit={handleSubmit} isLoading={isLoadingUpdate} />
      </Modal>
    </>
  );
}
