import React from 'react';

const ChangeBtn = ({changeType, type}) => {

	return(
		<div className = "button-change">
              {<button  onClick={changeType}>
                    {type === 'price' ? 'Показать цену в бонусах' : 'Показать цену в рублях'}
              </button>}
         </div>
		)

}

export default ChangeBtn;