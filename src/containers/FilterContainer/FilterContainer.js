import React from 'react';
import './FilterContainer.css';
import { 
    GenderFilter , 
    DiscountFilter , 
    ColorFilter ,
    PriceFilter
} from '../../components/index';
export default function FilterContainer() {
    let isFilterApplied = true;
    const [isFilterContainerActive , setFilterContainerActive] = React.useState(false);
    return (
        <>
        <div 
            className={`mobile-filter-icon ${!isFilterContainerActive ? '' : 'mobile-hide-filter'}`}
            onClick={() => setFilterContainerActive(true)}
        ><i class="fas fa-sliders-h"></i></div>
        <div 
            className={`mobile-filter-icon ${isFilterContainerActive ? '' : 'mobile-hide-filter'} close-filter-container`}
            onClick={() => setFilterContainerActive(false)}
        ><i class="fas fa-times"></i></div>
        <div 
            className= {`filter-container ${isFilterContainerActive ? '' : 'mobile-hide-filter'}`}
        >
            <div className="filter-container-header flex-row " >
                <span className="filter-container-title" >FILTERS</span>
                <span 
                    className="clear-all-filters" 
                    style={isFilterApplied ? {display: 'block'} : {display: 'none'}}
                >
                    CLEAR ALL
                </span>
            </div>
            <GenderFilter/>
            <DiscountFilter/>
            <ColorFilter/>
            <PriceFilter/>
        </div>
        </>
    )
}
