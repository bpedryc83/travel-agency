import { Container } from "react-bootstrap";
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <Container className={`d-flex align-items-center`}>
      <div className={`row mx-auto ${styles.footerRow}`}>
        <div className={`col-12 px-0 ${styles.footerColumn} ${styles.textFooter}`}>
          Copyright &#169; MountainQuest 2023
        </div>
      </div>
    </Container>
  )
}

export default Footer;