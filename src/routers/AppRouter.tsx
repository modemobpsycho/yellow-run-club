import { FC } from 'react';
import { Paths } from './paths.ts';
import { MainWrapper } from '@/pages/MainWrapper';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthPage } from '@/pages/AuthPage';
import { JogsPage } from '@/pages/JogsPage';
import { InfoPage } from '@/pages/InfoPage';
import { ContactUsPage } from '@/pages/ContactUsPage';
import { LoginForm, SignupForm } from '@/pages/AuthPage/components';

export const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainWrapper />}>
          <Route path={Paths.home} element={<AuthPage children={<LoginForm />} />} />
          <Route path={Paths.login} element={<AuthPage children={<LoginForm />} />} />
          <Route path={Paths.signup} element={<AuthPage children={<SignupForm />} />} />
          <Route path={Paths.jogs} element={<JogsPage />} />
          <Route path={Paths.info} element={<InfoPage />} />
          <Route path={Paths.contactUs} element={<ContactUsPage />} />

          <Route path="*" element={<AuthPage children={<LoginForm />} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
