
const Header = () => {
  return (
    <header>
      <nav>
        <a>
          <img src='./images/Netflix_Logo.png' alt='logo'></img>
        </a>
        <div>
          <select>
            <option>English</option>
            <option>한국어</option>
          </select>
          <button>Sign-In</button>
        </div>
      </nav>
      <div className="header-contents">
        <h2>Unlimited movies,<br/>TV shows, and more</h2>
        <h4>Start at KRW 5,500. Cancel anytime.</h4>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className='email-box'>
          <input type='email'></input>
          <button>Get Started 〉</button>
        </div>
      </div>
    </header>
  );
};

export default Header;