import { useState } from 'react';

interface Jog {
  distance: number;
  time: number;
  date: string;
}

interface AddJog {
  jog: Jog;
  isModalOpen: boolean;
  handleSuccess: () => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  openModal: () => void;
  closeModal: () => void;
}

export function useAddJog(): AddJog {
  const [jog, setJog] = useState<Jog>({ distance: 0, time: 0, date: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSuccess = () => {
    setJog({ distance: 0, time: 0, date: '' });
    setIsModalOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setJog((prevJog) => ({ ...prevJog, [name]: value }));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return { jog, isModalOpen, handleSuccess, openModal, closeModal, handleChange };
}
