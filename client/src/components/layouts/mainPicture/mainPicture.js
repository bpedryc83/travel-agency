import styles from './mainPicture.module.scss';

const MainPicture = () => <div className={`${styles.divImage}`}>
    <img className={`${styles.image}`} src="/IMG_20210726_102732.jpg" alt="MountainQuest"></img>
  </div>

export default MainPicture;