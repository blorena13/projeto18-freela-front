import { useEffect } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { InfoContext } from "../context/InfoContext";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import CardPost from "../components/CardPost";

export default function Profile() {

    const [profile, setProfile] = useState([]);
    const [post, setPost] = useState([]);
    const { token } = useContext(InfoContext);
    const navigate = useNavigate();

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_URL}/profile`;
        const config = {
            headers:
                { Authorization: `Bearer ${token}` }
        }

        const promise = axios.get(url, config);
        promise.then((res) => {
            setProfile(res.data);
            setPost(res.data.userPost);
        })
        promise.catch(err => console.log(err.response.data.mensagem));
    }, []);

    return (

        <ProfileContainer>
            <Header />
            <FeedContainer>
                <ProfileMe>
                    <span>
                        <img src={profile.profileImage} />
                        <div>
                            <p>{profile.name}</p>
                            <p>{profile.bio}</p>

                            <div>
                                <button onClick={() => navigate("/me/followers")}>Ver seguidores</button>
                                <button onClick={() => navigate("/me/following")}>Ver quem eu sigo</button>
                            </div>


                        </div>
                    </span>
                </ProfileMe>

                {post.map(p => (
                    <CardPost 
                    likesCount={p.likesCount}
                    photo= {p.photo}
                    postedAt={p.postedAt}
                    description={p.description}
                    />
                )) }
                     
               
            </FeedContainer>

            <Footer />
        </ProfileContainer>
    )
}

const ProfileContainer = styled.section`
background-color: #FFFFFF;
display: flex;
justify-content: center;


`
const FeedContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 40%;
margin-top: 90px;
margin-bottom: 90px;

`
const ProfileMe = styled.div`
border: 1px solid #f5f5f5;
background-color: #ed344d;
display: flex;
width: 100%;
border-radius: 5px;

img{
    width: 80px;
    border-radius: 50%;
}
span {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 20px;
    height: 70px;
}

div{
    display: flex;
    flex-direction: column;
    width: 72%;

    p{
        margin-bottom: 7px;
        color: #FFFFFF;
        font-family: 'Ubuntu', sans-serif;
        font-weight: 700;
    }

   
    p:nth-child(2){
        font-size: 11px;
    }
 button {
    border-radius: 50px;
    border: none;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;
    font-size: 15px;
    color: #FFFFFF;
    background-color: #ed344d;
    border: 1px solid #FFFFFF;
 }
    

div:nth-child(3) {
    display: flex;
    width: 300px;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 15px;
}
}

`



