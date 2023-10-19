import {useState} from "react";
import {Container, Row, Col} from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import {Login} from "../components/Login";
import {Join} from "../components/Join";
import {useCookies} from "react-cookie";
import {Link, Outlet} from "react-router-dom";
import TeamIntro from "./TeamIntro";
import Son from "../assets/img/TeamA/son.png"
import Yoon from "../assets/img/TeamA/yoon.png"
import Zoo from "../assets/img/TeamA/zoo.png"
import {ProjectCard} from "./ProjectCard";


const Contact = () => {
    const [cookies, setCookie] = useCookies(["user"]);
    const users = cookies.user;

    const persons = [
        {
            name: "Son Jino",
            birthdate: "August 13, 1999",
            photo: Son,
            git: "https://github.com/onjix",
            position: "Team Leader"
        }, {
            name: "Yoon Hyungjun",
            birthdate: "Jun 1, 1998",
            photo: Yoon,
            git: "https://github.com/yoon",
            position: "FE/BE Developer"
        },
        {
            name: "Park Zoosung",
            birthdate: "October 31, 1998",
            photo: Zoo,
            git: "https://github.com/zoodung",
            position: "App Developer, Designer"
        }];

    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({isVisible}) => (
                                <img
                                    className={
                                        isVisible ? "animate__animated animate__zoomIn" : ""
                                    }
                                    src={contactImg}
                                    alt="Contact Us"
                                />
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({isVisible}) => (
                                <div
                                    className={
                                        isVisible ? "animate__animated animate__fadeIn" : ""
                                    }
                                >
                                    {!users ? (
                                        <Login/>
                                    ) : (
                                        <Row>
                                            {persons.map((project, index) => {
                                                return <TeamIntro key={index} {...project} />;
                                            })}
                                        </Row>
                                    )}
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
export default Contact
