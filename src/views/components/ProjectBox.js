import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import styled from "styled-components";
import SkillBox from "../atoms/SkillBox";
import SkillBoxEmpty from '../atoms/SkillBoxEmpty'
import StarFull from "../../img/starfull.png"
import StarEmpty from "../../img/starempty.png"


export default ({ data }) => {
    console.log(data)
    return (
        <Box>
            <Row>
                <Col md="6">
                    <Title>
                        UNIVERSITY
                </Title>
                    <UniversityTitle>
                        {data.uni}
                    </UniversityTitle>
                    <Title>
                        SHORT DESCRIPTION
                </Title>
                    <ShortDescription>
                        {data.shortDesc}
                    </ShortDescription>
                    <Title>
                        SKILLS
                </Title>
                    {/* to trzeba przemapować */}
                    {/* {data.skills} */}
                    <Row>
                        <SkillBox skill="Programming" />
                        <SkillBox skill="Biology" />
                        {/* <SkillBoxEmpty skill="Physic" /> */}
                        <SkillBox skill="Project Managment" />
                    </Row>

                    <Title>
                        DATE
                </Title>
                    <Date>
                        {data.date}
                    </Date>
                </Col>
                <Col md="6">
                    <Title>
                        LEVEL
                    </Title>
                    
                    <div>
                        <Star src={StarFull} />
                        <Star src={StarFull} />
                        <Star src={StarFull} />
                        <Star src={StarEmpty} />
                        <Star src={StarEmpty} />
                    </div>

                    <Title>
                        DESCRIPTION
                    </Title>
                    <Description>
                        {data.desc}
                    </Description>
                </Col>
            </Row>
        </Box>
    );
}

const Box = styled.div`
    background: #FAFAFA;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 40px;
    padding-top: 20px; 
`
const Title = styled.h1`
    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    font-size: 15px;
    margin-top: 10px;
`

const UniversityTitle = styled.h1`
    color: #4FB084;
    font-size: 15px;
    font-weight: bold;
`

const ShortDescription = styled.h1`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 16px;
    color: #989898;
`

const Date = styled.h1`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #7A7A7A;
`

const Description = styled.h1`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #989898;
`

const Star = styled.img`

`