import s from "./Footer.module.scss";

export const Footer = () => (
  <footer className={s.footer}>
    <nav className={`${s.nav} container`}>
      <a
        className={s.nav_cv}
        href="https://docs.google.com/document/d/1n3rnWhHoRtyO-oR5rpCQYIPHUpd8VFex6WYzCQZ1rmc"
        target="_blank"
      >
        <span>Resume</span>
      </a>
      <a href="mailto:nina.frontend@gmail.com" target="_blank">
        <span className={s.nav_text}>Email</span>
        <img className={s.nav_icon} src="/icons/email.svg" alt="send email" />
      </a>
      <a href="https://github.com/PetrovaNina" target="_blank">
        <span className={s.nav_text}>GitHub</span>
        <img className={s.nav_icon} src="/icons/github.svg" alt="gitHub" />
      </a>
      <a
        href="https://www.linkedin.com/in/nina-petrova-frontend"
        target="_blank"
      >
        <span className={s.nav_text}>Linkedin</span>
        <img className={s.nav_icon} src="/icons/linkedin.svg" alt="linkedin" />
      </a>
      <a href="https://t.me/NinaAPetrova" target="_blank">
        <span className={s.nav_text}>Telegram</span>
        <img
          className={s.nav_icon}
          src="/icons/telegram.png"
          alt="telegram"
          style={{ padding: "2.5px" }}
        />
      </a>
    </nav>
  </footer>
);
