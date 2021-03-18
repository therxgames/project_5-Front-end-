import React from 'react';

const FilterGenre = ({filterGenre}) => {
	return(
		    <div>
            	<select onChange= {filterGenre}>
                    <option value="">Все жанры</option>
                    <option value="Демо">Демо</option>
                    <option value="Задачник">Задачник</option>
                    <option value="Подготовка к ВПР">Подготовка к ВПР</option>
                    <option value="Подготовка к ЕГЭ">Подготовка к ЕГЭ</option>
                    <option value="Рабочая тетрадь">Рабочая тетрадь</option>
                </select>
            </div>
)}

export default FilterGenre;