import { Paths } from './paths.ts';
import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainWrapper } from '@/pages/MainWrapper/MainWrapper.tsx';
import { HomePage } from '@/pages/HomePage/HomePage.tsx';
import { JogsPage } from '@/pages/JogsPage/JogsPage.tsx';
import { InfoPage } from '@/pages/InfoPage/InfoPage.tsx';
import { ContactUsPage } from '@/pages/ContactUsPage/ContactUsPage.tsx';

export const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainWrapper />}>
          <Route path={Paths.home} element={<HomePage />} />
          <Route path={Paths.jogs} element={<JogsPage />} />
          <Route path={Paths.info} element={<InfoPage />} />
          <Route path={Paths.contactUs} element={<ContactUsPage />} />

          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
