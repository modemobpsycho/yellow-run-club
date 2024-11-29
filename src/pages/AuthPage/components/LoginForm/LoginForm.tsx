import { useLoginUserMutation } from '@/api/user.api';
import Input from '@/common/commonComponents/Input/Input';
import { useActions } from '@/common/hooks/useActions';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function LoginForm() {
  const navigate = useNavigate();
  const [loginUser, { isSuccess, data, isLoading }] = useLoginUserMutation();
  const { setUser } = useActions();
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
      await loginUser(formData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    if (isSuccess && data) {
      setUser(data.accessToken);
      navigate('/jogs');
    }
  }, [isLoading]);
  return (
    <>
      <h2 className="entry-title">Log in</h2>
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
        Let me in!
      </button>
      <p className="entry-redirect">
        Don't have an account? <a onClick={() => navigate('/signup')}>Sign up</a>
      </p>
    </>
  );
}
