import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import { ProductConsumer } from '../context'

export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3" >
                <div className="card">
                    <div 
                        className="img-container p-5" 
                        onClick={()=> console.log("You clicked me (from Product.js)")}>
                        <Link to="/details" >
                            <img src={img} alt="Product img" className="card-img-top"/>
                        </Link>
                        <button 
                            className="cart-btn"
                            disabled={inCart?true:false}
                            onClick={()=>{console.log("ADDED TO CART");
                        }}>
                            {inCart?(
                                <p className="text-capitalize mb-0" disabled>
                                    {" "}
                                    in cart
                                </p>
                                ):(
                                <i className="fas fa-cart-plus"/>
                            )} +
                        </button>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

const ProductWrapper = styled.div`


`