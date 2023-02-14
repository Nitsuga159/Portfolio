import './Contact.css';
import linkedIin from '../../images/linkedin-logo.svg'
import gmail from '../../images/gmail-logo.svg'
import whatsapp from '../../images/whatsapp-logo.svg'
import github from '../../images/github-logo.svg'

export default function Contact({ scrollContact }: { scrollContact: boolean }) {
  return (
    <footer id="contact">
      <a
        className={`link-contact-container ${scrollContact ? 'appear-links' : ''}`}
        href="https://www.linkedin.com/in/agust%C3%ADn-romero-33919b24b/"
        target="_blank"
        rel="noopeneer">
        <img className="link-contact" src={linkedIin} alt="linkedIn" />
      </a>
      <a
        className={`link-contact-container ${scrollContact ? 'appear-links' : ''}`}
        href="https://mail.google.com/mail/u/0/?fs=1&to=agusromero0815@gmail.com&tf=cm"
        target="_blank"
      >
        <img className="link-contact" src={gmail} alt="gmail" />
      </a>
      <a
        className={`link-contact-container ${scrollContact ? 'appear-links' : ''}`}
        href="https://walink.co/ab523e"
        target="_blank"
        rel="noopeneer">
        <img className="link-contact" src={whatsapp} alt="whatsapp" />
      </a>
      <a
        className={`link-contact-container ${scrollContact ? 'appear-links' : ''}`}
        href="https://github.com/Nitsuga159"
        target="_blank"
        rel="noopeneer">
        <img className="link-contact" src={github} alt="github" />
      </a>
    </footer>
  )
}