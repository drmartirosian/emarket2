import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from '../cart/CartColumns';
import EmptyCart from '../cart/EmptyCart';
import {ProductConsumer} from '../../context';
import CartList from './CartList'
import CartTotals from '../cart/CartTotals';
// import from '';
// import from '';
// import from '';


export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value =>{
                        const {cart} = value;
                        if (cart.length > 0){
                            return (
                                <React.Fragment>
                                    <Title name="My " title="cart" />
                                    <CartColumns />
                                    <CartList value={value}/>
                                    <CartTotals value={value}/>
                                </React.Fragment>
                            )
                        } else {
                            return <EmptyCart />
                        };
                    }}
                </ProductConsumer>
            </section>
        )
    }
}