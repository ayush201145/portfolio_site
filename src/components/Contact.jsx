import SectionLabel from './SectionLabel';
import './Contact.css';

const LINKS = [
  { label: 'GitHub',   href: 'https://github.com/ayush201145' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/ayush-nitp-20jk45' },
  { label: 'Phone',    href: 'tel:+916207885970' },
];

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <SectionLabel num="04." title="Contact" />

      <p className="contact__sub">
        Open to internships, full-time roles, project collaborations, and
        interesting conversations. Let's connect.
      </p>

      <a href="mailto:ayushk.ug23.cs@nitp.ac.in" className="contact__email-btn">
        <button className="btn btn--solid contact__btn">
          ayushk.ug23.cs@nitp.ac.in
        </button>
      </a>

      <div className="contact__socials">
        {LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__social-link"
          >
            {label} ↗
          </a>
        ))}
      </div>
    </section>
  );
}
