import React, { Component } from 'react'
import { connect } from 'react-redux'
import './order.css'

import { addProductToCart } from '../../redux/actions/index'

export class Order extends Component {

    constructor(props){
        super(props);
        this.state={
            onClickCss:"",
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    handleOrderPlace =()=>{
        
        this.setState({onClickCss:"on-click-btn"});
        setTimeout(()=> {
            this.addCss();
        }, 200)
        
    }
    addCss=()=>{
        this.setState({onClickCss:""});
    }

    render() {
        const {onClickCss}=this.state;
        const {cart}=this.props;
        let amount=0;
        
        {cart.length && cart.map((item)=>
            amount += item.count * item.price
        )}
        
        
        return (
            <div>
                <section id="main-section">
                <h1 id="main-heading">Checkout</h1>
                
                <div id="content-wrapper">
                    
                    <div id="card-list">
                        <h3 className="section-heading">Total Items: <span id="item-count">{cart.length}</span></h3>
                        {cart.length && cart.map((item)=>
                            
                        <div className="checkout-card">
                            <div>
                                <img src={item. preview} class="checkout-product-img"/>
                            </div>
                            <div>
                                <h4>{item.name}</h4>
                                <p>Quantity: {item.count}</p>
                                <p>Amount: Rs <span>{item.count * item.price} </span></p>
                            </div>
                        </div>)}
                    </div>
                    
                    <div>
                        <h3 className="section-heading">Total Amount</h3>
                        <p>Amount: Rs<span id="total-amount">{amount}</span></p>
                        <a  href="/confirm">
                        <button id="btn-place-order" onClick={()=>this.handleOrderPlace()} className={onClickCss}>Place Order</button>
                        </a> 
                    </div>
                </div>
            </section>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cart:state.productReducer.cart
})

const mapDispatchToProps = (dispatch)=> ({
    addProductToCart : (payload) => dispatch(addProductToCart(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Order)
