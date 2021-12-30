import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="social-outlets">
      <ul>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/max-mezalon/"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.github.com/jmezalon"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
