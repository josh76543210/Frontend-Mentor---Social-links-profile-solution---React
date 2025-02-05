import avatar from "../../assets/images/avatar-jessica.jpeg";

import styles from "./ProfileCard.module.css";

function ProfileCard({
  children,
  name = "Jessica Randall",
  location = "London, United Kingdom",
  description = "Front-end developer and avid reader.",
}) {
  return (
    <div>
      <img src={avatar} alt={`${name}'s avatar`} />
      <p>{name}</p>
      <p>{location}</p>
      <p>{description}</p>
      <div>{children}</div>
    </div>
  );
}

export default ProfileCard;
