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
const products = filtered.map((product, i) => <ProductDetail products={product} key={i} />);



  console.log(props.products)
  return (
    <div className="App">
      <div className="wrap">

        <div className="header">

          <Header />
          <div className="clear"></div>
          <SubHeader />
          <div className="clear"></div>

          <TopNav changeCategory={props.changeCategory} />

        </div>

        <ImageSlider />

        <div className="content">
          <div className="products-box">
            <div className="products">
              <h5><span>FEATURED</span> PRODUCTS</h5>
              <div className="section group">
                {products}
                {/*<div className="grid_1_of_5 images_1_of_5">*/}
                  {/*<img src="images/g1.jpg"/>*/}
                  {/*<h3>Lorem Ipsum is simply </h3>*/}
                  {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, in reprehenderit.</p>*/}
                  {/*<h4>$300.00</h4>*/}
                  {/*<div className="button"><span><a href="singlepage.html">Read More</a></span></div>*/}
                {/*</div>*/}
                {/*<div className="grid_1_of_5 images_1_of_5">*/}
                  {/*<img src="images/g2.jpg"/>*/}
                  {/*<h3>Lorem Ipsum is simply </h3>*/}
                  {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, in reprehenderit.</p>*/}
                  {/*<h4>$120.00</h4>*/}
                  {/*<div className="button"><span><a href="singlepage.html">Read More</a></span></div>*/}
                {/*</div>*/}
                {/*<div className="grid_1_of_5 images_1_of_5">*/}
                  {/*<img src="images/g3.png"/>*/}
                  {/*<h3>Lorem Ipsum is simply </h3>*/}
                  {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, in reprehenderit.</p>*/}
                  {/*<h4>$500.00</h4>*/}
                  {/*<div className="button"><span><a href="singlepage.html">Read More</a></span></div>*/}
                {/*</div>*/}
                {/*<div className="grid_1_of_5 images_1_of_5">*/}
                  {/*<img src="images/g4.jpg"/>*/}
                  {/*<h3>Lorem Ipsum is simply</h3>*/}
                  {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, in reprehenderit.</p>*/}
                  {/*<h4>$120.00</h4>*/}
                  {/*<div className="button"><span><a href="singlepage.html">Read More</a></span></div>*/}
                {/*</div>*/}
              {/*</div>*/}
            {/*</div>*/}
            {/*<div className="products products-secondbox">*/}
              {/*<h5><span>Our</span> Specials</h5>*/}
              {/*<div className="section group">*/}
                {/*<div className="grid_1_of_5 images_1_of_5">*/}
                  {/*<img src="images/g1.jpg"/>*/}
                  {/*<h3>Lorem Ipsum is simply </h3>*/}
                  {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, in reprehenderit.</p>*/}
                  {/*<h4><span>$600.00</span>$512.00</h4>*/}
                  {/*<div className="button"><span><a href="singlepage.html">Read More</a></span></div>*/}
                {/*</div>*/}
                {/*<div className="grid_1_of_5 images_1_of_5">*/}
                  {/*<img src="images/g6.jpg"/>*/}
                  {/*<h3>Lorem Ipsum is simply </h3>*/}
                  {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, in reprehenderit.</p>*/}
                  {/*<h4><span>$400.00</span>$352.00</h4>*/}
                  {/*<div className="button"><span><a href="singlepage.html">Read More</a></span></div>*/}
                {/*</div>*/}
                {/*<div className="grid_1_of_5 images_1_of_5">*/}
                  {/*<img src="images/g7.png"/>*/}
                  {/*<h3>Lorem Ipsum is simply </h3>*/}
                  {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, in reprehenderit.</p>*/}
                  {/*<h4><span>$300.00</span>$202.00</h4>*/}
                  {/*<div className="button"><span><a href="singlepage.html">Read More</a></span></div>*/}
                {/*</div>*/}
                {/*<div className="grid_1_of_5 images_1_of_5">*/}
                  {/*<img src="images/g8.png"/>*/}
                  {/*<h3>Lorem Ipsum is simply </h3>*/}
                  {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, in reprehenderit.</p>*/}
                  {/*<h4><span>$400.00</span>$322.00</h4>*/}
                  {/*<div className="button"><span><a href="singlepage.html">Read More</a></span></div>*/}
                {/*</div>*/}
                {/*<div className="grid_1_of_5 images_1_of_5">*/}
                  {/*<img src="images/g1.jpg"/>*/}
                  {/*<h3>Lorem Ipsum is simply</h3>*/}
                  {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, in reprehenderit.</p>*/}
                  {/*<h4><span>$700.00</span>$602.00</h4>*/}
                  {/*<div className="button"><span><a href="singlepage.html">Read More</a></span></div>*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
        </div>
        <div className="clear"></div>
        <Footer />

      </div>

    </div>
  );
}

export default App;
