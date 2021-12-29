import React from 'react'
import './SimilarProductsContainer.css'
import { ItemCard } from '../../components/index.js';
import { useDispatch , useSelector } from 'react-redux';
import {hideSimilarProducts} from '../../actions/similarProducts';
import {findSimilar} from '../../helpers/similar';
export default function SimilarProductsContainer() {
    const dispatch = useDispatch();
    let {products , productToBeSimilar} = useSelector(state => {
        return {
            products : state.productStore,
            productToBeSimilar : state.similarProductsStore.product
        }
    });
    products = findSimilar( products , productToBeSimilar);
    return (
        <div className="similar-products-container flex-row " >
            <div 
                className="close-similar-product" 
                onClick={() => dispatch(hideSimilarProducts())}
            >
                <i class="fas fa-arrow-left"></i>
            </div>
            {
                products.map((product,index) =>{
                    return <ItemCard item={product} index={index} />
                })
            }
        </div>
    )
}
