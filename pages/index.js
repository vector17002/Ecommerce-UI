import React from 'react';
import FooterBanner from '../components/Footerbanner';
import HeroBanner from '../components/Herobanner';
import {client} from '../Lib/client';
import Product from '../components/Product';

const Index = ({products , bannerData}) =>{
  return(
    <div>
    <HeroBanner heroBanner = {bannerData[0]}/>
    <div className='products-heading'>
      <h2> Best selling product</h2>
      <p>Speakers of many variations</p>
    </div>
    <div className='products-container'>
      {products?.map((product) => <Product key={product._id} product={product}/>)}
    </div>
    <FooterBanner footerBanner={bannerData[0]}/>
    </div>
  ) 
}
export const getServerSideProps = async ()=>{
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props:{products , bannerData}
  }
}
export default Index