import React from 'react';
import SectionTitle from "./atoms/SectionTitle";
import MainProjectBox from "./components/MainProjectBox";
export default () => {
  return (
    <div>
        <SectionTitle title="FIND YOUR PROJECT" />
        <MainProjectBox /> 
        <MainProjectBox /> 
        <MainProjectBox /> 
    </div>
  );
}


