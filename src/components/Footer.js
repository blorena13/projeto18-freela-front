import styled from "styled-components";
import logoIcon from "../assets/logoIcon.png";
import { useNavigate } from "react-router-dom";


export default function Footer() {

    const navigate = useNavigate();
    return (
        <FooterContainer>

            <span>

            <ion-icon onClick={()=> navigate("/home/me")} name="home-outline"></ion-icon>
                <img onClick={()=> navigate("/newPost")} src={logoIcon} />

                <ion-icon onClick={()=> navigate("/users")} name="search-circle-outline"></ion-icon>

            </span>

        </FooterContainer>
    )
}

const FooterContainer = styled.section`
display: flex;
background-color:  #ed344d;
justify-content: center;
align-items: center;
width: 100%;
height: 70px;
position: fixed;
bottom: 0;
left: 0;
z-index: 1;

span{
    width: 30%;
    height: 80%;
    border-radius: 100px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color:#ed344d;
    font-weight: 700;
    font-size: 40px;

    img{
        width: 50px;
        height: 50px;
        border-radius: 50px;
    }

    ion-icon:nth-child(1){
    margin-left: 20px;
    font-size: 35px;
    }
    ion-icon:nth-child(3){
        margin-right: 20px;
    }

}
`