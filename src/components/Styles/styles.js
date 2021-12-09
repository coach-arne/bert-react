import styled from "styled-components";

export const Styles = styled.div`
        display: flex;
        justify-content: space-between;
        font-family: Arial, Helvetica, sans-serif;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); 
        padding: 10px;
        border:2px;
        box-sizing: border-box;
        transition: 0.3s;
        border-radius: 5px;
        width: 80%;      
    `;

export const ImgContainer = styled.div`
     width: 15%;     
    `;

export const ContentContainer = styled.div`
     width: 85%;
     padding: 1em;
     background-color: #ffffff;
    `;

export const Card = styled.div`
      margin-top: 10px;
      border-radius: 80px;
    `;

export const CardTitle = styled.div` 
    font-size:28px;
    text-align:center;
    `;

export const CardBody = styled.div`
    font-size:14px;
    text-align:left;
    `;

export const CardImage = styled.img`
        width: 100%;
        height: 100%;
        align-items: flex-start;
        object-fit: contain ;    
    `;

export const ReleaseDate = styled.span`
        white-space: nowrap;
        color: #999;
     `;
