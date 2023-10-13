import {Col} from "react-bootstrap";
import {startTransition, useState} from "react"
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";

export const ProjectCard = ({title, description1, description2, imgUrl, pageUrl}) => {
    const [cookies, setCookie] = useCookies(["user"]);
    const users = cookies.user;
    const movePage = useNavigate();
    const url = pageUrl;


    const moveL = () => {
        startTransition(() => {
            movePage("/SimpleInfo");
        });
    }
     const moveR = () => {
        movePage(url);
    }
    return (
        <Col size={12} sm={6} md={4}>
            {!users ?
                <div className="proj-imgbx">
                    <img src={imgUrl} alt="매장 사진"/>
                    <div className="proj-txtx" onClick={moveL}>
                        <h4>{title}</h4>
                        <span>{description1}</span> <br></br>
                        <span>{description2}</span>
                    </div>
                </div>
                : <div className="proj-imgbx">
                    <img src={imgUrl} alt="매장 사진"/>
                    <div className="proj-txtx" onClick={moveR}>
                        <h4>{title}</h4>
                        <span>{description1}</span> <br></br>
                        <span>{description2}</span>
                    </div>
                </div>}
        </Col>
    );
};
