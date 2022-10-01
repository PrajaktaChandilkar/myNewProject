// import ProductData from "./ProductData";
import './ProductData.css'
// import { useGlobalContext } from '../../Context'

const Card = ({ id, name, img, oldPrice, newPrice }) => {
    // const { id, name, img, oldPrice, newPrice } = cart
//    const {increase} = useGlobalContext()
    let len = name.length
    console.log(len)
    return (
        <div>
            <div className="scrolling-wrapper">
                <div className="outer-container">
                    <img classname="product-img" src={img} alt={name} />
                    <p className='product-name' key={id}>
                        {
                            len < 52 ? (name) : (
                                <div className='exceed'>
                                    {name}
                                </div>
                            )
                        }
                    </p>
                    <div className="info">
                        <div className="star">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                                <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                                <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                                <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                                <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                                <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B" />
                            </svg>
                        </div>
                        <div className="price">
                            <p className="old-price">{oldPrice}/-</p>
                            <p className="new-price">{newPrice}/-</p>
                        </div>
                    </div>
                    <button className='add-to-cart'>ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}
export default Card