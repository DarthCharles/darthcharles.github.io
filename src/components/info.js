import React from "react"

import {
  FaGithub as Github,
  FaLinkedin as LinkedIn,
  FaEnvelope as Mail,
} from "react-icons/fa"

export default function info() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3" style={{ color: "#8e44ad" }}>
        <span style={{ color: "white" }}>Hello, I'm </span>
        Carlos.
      </div>
      <div className="h1 code mt-5 mb-3">
        <span style={{ color: "#CC7832" }}>def {<span style={{ color: "#FFC66D" }}>about</span>}
        </span>
      </div>
      <div className="text-muted mx-5 my-4 h3 text-justify info">
        A Passionate software engineer committed to delivering high-quality solutions with the best performance. I like
        to learn new things and always looking for new technologies to add to my skill stack. I’m a self-taught person
        with a strong sense of ownership, communication and leadership skills.
        <p className="mt-3"> Send me a message, I've got candy. 😉</p>
      </div>
      <div className="h1 code mt-2 mb-3" style={{ color: "#CC7832" }}>{"end"}</div>
      <div className="h1 mt-5">
        <a className="mr-5 icon" href="mailto://carlos.darth@gmail.com">
          <Mail/>
        </a>
        <a
          className="mr-5 icon"
          href="https://www.linkedin.com/in/carlos-contreras-hernandez/"
        >
          <LinkedIn/>
        </a>
        <a className="mr-5 icon" href="https://github.com/DarthCharles">
          <Github/>
        </a>
      </div>
    </div>
  )
}
