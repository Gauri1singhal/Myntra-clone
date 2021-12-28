import {combineReducers} from 'redux';

import modals from './modals';
import bag from './bag';
import products from './products';
import { wishlist } from './wishlist';
import sort from './sort';
import filters from './filters';

const reducer = combineReducers({
    modalsStore : modals,
    bagStore : bag,
    productStore : products,
    wishlistStore : wishlist,
    sortStore : sort,
    filtersStore : filters
});

export default reducer;


