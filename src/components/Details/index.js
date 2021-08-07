import axios from 'axios';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import './details.css'
import { addProductToCart } from '../../redux/actions/index'
import loader from './loader/preloader.gif'

export class Details extends Component {
    constructor(props){
        super(props);
        this.state={
            productDetail:{},
            displayImage:"",
            Id:0,
            loading:true,
            onClickCss:""
        }
    }
    
    componentDidMount(){
        window.scrollTo(0, 0)
        const id=this.props.match.params.id;
        axios(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${id}`)
        .then(({data})=>this.setState({productDetail:data, displayImage:data.preview, loading:false}))
         
    }

    handleCssStyle=(id,productImage)=>{
        console.log(id);
        this.setState({Id:id,displayImage:productImage});
    }

    addProduct=(item)=>{
        this.setState({onClickCss:"on-click-btn"});
        setTimeout(()=> {
            this.addCss();
        }, 200)
        
        var pos=-1;
        const {cart}=this.props;
        for(var i=0;i<cart.length;i++){
            if(cart[i].id==item.id){
                pos=i;  
            }
        }
        if(pos>-1){
            cart[pos].count+=1;
        }else{
            item.count=1;
            this.props.addProductToCart(item);
        }
    }

    addCss=()=>{
        this.setState({onClickCss:""});
    }

    render() {
        const {productDetail,Id,displayImage,loading,onClickCss}=this.state;
        return (
            <div>
                 { loading=== true ?<div id="loading-div"><img src={loader}/></div>:<>
                <section>
                    <div id="product-details">
                        <div id="product-image-div">
                            <img id="product-details-image" src={displayImage}/>
                        </div>
                        <div id="product-details-div">
                            <h1 id="product-title">{productDetail.name}</h1>
                            <h2 id="product-brand">{productDetail.brand}</h2>
                            <h4 className="product-section-heading">Price:Rs  <p id="product-details-price">{productDetail.price}</p></h4>
                            <h4 className="product-section-heading">Description</h4>
                            <p id="product-description">{productDetail.description}</p>
                            <h4 className="product-section-heading">Product Preview</h4>
                            <div id="preview-wrapper">
                                {productDetail && productDetail.photos &&productDetail.photos.length && productDetail.photos.map((item,index)=>
                                    <img src={item} id={index} className={Id===index ? "active-image":""} 
                                    onClick={()=>this.handleCssStyle(index ,item)}/>
                                )}
                            </div>
                            <button id="btn-add-to-cart" className={onClickCss} onClick={()=>{this.addProduct(productDetail)}}>Add to Cart</button>
                        </div>
                    </div>
                </section>
                </>}
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

export default connect(mapStateToProps, mapDispatchToProps)(Details)
