import React from 'react';
import styled from "styled-components";
import SectionTitle from "./atoms/SectionTitle";
import WatLogo from "../img/wat.png"
import Men from "../img/men.png"
import { Container, Row, Col } from 'react-bootstrap'
import Send from "../img/send.png";

export default () => {
  return (
    <>
        <SectionTitle title="CHAT WITH YOUR MATCH" />
        <TitleDesc>NAJMAN - EKSPERT TVP INFO STOSUNKÓW MIĘDZ.</TitleDesc>
        <TitleLine>
                <Title>
                    Health Point
                </Title>
        </TitleLine>
        
        <MessageTo message="Hi, You’re interested in our project?"/>
        <MessageFrom message="Hi! I am new to coding, but want to join you!" />
        <MessageTo message="We love your passion! Let’s meet!"/>
        <MessageFrom message="I am free whenever you want!" />
        <SendMessageBox /> 
    </>
  );
}

const SendMessageBox=()=>{
    return(
        <>
        Title
        <SendIcon src={Send} />
        </>
    );
}

const SendIcon=styled.img`

`

const MessageTo = (props)=>{
    return(
        <Row>
            <Col md="7">
                <BoxTo>
                    <UniversityLogo src={WatLogo}/>
                    <MessageBoxFrom> 
                        <Message>
                        {props.message}
                        </Message>
                    </MessageBoxFrom>
                </BoxTo>
            </Col>
        </Row>
    );
}

const MessageFrom = (props)=>{
    return(
        <Row>
            <Col md="5"></Col>
            <Col>
                <BoxFrom>
                    <MessageBoxTo> 
                        <Message>
                            {props.message}
                        </Message>
                    </MessageBoxTo>
                    <UniversityLogo src={Men}/>
                </BoxFrom>
            </Col>
        </Row>

    );
}

const BoxTo=styled.div`
  display: flex;
  margin-top:5px; 
`

const BoxFrom=styled.div`
  display: flex;
  align-self:right;
  margin-top:5px; 
`

const UniversityLogo = styled.img`

`
const MessageBoxTo=styled.div`
    background: #E2F3EC;
    border: 3px solid #ACF2D3;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
    padding-left:15px;
    padding-right:5px;
    padding-top:5px;
    min-width: 40%;
    margin:auto;
    margin-right:5px;
`

const MessageBoxFrom=styled.div`
    background: #E2F3EC;
    border: 3px solid #ACF2D3;
    box-sizing: border-box;
    padding-left:15px;    
    padding-right:5px;
    padding-top:5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
    padding-right:10px;
    min-width: 40%;
    margin:auto;
    margin-left:5px;
`

const Message=styled.h1`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #595959;
    padding: 10px; 
`


const TitleDesc = styled.h1`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #4C6C84;
    margin: auto;
    text-align: center;
`

const TitleLine = styled.div`
    margin-top: 40px; 
    padding-left: 20px; 
    background: #ACF2D3;
    box-sizing: border-box;
    background-color:#ACF2D3;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const Title = styled.h1`
    padding: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    color: #6D6969;
`