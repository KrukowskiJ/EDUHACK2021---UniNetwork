import React from 'react';
import SectionTitle from "./atoms/SectionTitle";
import Header from "./atoms/Profile_Matches";


export default () => {
  return (
    <div>
      <div>
        <SectionTitle title="YOUR MATCHES" />
      </div>

      <div>
        <div className="Profile1">
          <Header title="HEALTH POINT" />
        </div>

        <div className="Profile1">
          <Header title="LOREM IPSUM" />
        </div>
      </div>
    </div>
  );
}

