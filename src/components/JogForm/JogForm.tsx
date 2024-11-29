interface JogFormProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

export const JogForm: React.FC<JogFormProps> = ({ handleChange, handleSubmit, isLoading }) => {
  return (
    <form className="add-jog-form" onSubmit={handleSubmit}>
      <div className="add-jog-input">
        <label htmlFor="distance">Distance</label>
        <input type="number" id="distance" name="distance" placeholder="meters" onChange={handleChange} required />
      </div>
      <div className="add-jog-input">
        <label htmlFor="date">Time</label>
        <input type="number" id="time" name="time" placeholder="seconds" onChange={handleChange} required />
      </div>
      <div className="add-jog-input">
        <label htmlFor="date">Date</label>
        <input type="date" id="date" name="date" placeholder="date" onChange={handleChange} required />
      </div>
      <button type="submit" className="submit-jog-button" disabled={isLoading}>
        {isLoading ? 'Saving...' : 'Save'}
      </button>
    </form>
  );
};
