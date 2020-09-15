import React, { Fragment } from 'react';
import {Header,Footer, InfoCard, RecipeCard} from "../components";


export default function RecipeCardHolder(){

  
  return (
        <Fragment>
          <Header />
          <InfoCard />
          <RecipeCard />
          <Footer />
        </Fragment>
      );

    
}