import Container from 'react-bootstrap/Container';
import { ReactNode } from 'react';
import { Navbar } from 'react-bootstrap';
import logo from '../assets/img/logo_1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
 import ImageButton from '../components/ImageButton';
import { useState, useEffect } from 'react';
 import MenuPopup from '../components/MenuPopup';
import { useLocation, useNavigate } from 'react-router';
 import {menuItems} from '../data/home';

export type MasterLayoutProps = {
  children: ReactNode;
};

function MasterLayout({ children }: MasterLayoutProps) {
  const [isShowPopup, setShowPopup] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    const isLogin = location.state?.isLogin ?? false;
    setLoginStatus(isLogin);
  }, []);

  const handleMenuClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleLogout = () => {
    setLoginStatus(false);
    setShowPopup(false);
    navigate('/');
  };

  const handleMenuItemClick = (item: string) => {
    console.log(item);
  };

  return (
    <Container className="">
      <header>
        <Navbar className="bg-header">
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                width="100"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <ImageButton
                onImageClick={handleMenuClick}
                class="border-0 bg-transparent"
              >
                <FontAwesomeIcon
                  icon={faBars}
                  className="fs-1 text-secondary w-75 text-white"
                />
              </ImageButton>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      {children}
      <footer className="footer-copyright text-center py-3 bg-footer text-white">
        Copyright(C) ApolloSystem co.,ltd. All Rights Reserved.
      </footer>

      {isShowPopup && !loginStatus && (
        <MenuPopup isShow={isShowPopup} onHidePopup={handleClosePopup}>
          <div className="popup-menu-item" onClick={handleClosePopup}>ID</div>
          <div className="popup-menu-item" onClick={handleClosePopup}>パスワード</div>
          <div className="popup-menu-item" onClick={handleClosePopup}>［ログイン］</div>
        </MenuPopup>
      )}

      {isShowPopup && loginStatus && (
        <MenuPopup
          isShow={isShowPopup}
          onHidePopup={handleClosePopup}
          title="メニュー"
          class="h-50"
        >
          <div className="d-flex flex-column justify-content-between h-100">
            <div className="bg-white mx-2 my-2 px-1">
              {menuItems.map((item: string, index: number) => (
                <div
                  className="popup-menu-item-border"
                  key={index}
                  onClick={() => handleMenuItemClick(item)}
                >
                  {item}
                </div>
              ))}
            </div>
            <div
              className="popup-menu-item-border mx-2"
              onClick={handleLogout}
            >
              ［ログアウト］
            </div>
          </div>
        </MenuPopup>
      )}
    </Container>
  );
}

export default MasterLayout;
