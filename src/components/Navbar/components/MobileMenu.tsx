import { CancelSVG } from '@/common/icons/CancelSVG';
import { LogoSVGComponent } from '@/common/icons/LogoSVG/LogoSVG';

interface MobileMenuProps {
  closeAll: () => void;
  isActive: (path: string) => string;
  navigate: (path: string) => void;
  logout: () => void;
  setIsShowBurger: (value: boolean) => void;
}

export function MobileMenu({ closeAll, isActive, navigate, logout, setIsShowBurger }: MobileMenuProps) {
  return (
    <>
      <LogoSVGComponent className="fixed green" />
      <a color="inherit" className="navbar-burger-menu-close" onClick={() => setIsShowBurger(false)}>
        <CancelSVG color="black" />
      </a>
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
      <a
        color="inherit"
        onClick={() => {
          logout();
          closeAll();
        }}
      >
        LOGOUT
      </a>
    </>
  );
}
