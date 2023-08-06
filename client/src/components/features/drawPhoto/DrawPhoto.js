import styles from './DrawPhoto.module.scss';
import { IMGS_URL } from '../../../config';

const DrawPhoto = props => <div className={`${styles.photos}`}>
    {props.photosToDraw.map(photoToDraw => 
      <div className={`${styles.divImage}`} key={photoToDraw.photo}>
        <img className={`${styles.image}`} src={IMGS_URL + photoToDraw.photo} alt={photoToDraw.photo}></img>
    </div>
    )}
  </div>


export default DrawPhoto;