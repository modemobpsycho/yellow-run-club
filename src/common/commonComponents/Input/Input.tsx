import React from 'react';

interface InputProps {
  label?: string;
  placeholder: string;
  name: string;
  id?: string;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, placeholder, name, id, type, onChange }) => {
  return (
    <div className="input">
      <label className="input__label">{label}</label>
      <input className="input__input" placeholder={placeholder} name={name} id={id} type={type} onChange={onChange} />
    </div>
  );
};

export default Input;
