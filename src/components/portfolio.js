import React, { useEffect, useState } from "react"
import { Container } from "react-bootstrap"


export const PortfolioComponent = () => {

    const [projects, setProjects] = useState([])
    const [pending, setIsPending] = useState(true)
    useEffect(()=> {
        setTimeout(()=>{
            fetch('https://api.github.com/users/Jipena/repos')
            .then(res => res.json())
            .then(data => {
                setProjects([])
                setProjects((prev)=>[
                    ...prev,
                    {
                        name:data[2].name,
                        description:data[2].description,
                    },
                    {
                        name:data[3].name,
                        description:data[3].description,
                    },
                    {
                        name:data[4].name,
                        description:data[4].description,
                    },
                    {
                        name:data[5].name,
                        description:data[5].description,
                    },
                    {
                        name:data[8].name,
                        description:data[8].description,
                    },
                    {
                        name:data[9].name,
                        description:data[9].description,
                    },
                ])
                setIsPending(false)
            })
        },3000)
    },[]) 

    return (
        <section className="main-section">
            <div className="">
                <h1>Portfolio</h1>
                <p className="main-text">Här är mitt portfolio med appar jag byggt</p>
            </div>
            <div className="main-text">
                {pending && <div class="d-flex align-items-center">
                <strong>Laddar in projekt från Github...</strong>
                <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                </div>}
                {projects.map((project, index) => (
                <a href={project.link} key={index} className="portfolio-text">
                    <div>
                        <h1 className="portfolio-title-text">{project.name}</h1>
                        <p className="portfolio-text">{project.description}</p>
                    </div>
                </a>
                ))}
            </div>
        </section>
    )
}