import React from "react";
import { Row, Col } from "react-bootstrap";

const TeamIntro = ({ photo, name, birthdate, git, position }) => {
    return (
            <Col md={6}>
                <div className="person-info-container">
                    <img src={photo} alt={`${name}'s photo`} className="person-photo" />
                    <div className="person-details">
                        <h2 className="person-name">{name}</h2>
                        <p className="person-birthdate">Position: {position}</p>
                        <p className="person-birthdate">Date of Birth: {birthdate}</p>
                        <p className="person-birthdate">GitHub: {git}</p>
                    </div>
                </div>
            </Col>
    );
};

export default TeamIntro;
