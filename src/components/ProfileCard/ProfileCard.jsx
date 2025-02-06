import avatar from "../../assets/images/avatar-jessica.jpeg";

import styles from "./ProfileCard.module.css";

function ProfileCard({
  children,
  name = "Jessica Randall",
  location = "London, United Kingdom",
  description = "Front-end developer and avid reader.",
}) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <img className={styles.avatar} src={avatar} alt={`${name}'s avatar`} />
        <div className={styles.infoContainer}>
          <p className={styles.name}>{name}</p>
          <p className={styles.location}>{location}</p>
        </div>
        <p className={styles.description}>&quot;{description}&quot;</p>
        <div className={styles.linkContainer}>{children}</div>
      </div>
    </div>
  );
}

export default ProfileCard;
