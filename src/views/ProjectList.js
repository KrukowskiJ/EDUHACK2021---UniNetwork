import React from 'react';
import SectionTitle from "./atoms/SectionTitle";
import MainProjectBox from "./components/MainProjectBox";
import styled from "styled-components"
import prjData from "../data/projects.json";

export default () => {
  return (
    <>
    <SectionTitle title="FIND YOUR PROJECT" />
    <ScrollView>
      <MainProjectBox data={prjData[0]} />
      <MainProjectBox data={prjData[1]} />
      <MainProjectBox data={prjData[2]} />
    </ScrollView>
    </>
  );
}

const ScrollView = styled.div`
  overflow:scroll;
  height:80vh;
`
