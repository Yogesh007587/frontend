import React, { Fragment, useEffect,useState } from 'react';
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useParams } from 'react-router-dom';
import {useSelector,useDispatch} from "react-redux";
import { clearErrors, getProductDetails } from '../../actions/productAction';
import { Rating } from '@mui/material';
import ReviewCard from "./ReviewCard.js";
import Loader from '../layout/Loader/Loader.js';
import {useAlert} from "react-alert";
import MetaData from "../layout/MetaData";



const ProductDetails = () => {
    const alert=useAlert();
    const dispatch=useDispatch();
    const {id}=useParams();
    const {product,loading,error}=useSelector(state=>state.productDetails);
    useEffect(()=>{
        if(error){
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProductDetails(id))
    },[dispatch,error,id,alert]);
    const options = {
        size: "large",
        value: product.ratings,
        readOnly: true,
        precision: 0.5,
    };
    const [quantity, setQuantity] = useState(1);
    return (
        <Fragment>
            {loading ? (<Loader/>):
                <Fragment>
                    <MetaData title={`${product.name} -- proCart`} />
                <div className="ProductDetails">
                    <div>
                    {product&&product.images && product.images.length > 0 ? (
                        <Carousel className='CarouselContainer'>
                            { product.images.map((item,i)=>(
                                <img className="CarouselImage" key={item.url} src={item.url} alt={`${i} Slide`}/>
                            ))}
                        </Carousel>):(<p>No image Available</p>)}
                    </div>
    
                    <div>
                        <div className="detailsBlock-1">
                        <h2>{product.name}</h2>
                        <p>Product # {product._id}</p>
                        </div>
                        <div className="detailsBlock-2">
                            <Rating {...options} />
                            <span className="detailsBlock-2-span">
                            {" "}
                            ({product.numOfReviews} Reviews)
                            </span>
                        </div>
                        <div className="detailsBlock-3">
                            <h1>{`₹${product.price}`}</h1>
                            <div className="detailsBlock-3-1">
                                <div className="detailsBlock-3-1-1">
                                    <button >-</button>
                                    <input readOnly value={quantity} type="number"  />
                                    <button >+</button>
                                </div>
                                <button
                                    disabled={product.Stock < 1 ? true : false}
                                    // onClick={}
                                >
                                    Add to Cart
                                </button>
                            </div>
    
                            <p>
                                Status:
                                <b className={product.stock < 1 ? "redColor" : "greenColor"}>
                                    {product.stock < 1 ? "OutOfStock" : "InStock"}
                                </b>
                            </p>
                        </div>
                        <div className="detailsBlock-4">
                            Description : <p>{product.description}</p>
                        </div>
    
                        <button className="submitReview">
                            Submit Review
                        </button>
                    </div>
                </div>
                <h3 className='reviewsHeading'>REVIEWS</h3>
                {(product.reviews && product.reviews[0])?(
                    <div className='reviews'>
                        {product.reviews&&product.reviews.map((review)=>
                            <ReviewCard key={review._id} review={review}/>
                        )}
                    </div>
                ):(
                    <p className='noReviews'>No Reviews Yet</p>
                )}
            </Fragment>
            }
        </Fragment>
    )
}

export default ProductDetails
