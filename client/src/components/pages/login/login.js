import styles from './Login.module.scss';
import { Container } from 'react-bootstrap';

const Login = () => <Container className={`d-block pb-3`}>
  <div className={`${styles.mainDiv}`}>
    <div className={`${styles.information}`}>
      <span className={`${styles.text}`}>This site is under construction. Please come back later.</span>
    </div>
  </div>
</Container>

export default Login;