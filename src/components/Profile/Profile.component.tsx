import Avatar from "./components/Avatar/Avatar.component"
import Bio from "./components/Bio/Bio.component"
import Stats from "./components/Stats/Stats.component";
import Socials from "./components/Socials/Socials.component";
import styles from './Profile.module.scss';
import UserData from "interface/UserData.interface";

const Profile: React.FC<{ userData: UserData | null }> = ({ userData }) => {
  return !!userData && userData !== null ? (
    <div className={styles.container}>
      <div className={styles.avatarContainer}>
        <Avatar avatar_url={userData.avatar_url} />
      </div>
      <div className={styles.infoContainer}>
        <Bio
          name={userData.name}
          login={userData.login}
          url={userData.url}
          bio={userData.bio}
          created_at={userData.created_at}
        />
        <Stats
          followers={userData.followers}
          following={userData.following}
          public_repos={userData.public_repos}
        />
        <Socials
          twitter_username={userData.twitter_username}
          location={userData.location}
          blog={userData.blog}
          company={userData.company}
        />
      </div>
    </div>
  ) : null;
}
export default Profile;
