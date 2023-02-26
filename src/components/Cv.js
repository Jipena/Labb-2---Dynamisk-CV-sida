import React from "react"
import data from '../data/mycv.json'


export const Cv = () => {

    return (
        <section className="main-section">
            <div className="main-text">
            <h3 className="underrubrik">Yrkeserfarenheter</h3>
            <p className="main-text"><strong>Arbetade inom: </strong></p>
            {data.Yrkeserfarenheter.map((yrke, index) =>(
                <p key={index}>{yrke.Arbetsplats} {yrke.Arbetsuppgift} {yrke.Anställningsår}</p>
            ))}
            </div>
            <div className="main-text">
            <h3 className="underrubrik">Praktik</h3>
            <p className="main-text"><strong>Praktiserade inom: </strong></p>
            {data.Praktik.map((praktik, index) =>(
                <p key={index}>{praktik.Arbetsplats} {praktik.Arbetsuppgift} {praktik.Anställningsår}</p>
            ))}
            </div>
            <div className="main-text">
            <h3 className="underrubrik">Utbildningar</h3>
            <p className="main-text"><strong>Utbildade mig inom: </strong></p>
            {data.Utbildningar.map((Utbildning, index) =>(
                <p key={index}>{Utbildning.Utbildning} {Utbildning.Allmänt} {Utbildning.Utbildningsår}</p>
            ))}
            </div>
            <div className="main-text">
            <h3 className="underrubrik">Datakunskaper</h3>
            <p className="main-text"><strong>Kunskap inom: </strong></p>
            {data.Datakunskaper.map((kunskap, index) =>(
                <p key={index}>{kunskap.kunskap}</p>
            ))}
            </div>
            <figure className="side-section">
                <img className="cv-picture" src="images/cv.jpg" alt="En Bild Av Ett CV"></img>
            </figure>
        </section>
        
        
    )
}


// async function GetJsData(){
//     const response = await fetch (myfile);
//     const data = await response.json();

//     const dk = document.getElementById('dk');
//     const arb = document.getElementById('arb');
//     const pra = document.getElementById('pra');
//     const utb = document.getElementById('utb');

    
//         const Yrkeserfaranheter = data.Yrkeserfarenheter;
//         const Datakunskaper = data.Datakunskaper;
//         const Praktik = data.Praktik;
//         const Utbildningar = data.Utbildningar;
        
//         for(let i=0; i<Datakunskaper.length; i++){
//             dk.innerHTML += `<p class="main-text">${Datakunskaper[i].kunskap}</p>`
//         }
        
//         for(let i=0; i<Yrkeserfaranheter.length; i++){
//             arb.innerHTML += `<p class="main-text">${Yrkeserfaranheter[i].Arbetsplats} ${Yrkeserfaranheter[i].Arbetsuppgift} ${Yrkeserfaranheter[i].Anställningsår}</p>`
//         }

//         for(let i=0; i<Praktik.length; i++){
//             pra.innerHTML += `<p class="main-text">${Praktik[i].Arbetsplats} ${Praktik[i].Arbetsuppgift} ${Praktik[i].Anställningsår}</p>`
        
//         }
//         for(let i=0; i<Utbildningar.length; i++){
//             utb.innerHTML += `<p class="main-text">${Utbildningar[i].Utbildning} ${Utbildningar[i].Allmänt} ${Utbildningar[i].Utbildningsår}</p>`
//         }
// }
// GetJsData();




//******************************************************************************************************** */

// export const CvComponent = () => {
    
//     const Erfarenheter = cvv.Yrkeserfarenheter;
//     const Praktik = cvv.Praktiker;
//     const Utbildning = cvv.Utbildningar;
//     const Datakunskap = cvv.Datakunskaper;
    
//     return (
        
//         <div>
//             <section className="main-section">
//                 <section>
//                     <h1>Mitt CV</h1>
            
//                     <h3 className="underrubrik">Yrkeserfarenheter</h3>
//                     <p className="main-text"><strong>Arbetade inom: </strong></p>
//                     <div>{cvv.Yrkeserfarenheter.map((row) => {
//                     return (
//                     <p className="main-text">{row.Arbetsplats} {row.Arbetsuppgift} {row.Anställningsår}</p>
//                     )})}
//                     </div>

//                     <br></br>

//                     <h3 className="underrubrik">Praktik</h3>
//                     <p className="main-text"><strong>Praktiserade inom: </strong></p>
//                     <div>{cvv.Praktiker.map((row) => {
//                     return (
//                     <p className="main-text">{row.Arbetsplats} {row.Arbetsuppgift} {row.Anställningsår}</p>
//                     )})}
//                     </div>

//                     <br></br>

//                     <h3 className="underrubrik">Utbildningar</h3>
//                     <p className="main-text"><strong>Utbildade mig inom: </strong></p>
//                     <div>{cvv.Utbildningar.map((row) => {
//                     return (
//                     <p className="main-text">{row.Utbildning} {row.Allmänt} {row.Utbildningsår}</p>
//                     )})}
//                     </div>

//                     <br></br>

//                     <h3 className="underrubrik">Datakunskaper</h3>
//                     <p className="main-text"><strong>Kunskap inom: </strong></p>
//                     <div>{cvv.Datakunskaper.map((row) => {
//                     return (
//                     <p className="main-text">{row.kunskap}</p>
//                     )})}
//                     </div>
//                 </section>

//                 <figure className="side-section">
//                     <img className="cv-picture" src="images/cv.jpg" alt="En Bild Av Ett CV"></img>
//                 </figure>
//             </section>
//         </div>
//     )
// }