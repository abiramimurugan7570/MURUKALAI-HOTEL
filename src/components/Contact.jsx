function Contact() {
  return (
    <section id="contact">
      <p>GET IN TOUCH</p>

      <h2>Visit Murukalai Hotel</h2>

      <p>
        We would love to welcome you. Visit us and enjoy
        delicious South Indian food with your family and friends.
      </p>

      <div className="contact-details">

        <div className="contact-item">
  <h3>📍 Location</h3>

  <p>
    <a
      href="https://www.google.com/maps/search/?api=1&query=11.664496%2C78.187578"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-link"
    >
      6/471, Krishnan Pudur,
      Koyya Thoppu, Ammapet,
      Salem - 636003
    </a>
  </p>
</div>

        <div className="contact-item">
  <h3>📞 Phone</h3>

  <p>
    <a
      href="tel:+918667447570"
      className="contact-link"
    >
      +91 8667447570
    </a>
  </p>
</div>

        <div className="contact-item">
          <h3>📧 Email</h3>
          <p>
            <a
              href="mailto:murukalaihotel@gmail.com"
              className="contact-link"
            >
              murukalaihotel@gmail.com
            </a>
          </p>
        </div>

        <div className="contact-item">
          <h3>📸 Instagram</h3>
          <p>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              murukalai_hotel
            </a>
          </p>
        </div>

      </div>

      

<div className="opening-hours">
  <h3>🕒 Opening Hours</h3>
  <p>Monday - Sunday: 7:00 AM - 10:30 PM</p>
</div>

<a
  href="https://www.google.com/maps/search/?api=1&query=11.664496%2C78.187578"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-button"
>
  Get Directions
</a>
      <a
  href="tel:+918667447570"
  className="contact-button"
>
  Call Us
</a>

<a
  href="https://wa.me/918667447570"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-button whatsapp-button"
>
  WhatsApp
</a>

    </section>
  );
}

export default Contact;
