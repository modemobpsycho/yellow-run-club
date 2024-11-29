import './InfoText.scss';
import { infoAboutPart1, infoAboutPart2 } from './infoAbout';

export function InfoText() {
  return (
    <div className="info-text-wrapper">
      <p className="info-title">INFO</p>
      <div className="info-text">
        <div>{infoAboutPart1}</div>
        <div>{infoAboutPart2}</div>
      </div>
    </div>
  );
}
