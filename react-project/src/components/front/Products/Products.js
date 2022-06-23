import React from 'react'
import './Products.css';

const Products = ({productItems, handleAddProduct}) => {
    const mystyle = {
        objectFit: "cover",
        maxWidth: "280px",
        minHeight: "200px",
        display:"block",
        witdth:"100%",
        backgroundPosition:"center",

    };
    const card ={
        witdth:"300px",
        height:"400px",
        border:"1px solid #000",
        borderRadius:"5px",
        overflow:"hidden",
        padding:"10px",
        margin:"40px 20px",
        backgroundColor:"#fff"

    }; 
    const button = {
        fontWeight: "700",
        fontSize:"18px",
        borderRadius: "5px",
        border: "none",
        outline: "none",
        backgroundColor: "#000",
        color: "#fff",
        width: "100%",
        height: "40px",
        display: "block",
        cursor: "pointer",
        textTransform: "uppercase",
        margin: "15px auto",
        
        
       
    };
    const price ={
        margin: "10px 0px",
        paddingBottom: "20px",
        fontSize: "18px",
        lineHeight: "30px",

    };
    const productName = {
        textTransform: "uppercase",
        margin: "10px 0px",
    };
    const products = {
        margin: "20px auto",
        width:" 80%",
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        backgroundColor: "#FFA500",
        borderRadius:"5px",

    };
   
        
       
      return (

        <div className='products' style={products}>
            {productItems.map((productItem) => (
                <div className='card' style={card}>
                    <div>
                        <img 
                            className="product-image"
                            src={productItem.image} 
                            alt={productItem.name} 
                            style={mystyle}
                            />
                    </div>
                    <div>
                        <h3 className='product-name' style={productName} >{productItem.name}</h3>
                    </div>
                    <div className='product-price' style={price}> ${productItem.price}</div>

                    <div>
                        <button className='product-add-button' style={button} onClick={() => handleAddProduct(productItem)}>Add to Cart</button>
                    </div>


                </div>
            ))}

        </div>



    );
  
};

export default Products