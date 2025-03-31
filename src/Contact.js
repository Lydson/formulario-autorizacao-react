import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const password = "lydson";
  const [authorized, setAuthorized] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const enteredPassword = e.target.querySelector(
      'input[type="password"]'
    ).value;
    const auth = enteredPassword === password;
    setAuthorized(auth);
  }

  const login = (
    <form action="#" onSubmit={handleSubmit}>
      <input type="password" placeholder="Password" />
      <input type="submit" />
    </form>
  );

  const contactInfo = (
    <ul>
      <li>
        <a
          href="https://github.com/Lydson"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/lydson"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </a>
      </li>
    </ul>
  );

  return (
    <div id="authorization">
      <h1>{authorized ? "Contato" : "Insira a senha"}</h1>
      {authorized ? contactInfo : login}
    </div>
  );
}

export default Contact;
