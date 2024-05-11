import React, { Fragment,useEffect,useState } from 'react';
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import MetaData from '../layout/MetaData.js';
import { useSelector,useDispatch } from 'react-redux';
import {clearErrors, getProduct} from "../../actions/productAction.js";
import Loader from "../layout/Loader/Loader.js"
import Product from "./ProductCard.js";
import {useAlert} from "react-alert";

const Home = () => {
    const alert=useAlert();
    const dispatch = useDispatch();
    const { loading, error, products  } = useSelector(state => state.products);

    // Dispatch action to get products
    useEffect(() => {
        if(error){
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProduct());
    }, [dispatch,error,alert]);
    const [ backgroundImages] = useState([
            'https://ik.imagekit.io/cg8ipjbwx/amazon-image/bg_amazon_image.jpg?updatedAt=1693563800522',
            'https://ik.imagekit.io/cg8ipjbwx/amazon-image/bg_amazon_image4.jpg?updatedAt=1693563800610',
            'https://ik.imagekit.io/cg8ipjbwx/amazon-image/bg_amazon_image2.jpg?updatedAt=1693563800539',
            'https://ik.imagekit.io/cg8ipjbwx/amazon-image/bg_amazon_image5.jpg?updatedAt=1693563800505',
            'https://ik.imagekit.io/cg8ipjbwx/amazon-image/bg_image_image.jpg?updatedAt=1693563800526',
            'https://ik.imagekit.io/cg8ipjbwx/amazon-image/bg_amazon_image3.jpg?updatedAt=1693563800480',
            'https://ik.imagekit.io/cg8ipjbwx/amazon-image/bg_amazon_image6.jpg?updatedAt=1693563800488',
            'https://ik.imagekit.io/cg8ipjbwx/amazon-image/bg_amazon_image7.jpg?updatedAt=1693570283299',
        ]);
    const [currentImageIndex,setCurrentImageIndex]=useState(0)

    useEffect(() => {
        const changeBackgroundInterval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
        }, 5000);

        return () => clearInterval(changeBackgroundInterval);
    }, [backgroundImages]);

    return (
        <Fragment>
            {loading ? (<Loader/>):
                <Fragment>
                    <MetaData title="proCart" />
                    <div className="banner" style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})`, transition: 'background-image 0.5s ease-in-out', }}>
                        <h1>HIGH QUALITY IS OUR FIRST PRIORITY</h1>
                        <p>Welcome to proCart</p>
                        <a href="#container">
                            <button>Scroll<CgMouse /></button>
                        </a>
                    </div>
                    <h2 className='homeHeading'>Featured Products</h2>
                    <div className="container" id="container">
                        {products && products.map((product) => <Product key={product._id} product={product} />)}
                    </div>
                </Fragment>
            }
        
        </Fragment>
    );
}


export default Home
