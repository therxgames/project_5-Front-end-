import React from 'react';

const FilterSubj = ({filterSubj}) => {
	return(
		
		    <div>
            	<select onChange= {filterSubj}>
                    <option value = "">Все предметы</option>
                    <option value = "Алгебра">Алгебра</option>
                    <option value = "Английский язык">Английский язык</option>
                    <option value = "Биология">Биология</option>
                    <option value = "География">География</option>
                    <option value = "Геометрия">Геометрия</option>
                    <option value = "Демо-версия">Демо-версия</option>
                    <option value = "Информатика">Информатика</option>
                    <option value = "История">История</option>
                    <option value = "Литература">Литература</option>
                    <option value = "Математика">Математика</option>
                    <option value = "Обществознание">Обществознание</option>
                    <option value = "Окружающий мир">Окружающий мир</option>
                    <option value = "Робототехника">Робототехника</option>
                    <option value = "Русский язык">Русский язык</option>
                    <option value = "Физика">Физика</option>
                    <option value = "Химия">Химия</option>
                </select>
            </div>
)}

export default FilterSubj; 