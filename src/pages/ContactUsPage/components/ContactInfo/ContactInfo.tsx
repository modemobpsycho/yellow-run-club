import './ContactInfo.scss';

export function ContactInfo() {
  return (
    <div className="contact-info-wrapper">
      <h2 className="contact-info-title">CONTACT US</h2>
      <div className="contact-details">
        <p>
          <strong>Email:</strong> example@example.com
        </p>
        <p>
          <strong>Phone:</strong> 123-456-7890
        </p>
        <p>
          <strong>Address:</strong> 123 Main Street, City, Country
        </p>
      </div>
    </div>
  );
}
