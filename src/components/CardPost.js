import styled from "styled-components";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';

export default function CardPost({likesCount, photo, postedAt, description}){

    function formatarData(postedAt){
        const dataFormatada = dayjs(postedAt).locale('pt-br').format('DD/MM/YY HH:mm');
        return dataFormatada;
    }
    return(
        <PostContainer>
            <span>
                        <img src={photo} />
                        <div> <p>
                            <ion-icon name="heart-outline"></ion-icon>
                            pessoas curtiram sua foto</p>
                            <p>{formatarData(postedAt)}</p>
                        </div>
                        <p> {description}</p>
                    </span>
        </PostContainer>
    )
}

const PostContainer = styled.section`
display: flex;
margin-top: 15px;
width: 100%;


span {
    display: flex;
    width: 100%;
    padding: 20px;
    background-color:#ed344d;
    flex-direction: column;
    border-radius: 5px;

    p{
        font-size: 15px;
        color: #FFFFFF;
        font-family: 'Ubuntu', sans-serif;
        font-weight: 500;
    }

}

img {
    width: 100%;
    height: 420px;
    background-color: pink;
    border-radius: 5px;
}

div{
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 20px;
    margin-top: 5px;
  
    p{
        font-size: 15px;
        color: #FFFFFF;
        font-family: 'Ubuntu', sans-serif;
        font-weight: 500;
        align-items: center;
        display: flex;
    }

   
    ion-icon {
        margin-right: 5px;
        align-items: center;
        font-size: 18px;
    }
}


`