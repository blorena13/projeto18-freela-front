import styled from "styled-components"

export default function CardFollows(){
    return (
        <CardContainer>
        <img />
        <div>
        <p>Ciclano de tal</p>
        <p> descrição aaaaaaaaa mexer dps pq a frase passa do card e agora nao testando sera que vai ate o final crescendo mas se for continuar com aaaa ele n para  </p>
        </div>
        
        </CardContainer>
    )
}

const CardContainer = styled.section`
display: flex;
width: 60%;
padding: 20px;
background-color: purple;
justify-content: space-between;

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
    
}
`