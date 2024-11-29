import { ActiveFilterSVG } from '@/common/icons/ActiveFilterSVG';
import { BurgerSVG } from '@/common/icons/BurgerSVG';
import { FilterSVG } from '@/common/icons/FilterSVG';
import { Grid2 } from '@mui/material';

interface DesktopMenuProps {
  closeAll: () => void;
  isActive: (path: string) => string;
  navigate: (path: string) => void;
  logout: () => void;
  openFilter: boolean;
  setOpenFilter: (value: boolean) => void;
  isShowBurger: boolean;
  setIsShowBurger: (value: boolean) => void;
  token?: string;
}

export function DesktopMenu({
  closeAll,
  isActive,
  navigate,
  logout,
  openFilter,
  isShowBurger,
  setOpenFilter,
  setIsShowBurger,
  token
}: DesktopMenuProps) {
  return (
    <>
      {token ? (
        <Grid2 className="navbar-buttons" container>
          <Grid2>
            <a
              color="inherit"
              onClick={() => setOpenFilter(!openFilter)}
              className={'filter-button ' + (isActive('/jogs') ? '' : 'hide')}
            >
              {openFilter ? <ActiveFilterSVG /> : <FilterSVG />}
            </a>
          </Grid2>
          <Grid2>
            <a
              className={isActive('/jogs')}
              color="inherit"
              onClick={() => {
                navigate('/jogs');
                closeAll();
              }}
            >
              JOGS
            </a>
          </Grid2>
          <Grid2>
            <a
              className={isActive('/info')}
              color="inherit"
              onClick={() => {
                navigate('/info');
                closeAll();
              }}
            >
              INFO
            </a>
          </Grid2>
          <Grid2>
            <a
              className={isActive('/contact-us')}
              color="inherit"
              onClick={() => {
                navigate('/contact-us');
                closeAll();
              }}
            >
              CONTACT US
            </a>
          </Grid2>
          <Grid2>
            <a
              color="inherit"
              onClick={() => {
                logout();
                closeAll();
              }}
            >
              LOGOUT
            </a>
          </Grid2>
          <a className="navbar-burger" data-testid="navbar-burger" onClick={() => setIsShowBurger(!isShowBurger)}>
            <BurgerSVG />
          </a>
        </Grid2>
      ) : (
        <Grid2 className="navbar-buttons-auth" container spacing={2}>
          <Grid2>
            <a className={isActive('/signup')} color="inherit" onClick={() => navigate('/signup')}>
              SIGNUP
            </a>
          </Grid2>
          <Grid2>
            <a className={isActive('/login')} color="inherit" onClick={() => navigate('/login')}>
              LOGIN
            </a>
          </Grid2>
        </Grid2>
      )}
    </>
  );
}
