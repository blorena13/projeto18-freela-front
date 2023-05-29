import styled from "styled-components"

export default function CardSearch(){
    return (
        <CardContainer>
        <img />
        <div>
        <p>Ciclano de tal</p>
        <p> descrição aaaaaaaaa mexer dps pq a frase passa do card e agora nao testando sera que vai ate o final crescendo mas se for continuar com aaaa ele n para descrição 
            aaaaaaaaa mexer dps pq a frase </p>
        </div>
        
        </CardContainer>
    )
}

const CardContainer = styled.section`
display: flex;
width: 60%;
padding: 20px;
background-color: #ed344d;
justify-content: space-between;
align-items: center;
margin-top: 25px;
border-radius: 50px;

img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: red;
    margin-left: 10px;
}

div {
    display: flex;
    flex-direction: column;
    width: 82%;
    margin-right: 30px;
}


p {
    color: #FFFFFF;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 500;
    font-size: 17px;
}

p:nth-child(2){
    font-size: 12px;
    margin-top: 7px;
}
`