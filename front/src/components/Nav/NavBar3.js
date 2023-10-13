import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import {BrowserRouter as Router, useNavigate} from "react-router-dom";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useCookies } from "react-cookie";
import MyPage from "../Mypage/MyPage";

const NavBar3 = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [cookies, setCookie] = useCookies(["user"]);
  const users = cookies.user;
  const movePage = useNavigate();

  const logout = () => {
    setCookie("user", "", "/");
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <TrackVisibility>
              <p className="head-title">DTT</p>
            </TrackVisibility>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            </Nav>
            <span className="navbar-text">
              {!users ? (
                <HashLink to="/">
                  <button className="vvd">
                    <span>LOGIN</span>
                  </button>
                </HashLink>
              ) : (
                <HashLink to="/">
                  <button className="vvd">
                    <span onClick={logout}>LOGOUT</span>
                  </button>
                </HashLink>
              )}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar3;
