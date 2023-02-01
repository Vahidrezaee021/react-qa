import styled from "./Header.module.css";

function Header() {
  return (
    <div className={styled.headerWrapper}>
      <div className="container">
        <ul>
          <h2>Q&A</h2>
          <li>New Question</li>
          <li>Api</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
