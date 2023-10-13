import Navbar1 from "../Nav/NavBar1";
import MypageInfo from "./MypageInfo";
import MypageReservation from "./MypageReservation";

const MyPage = () => {
    return (
        <>
            <Navbar1/>
            <div className="Mypage">
                <MypageReservation />
                <MypageInfo />
            </div>
        </>

    )
}
export default MyPage