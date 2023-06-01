import styled from "styled-components";
import logo from "/home/lorena/projeto18-freela-front/src/assets/logoPink.png";
import nameLogo from "/home/lorena/projeto18-freela-front/src/assets/namePink.png";
import { useNavigate } from "react-router-dom";

export default function Header(){

    return (
    <HeaderContainer>
       <div> <img src={logo}/>
         <img src={nameLogo}/> 
        </div>
        
        <ion-icon name="log-out-outline"></ion-icon>
      
    </HeaderContainer>
    )
}

const HeaderContainer = styled.section`
display: flex;
background-color: #ed344d;
width: 100%;
height: 70px;
position: fixed;
top: 0;
left: 0;
z-index: 1;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid #f5f5f5;

div {
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 20px;
}

ion-icon{
    color: white;
    font-size: 30px;
    margin-right: 20px;
}


button{
    display: flex;
    width: 230px;
    align-items: center;
    justify-content: space-between;
    border-radius: 50px;
    border: none;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;
    font-size: 20px;
    color: #FFFFFF;
    background-color: #ed344d;
    margin-right: 120px;

}

img{
    width: 50px;
}
img:nth-child(2){
    width: 140px;
}

`