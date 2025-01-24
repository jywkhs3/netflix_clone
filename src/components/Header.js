import { useNavigate } from "react-router-dom";
import Membership from "./Membership";
// import netflix from './images/Netflix_Logo.png';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <nav>
        <a href="#">
        <img src={`${process.env.PUBLIC_URL}/images/Netflix_Logo_PMS.png`} alt="logo" />
        </a>
        <div className="select">
          <select>
            <option>English</option>
            <option>한국어</option>
          </select>
          <button onClick={()=>{
            //로그인 페이지로 이동 : useNavigate hook 활용
            navigate('/login');
          }}>Sign-In</button>
        </div>
      </nav>
      <div className="header-contents">
        <h2>Unlimited movies,<br/>TV shows, and more</h2>
        <h4>Start at KRW 5,500. Cancel anytime.</h4>
        <Membership/>
      </div>
    </header>
  );
};

export default Header;