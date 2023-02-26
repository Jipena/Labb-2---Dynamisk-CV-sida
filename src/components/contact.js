import React from "react"
import { Container } from "react-bootstrap"

export const ContactMeComponent = () => {
    return (
        <div>
            <section className="main-section">
                <section>
                    <h2>Mina Kontaktuppgifter</h2>
                    <br></br>
                    <p className="main-text">Telefonnummer: 070 111 1234</p>
                    <p className="main-text">E-post: jesper.andersson@edu.edugrade.se</p>
                    <p className="main-text">Adress: Stengatan 1</p>
                    <p className="main-text">Postnummer: 82461 Forsa</p>
                </section>
                <figure>
                    <img className="pencil-picture" src="images/kontakt.jpg" alt="En Bild Av En Penna"></img>
                </figure>
            </section>
        </div>
    )
}