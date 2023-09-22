import React from 'react'
import Breadcumb from './Breadcumb';
import Detail from './Detail';
import Header from "../Header";
import Footer from "../Footer";
import SimilarProduct from './SimilarProduct';
import AboutBrands from './AboutBrands';
import Brands from "../Brands";

function ProductDescription() {
  return (
    <div>
      <Header/>
      <Breadcumb/>
      <Detail/>
      <AboutBrands/>
      <SimilarProduct/>
      <Brands/>
      <Footer/>
    </div>
  )
}

export default ProductDescription;

