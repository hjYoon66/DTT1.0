import {useState, useEffect} from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import {HashLink} from "react-router-hash-link";
import {BrowserRouter as Router, useNavigate} from "react-router-dom";
import "animate.css";
import TrackVisibility from "react-on-screen";
import {useCookies} from "react-cookie";

const NavBar2 = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    const [cookies, setCookie] = useCookies(["user"]);
    const users = cookies.user;
    const movePage = useNavigate();

    const moveContact = () => {
        movePage("/");
    }
    const moveLogin = () => {
        alert("로그인이 필요한 기능입니다.");
    }
    const moveMyPage = () => {
        movePage("/MyPage");
    }

    const logout = () => {
        setCookie("user", "", "/");
    };
    const movePredict = () => {
        movePage("/");
    }

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
                            {!users ? (
                                <Nav.Link
                                    className="navbar-link"
                                    onClick={moveLogin}
                                >
                                    Predict
                                </Nav.Link>
                            ) : (
                                <Nav.Link
                                    className="navbar-link"
                                    onClick={movePredict}
                                >
                                    Predict
                                </Nav.Link>
                            )}
                            {!users ? (
                                <Nav.Link
                                    className="navbar-link"
                                    onClick={moveLogin}
                                >
                                    MyPage
                                </Nav.Link>
                            ) : (
                                <Nav.Link
                                    className="navbar-link"
                                    onClick={moveMyPage}
                                >
                                    MyPage
                                </Nav.Link>
                            )}
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
export default NavBar2;
