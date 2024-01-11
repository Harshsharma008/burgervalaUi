import React from "react";
import { AiFillInstagram, AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";
import "../../styles/footer.scss"
const Footer = () => {
  return (
    <footer>
      <div>
        <h2>MBA Burger Wala</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br /> 

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @mbaburgerwala</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="https://twitter.com/HARSHSH01012002">
          <AiFillTwitterCircle />
        </a>
        <a href="https://instagram.com/harsh.sharma04">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/harshsharma008">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;