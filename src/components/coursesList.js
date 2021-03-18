import React from 'react';

const CoursesList = ({filteredData, type}) => {
	return(
		 <ul className = "courses-list">
             {filteredData ? filteredData.map(item => {
                return(
                   <li className = "courses-sci" key = {item.courseId}>
                        <div className = "sci-figure">
                          <img src = {`https://www.imumk.ru/svc/coursecover/${item.courseId}`} className = "image" alt = ''/>
                        </div>
                        <div className = "sci-info">
                          <p className = "sci-title">{item.subject}</p>
                          <p className = "sci-grade">
                            {item.grade.includes(';') ? 
                              `${item.grade.split(';')[0]} - ${item.grade.split(';')[(item.grade.split(';').length)-1]} классы` 
                              : `${item.grade} класс`}</p>
                          <p className = "sci-genre">{item.genre}</p>
                          <p className = "sci-meta">
                              <a href = '#/'>Подробнее</a>
                          </p>


                          {type === 'price' ? 
                              <button className = "sci-controls">{item.price} рублей</button>
                              : <button className = "sci-controls">{item.priceBonus} бонусов</button>}
                        </div>
                    </li>
                    )}) 
                 : ''}
            </ul>
		)
}

export default CoursesList;