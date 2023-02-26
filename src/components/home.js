import React from "react"
import { Container } from "react-bootstrap"

export const HomeComponent = () => {
    return (
        <div>
            <section className="main-section">
                <section>
                    <h2>Välkommen till mitt CV!</h2>
                    <br></br>
                    <p className="main-text">Jag heter Jesper Andersson och är 31 år gammal och bor i Forsa som ligger strax utanför Hudiksvall.</p>
                    <p className="main-text">På fritiden sitter jag mycket vid datorn och spelar med vänner eller så sitter
                        jag vid tvn och kollar på fotboll vilket är mitt största intresse. Mitt favotit lag är 
                        Manchester United som jag har hållt på sedan barnsben.
                        Sitter jag inte vid datorn eller tvn så umgås jag med vänner och familj och är gärna ute och vandrar
                        i bergen här i Forsa.</p>
                    <p className="main-text">Jag håller för närvarande på att utbilda mig inom systemutveckling som
                        jag hoppas på att kunna arbeta inom i framtiden efter studierna.</p>
                </section>
                <figure className="side-section">
                    <img className="profile-picture" src="images/portrait.jpg" alt="En Bild Av Jesper Andersson"></img>
                </figure>
            </section>
        </div>
    )
}