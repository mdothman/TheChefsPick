import React, { Fragment } from 'react';
import {Header,Footer, InfoCard, Search} from "../components";


export default function Home(){

  
  return (
        <Fragment>
          <Header />
          <InfoCard />
          <Search />
          <Footer />
        </Fragment>
      );

    
}