import React from "react"
import { Container } from "react-bootstrap"

export const PersonalLetterComponent = () => {
    return (
        <div>
            <section className="main-section">
                <section>
                    <h2>Personligt Brev</h2>
                    <br></br>
                    <p className="main-text">Mitt namn är Jesper Andersson och jag är född år 1991. 
                        Jag bor i ett hus i en liten by som heter Forsa som ligger ungefär en mil utanför Hudiksvall.</p>
                    <p className="main-text">Jag började år 2007 elprogrammet på bromangymnasiet i Hudiksvall där jag spenderade ett år, 
                        men då det inte kändes rätt för mig så sökte jag istället in till byggprogrammet.
                        Under åren 2008-2011 gick jag byggprogrammet där jag senare under utbildningen valde att inrikta mig som målare, 
                        vilket jag senare också gick ut som.</p>
                    <p className="main-text">Efter gymnasiet har jag arbetat som målare åt företaget Måleritjänst i Hudiksvall med omnejd
                        där vi höll på med invändig och utvändig målning.
                        Senare har jag också varit maskinoperatör på en fabrik som heter Aven i Forsa som tillverkar träemballage.</p>
                    <p className="main-text">På min fritid tycker jag om att hålla på med datorer och spendera tid med kompisar och familj. 
                        Jag tycker även om friluftslivet då jag ofta är ute och vandrar med närstående. 
                        Mitt största fritidsintresse är dock sport, där jag håller ett extra öga på fotboll runt om i världen.</p>
                    <p className="main-text">För närvarande så studerar jag och utbildar mig inom systemutveckling vilket jag tycker är väldigt roligt.</p>
                    <br></br>
                    <p className="main-text">Med vänlig hälsning</p>
                    <p className="main-text">Jesper Andersson</p>
                    <br></br>
                </section>
                <figure className="side-section">
                    <img className="letter-picture" src="images/brev.jpg" alt="En Bild Av Ett Brev"></img>
                </figure>
            </section>
        </div>
    )
}