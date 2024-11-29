import { BearFaceSVGComponent } from '@/common/icons/BearFaceSVG/BearFaceSVG';

import './AuthPage.scss';

export function AuthPage({ children }: { children: React.ReactNode }) {
  return (
    <div className="auth-container">
      <div className="center-window-wrapper">
        <BearFaceSVGComponent />
        {children}
      </div>
    </div>
  );
}
