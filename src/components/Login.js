import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Login = () => {
  const [emailfocused,setEmailfocused] = useState(false);
  const [pwfocused,setPwfocused] = useState(false);
  const [emailerror,setEmailError] = useState(false);
  const [pwerror,setPwError] = useState(false);
  const [isCode,setIsCode] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault();
  }
  return (
    <div className="login">
      <div className="login-popup">
        {/*개선사항 : 로그인 화면 끄기, 홈화면 돌아가기 */}
        <p className='close' onClick={()=>{navigate('/')}}>X</p>
        <h2>Sign In</h2>
        {/**login-form */}
        <form onSubmit={handleSubmit}>
          {/**email-input */}
          <label 
            className={ `${emailfocused ? 'focused' : '' } ${emailerror ? 'error' : ''}`}
          >
            <span>Email or mobile number</span>
            <input 
                  type="text"
                  className={emailfocused ? 'focused' : ''} 
                  onFocus={()=>{
                    setEmailfocused(true);
                    setEmailError(false);
                  }}
                  onBlur={(e)=>{
                    if(e.target.value === ''){
                      setEmailfocused(false);
                      setEmailError(true);
                    }
                  }}/>
          </label>
          {
              emailerror && <p className="email-errortxt">ⓧ Please enter a valid email or phone number.</p>
            }
          {/**password-input */}
          {
            !isCode &&
            (<label className={`${pwfocused ? 'focused' : ''} ${pwerror ? 'error' : ''}`}>
              <span>Password</span>
              <input 
                    type="password"
                    className={pwfocused ? 'focused' : ''} 
                    onFocus={()=>{
                      setPwfocused(true);
                      setPwError(false);
                    }}
                    onBlur={(e)=>{
                      if(e.target.value === ''){
                        setPwfocused(false);
                        setPwError(true);
                      }
                    }} />
            </label>)
          }
          {
              pwerror && <p className="pw-errortxt">ⓧ Your password must contain between 4 and 60 characters.</p>
          }
          {/**button */}
          {
            isCode && <p>Message and data rates may apply</p>
          }
          <button type="submit">
            {isCode ? 'Send Sign-In Code':'Sign In'}</button>
          <p>OR</p>
          <button onClick={()=>{
            setIsCode(!isCode);
            setEmailError(false);
            setPwError(false);
          }}>
            {isCode === true ? 'Use Password' : 'Use a Sign-In Code'}
          </button>
          <a href="#" className="forgot-pw">
            {isCode ? 'Forgot Email or Phone Number?':'Forgot Password?'}</a>
        </form>
        {/**login-footer */}
        <div className="login-footer">
          <label>
            <input type='checkbox'></input>
            <span>Remember me</span>
          </label>
          <p>New to Netflix? <a href="#">Sign up now.</a></p>
          <p>This page is protected byGoogle reCAPTCHA to ensure you'renot a bot. <a href="#">Learn more</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;