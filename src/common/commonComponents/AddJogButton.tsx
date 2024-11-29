import { FC, ReactNode, MouseEvent } from 'react';

type AddJogButtonProps = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  icon: ReactNode;
  buttonClass: string;
};

export const AddJogButton: FC<AddJogButtonProps> = ({ onClick, icon, buttonClass }) => {
  return (
    <button className={buttonClass} onClick={onClick}>
      {icon}
    </button>
  );
};
