import React from 'react';
import FilterSubj from './filterSubj';
import FilterGenre from './filterGenre';
import FilterGrade from './filterGrade';
import FilterName from './filterName';

const Courses = ({filterSubj, filterGenre, filterGrade, filterName, term}) => {
	return (
		<div className = "courses">
                <FilterSubj filterSubj = {filterSubj} />
                <FilterGenre filterGenre = {filterGenre} />
                <FilterGrade filterGrade = {filterGrade} />
                <FilterName filterName = {filterName} term = {term} />
        </div>

		)
}

export default Courses;