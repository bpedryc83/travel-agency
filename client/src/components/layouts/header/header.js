import { Container} from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import styles from './header.module.scss';

const Header = () => {
  const logged = false;

  const isScreenSmall = useMediaQuery({ maxWidth: 575 });

  return (
    <Container className={`d-flex align-items-center`}>
      <div className={`row mx-auto ${styles.headerRow}`}>
        <div className={`col-12 px-0 ${styles.headerColumn}`}>
          <div className="row">
            
          {isScreenSmall && 
              <div className="col-12 d-flex align-items-center justify-content-center">
                <div className={`${styles.company}`}><span>M</span>OUNTAIN<span>Q</span>UEST</div>
              </div>
            } 

            <div className="col-4">
              <Navbar.Brand className="d-flex align-items-center">
                <Nav.Link as={Link} to="/" className={`text-dark px-0 ${styles.textMenu}`}>Homepage</Nav.Link>
              </Navbar.Brand>
            </div>
            
            {!isScreenSmall && 
              <div className="col-4 d-flex align-items-center justify-content-center">
                <div className={`${styles.company}`}><span>M</span>OUNTAIN<span>Q</span>UEST</div>
              </div>
            } 
            
            <div className={"col-8 col-sm-4 d-flex align-items-center justify-content-end"}>                
              <span className={`me-4 ${styles.rightSide} ${styles.textMenu}`}>
                  { !logged && <Nav.Link as={Link} to="/login" className={`${styles.textMenu} ${styles.textBackground}`}>Log in</Nav.Link>}
                  { logged && <Nav.Link as={Link} to="/login" className={`text-dark px-0 ${styles.textMenu}`}>Your cart</Nav.Link>}
              </span>
            
              <span className={`${styles.rightSide} ${styles.textMenu}`}>
                  { !logged && <Nav.Link as={Link} to="/register" className={`text-dark px-0 ${styles.textMenu}`}>Register</Nav.Link>}
                  { logged && <Nav.Link as={Link} to="/register" className={`text-dark px-0 ${styles.textMenu}`}>Log out</Nav.Link>}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Header;