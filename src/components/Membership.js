import { useState } from "react";
import { VscChevronRight } from "react-icons/vsc";

const Membership = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="membership">
      <p>Ready to watch? Enter your email to create or restart your membership.</p>
      <div className={`email-box ${isFocused === true ? 'focused':''}`}>
        <label>Email address</label>
        <input
          className={`${isFocused === true ? 'focused':''}`}
          type='email'
          onFocus={()=>{setIsFocused(true);}}
          onBlur={(e)=>{
            if(e.target.value === '') setIsFocused(false);
          }}
        />
        <button>Get Started<span><VscChevronRight /></span></button>
      </div>
    </div>
  );
};

export default Membership;
