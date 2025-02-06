import styles from "./ProfileLink.module.css";

function ProfileLink({ text = "GitHub", link = "https://github.com/" }) {
  return (
    <a className={styles.link} href={link} target="_blank">
      {text}
    </a>
  );
}

export default ProfileLink;
