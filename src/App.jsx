import "./global.css";
import "./reset.css";

import ProfileCard from "./components/ProfileCard/ProfileCard";
import ProfileLink from "./components/ProfileLink/ProfileLink";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <ProfileCard
        name="Jessica Randall"
        location="London, United Kingdom"
        description="Front-end developer and avid reader."
      >
        <ProfileLink text="GitHub" link="https://github.com/" />
        <ProfileLink
          text="Frontend Mentor"
          link="https://www.frontendmentor.io/"
        />
        <ProfileLink text="LinkedIn" link="https://www.linkedin.com/" />
        <ProfileLink text="Twitter" link="https://x.com/" />
        <ProfileLink text="Instagram" link="https://www.instagram.com/" />
      </ProfileCard>
      <Footer />
    </>
  );
}

export default App;
