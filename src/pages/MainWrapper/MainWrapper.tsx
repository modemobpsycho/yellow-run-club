import { Navbar } from '@/components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

export function MainWrapper() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
