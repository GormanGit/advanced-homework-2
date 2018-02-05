import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";
import SubHeader from "./components/SubHeader";
import TopNav from "./components/TopNav";
import ProductDetail from "./components/ProductDetail";

function App(props) {
  const category = props.currentCategory;

  const filtered = props.products.filter(product => {
    if (!category) return true;
    if (product.category === category) return true;
  });
  const products = filtered.map((product, i) => <ProductDetail products={product} key={i}/>);


  // console.log(props.products)
  return (
    <div className="App">
      <div className="wrap">

        <div className="header">

          <Header/>
          <div className="clear"></div>
          <SubHeader/>
          <div className="clear"></div>

          <TopNav changeCategory={props.changeCategory}/>

        </div>

        <ImageSlider/>

        <div className="content">
          <div className="products-box">
            <div className="products">
              <h5><span>FEATURED</span> PRODUCTS</h5>
              <div className="section group">

                {products}

              </div>
            </div>
          </div>
        </div>
        <div className="clear"></div>
        <Footer/>

      </div>

    </div>
  );
}

export default App;
