import React from 'react';

const FilterName = ({filterName, term}) => {
	return(
        <div>
            <input type="text" placeholder="Поиск" onChange = {filterName} value = {term} />
        </div>
		)
}

export default FilterName;