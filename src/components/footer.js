import React from "react"

export const Footer = () => {

    function Egg(){
        const backgroundColor = document.getElementsByClassName('main-section')[0];
        console.log('hej');
        backgroundColor.style.background="lightblue";
    }

    return (
        <div>
            <footer onClick={Egg}>
                <h4 className="copyright">Copyright &copy Jesper Andersson 2023</h4>
            </footer>
        </div>
    )
}