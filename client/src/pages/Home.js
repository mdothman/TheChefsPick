import React, { Fragment } from 'react';
import {Header,Footer, InfoCard, Search} from "../components";


export default function Home(...props){

function handleChange(value){
  console.log(value)
}
  return (
        <Fragment>
          <Header />
          <InfoCard />
          <Search />
          <Footer onChange={()=>handleChange(props)} />
        </Fragment>
      );

    
}