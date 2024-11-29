import { useSignupUserMutation } from '@/api/user.api';
import Input from '@/common/commonComponents/Input/Input';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function SignupForm() {
  const navigate = useNavigate();
  const [signupUser, { isSuccess, data, isLoading }] = useSignupUserMutation();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleClick = async () => {
    try {
      await signupUser(formData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    if (isSuccess && data) {
      navigate('/login');
    }
  }, [isLoading]);
  return (
    <>
      <h2 className="entry-title">Let's run together!</h2>
      <form className="entry-form">
        <Input label="Username" placeholder="Enter your username" name="username" onChange={handleChange} />
        <Input
          label="Password"
          placeholder="Enter your password"
          name="password"
          id="password"
          type="password"
          onChange={handleChange}
        />
      </form>
      <button className="entry-button" onClick={handleClick}>
        Sign up
      </button>
      <p className="entry-redirect">
        Already have an account? <a onClick={() => navigate('/login')}>Log in</a>
      </p>
    </>
  );
}
