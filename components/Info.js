import React from "react"

export default function Info() {
    return (
        <div className="info-div">
            <img src="./images/fotoGabrielO.jpg" className="info-img" />
            <h2 className="info-name">Gabriel Barbieri</h2>
            <h4 className="info-role">Desenvolvedor frontend</h4>
            <h5 className="info-website">https://github.com/Gabrieluser430</h5>
            <div className="info-buttons">
              <a className="email-button" href="https://prnt.sc/g4O9S7Xu-wfw" target="_blank">
              <img src="./images/email.png" className="email-icon" />
              Email</a>
              <a className="linkedin-button" href="https://www.linkedin.com/in/gabrielobarbieri/" target="_blank">
              <img src="./images/linkedin.png" className="linkedin-icon" />
              LinkedIn</a>  
            </div>
        </div>
    )
}