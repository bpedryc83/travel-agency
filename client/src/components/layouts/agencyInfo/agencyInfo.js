import styles from './agencyInfo.module.scss';

const AgencyInfo = () => {

  return (
    <div className={`d-block ${styles.agencyInfo}`}>
      <div className={`d-flex align-items-center ${styles.community}`}>
        <div className={`${styles.icons}`}>
          <a href="http://facebook.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f center-vertical me-3"></i></a>
          <a href="http://instagram.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram center-vertical me-3"></i></a>
        </div>

        <div className={`${styles.text}`}>
          JOIN OUR AMAZING COMMUNITY<br />
          OF MOUNTAINS FANS
        </div>
      </div>

      <div className={`${styles.getStarted}`}>
        <div className={`${styles.textBackground}`}>GET STARTED</div>
      </div>

      <div className={`${styles.shortAboutUs}`}>
        <div className={`d-flex ${styles.divBackground}`}>
            <div className={`${styles.divPicture}`}>
              <img className={`${styles.image}`} src="/IMG_20210726_102732.jpg" alt="MountainQuest"></img>
            </div>
          <div className={`${styles.text}`}>
            We are the experienced group of the passionates, who fully engaged organize the unusual trips to the wild places.
            {/* <div className="align-items-center pt-2">
              <div className={`ms-5 ${styles.dot}`}></div>
              <div className={`me-5 ${styles.dot}`}></div>
              <div className={`${styles.dot}`}></div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgencyInfo;