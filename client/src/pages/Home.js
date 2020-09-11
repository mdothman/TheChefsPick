import React, { Fragment } from 'react';
import {Header,Footer, InfoCard, CardHolder} from "../components";


export default function Home(){

  
  return (
        <Fragment>
          <Header />
          <CardHolder />
          <InfoCard />
          {/* <Search /> */}
          <Footer />
        </Fragment>
      );

    
}