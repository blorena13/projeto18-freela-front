import styled from "styled-components"

export default function CardFollows(){
    return (
        <CardContainer>
        <img />
        <div>
        <p>Ciclano de tal</p>
        <p> descrição aaaaaaaaa mexer dps pq  para cresce meusmo assim vamos ver e como vai ficando a cada atualização teste testando testandoooooo oiii foi  </p>
        </div>
        
        </CardContainer>
    )
}

const CardContainer = styled.section`
display: flex;
width: 60%;
padding: 20px;
border-radius: 10px;
background-color: #ed344d;
justify-content: space-between;
margin-top: 45px;

img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: red;
}

div {
    display: flex;
    flex-direction: column;
    width: 82%;
}


p {
    margin-top: 5px;
    color: #FFFFFF;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 500;
    font-size: 15px;
}
`