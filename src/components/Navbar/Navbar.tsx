import { AppBar, Backdrop } from '@mui/material';
import { LogoSVGComponent } from '@/common/icons/LogoSVG/LogoSVG';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useUserState } from '@/common/hooks/useStoreState';
import { useActions } from '@/common/hooks/useActions';
import { useEffect, useState } from 'react';
import { MobileMenu } from './components/MobileMenu';
import { DesktopMenu } from './components/DesktopMenu';
import './Navbar.scss';

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { token } = useUserState();
  const { logout } = useActions();
  const { setDateTo, setDateFrom } = useActions();
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [isShowBurger, setIsShowBurger] = useState<boolean>(false);
  const [dates, setDates] = useState<{ dateFrom: string; dateTo: string }>({ dateFrom: '', dateTo: '' });

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDates((prevDates) => ({ ...prevDates, [name]: value }));
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  const closeAll = () => {
    setOpenFilter(false);
    setIsShowBurger(false);
  };

  useEffect(() => {
    const delay = 1000;

    const timer = setTimeout(() => {
      setDateTo(dates.dateTo);
      setDateFrom(dates.dateFrom);
    }, delay);

    return () => clearTimeout(timer);
  }, [dates]);

  useEffect(() => {
    if (!token) navigate('/');
  }, [token]);

  return (
    <>
      <AppBar position="static" className="navbar">
        <div className="navbar-wrapper">
          <LogoSVGComponent className="white" />
          <Backdrop
            sx={{ zIndex: 950 }}
            open={isShowBurger}
            onClick={() => {
              setIsShowBurger(false);
            }}
          />
          <div
            className="navbar-burger-menu"
            style={{
              transform: isShowBurger ? 'translateX(0)' : 'translateX(+100%)'
            }}
          >
            <MobileMenu
              closeAll={closeAll}
              isActive={isActive}
              navigate={navigate}
              logout={logout}
              setIsShowBurger={setIsShowBurger}
            />
          </div>
          <DesktopMenu
            closeAll={closeAll}
            isActive={isActive}
            navigate={navigate}
            logout={logout}
            openFilter={openFilter}
            isShowBurger={isShowBurger}
            setOpenFilter={setOpenFilter}
            setIsShowBurger={setIsShowBurger}
            token={token}
          />
        </div>
      </AppBar>
      <div className={'filter-panel ' + (openFilter ? 'show' : '')}>
        <div>
          <label>Date from</label>
          <input type="date" name="dateFrom" id="dateFrom" maxLength={10} onChange={handleDateChange} />
        </div>
        <div>
          <label>Date to</label>
          <input type="date" name="dateTo" id="dateTo" maxLength={10} onChange={handleDateChange} />
        </div>
      </div>
    </>
  );
}
