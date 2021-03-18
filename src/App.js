import React,{Component} from 'react';
import ChangeBtn from './components/changeBtn';
import Courses from './components/courses';
import CoursesList from './components/coursesList';
import Loader from './components/loader';

class App extends Component {
   
  state = {
    data: '',
    filteredData: '',
    type: 'price',
    term: '',
    subject: '',
    genre: '',
    grade: '',
    coursesNotFound: null
  };

  async componentDidMount(){
      let response = await fetch('http://krapipl.imumk.ru:8082/api/mobilev1/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(this.state.data)
      });

      if (response.ok) { 
          let result = await response.json();
          this.setState({
            data: result.items,
            filteredData: result.items,
            coursesNotFound: true
          })
      } 
      else{
        alert("Ошибка HTTP: " + response.status);
      }
}

  filterName = (e) => {
    const value = e.target.value.toLowerCase();
    const filter = this.state.data.filter(item => {
      return item.subject.toLowerCase().includes(value);
    });
    this.setState({
      filteredData: filter,
      term:value,
    })
  }


  filterSubj = (e) => {
     const value = e.target.value;
     const {data, subject, genre, grade} = this.state;
     let filter;

     if(!genre && !grade){
        filter = data.filter(item => item['subject'] === value)
     }

     if(!value && !genre && !grade){
      filter = data
     }

     if(genre && !grade){
      filter = data.filter(item => item['subject'] === value && item['genre'] === genre)
     }

    if(!value && genre && !grade){
      filter = data.filter(item => item['genre'] === genre)
     }

    if(!genre && grade){
      filter = data.filter(item => item['subject'] === value && item['grade'].split(';').includes(grade))
     }

    if(!value && !genre && grade){
      filter = data.filter(item => item['grade'].split(';').includes(grade))
     }

     if(genre && grade){
      filter = data.filter(item => item['subject'] === value && item['grade'].split(';').includes(grade) 
      														 && item['genre'] === genre)
     }

    if(!value && genre && grade){
      filter = data.filter(item => item['grade'].split(';').includes(grade) && item['genre'] === genre)
     }


    this.setState({
      filteredData: filter,
      subject: value
      })
  }

  filterGenre = (e) => {
       const value = e.target.value;
       const {data, subject, genre, grade} = this.state;
       let filter;

       if(!subject && !grade){
          filter = data.filter(item => item['genre'] === value)
       }

      if(!value && !subject && !grade){
          filter = data;
       }

       if(subject && !grade){
        filter = data.filter(item => item['genre'] === value && item['subject'] === subject)
       }

       if(!value && subject && !grade){
        filter = data.filter(item => item['subject'] === subject)
       }

      if(!subject && grade){
        filter = data.filter(item => item['genre'] === value && item['grade'].split(';').includes(grade))
       }

      if(!value && !subject && grade){
        filter = data.filter(item => item['grade'].split(';').includes(grade))
       }

       if(subject && grade){
        filter = data.filter(item => item['genre'] === value && item['subject'] === subject 
        													 && item['grade'].split(';').includes(grade))
       }

       if(!value && subject && grade){
        filter = data.filter(item => item['subject'] === subject && item['grade'].split(';').includes(grade))
       }
       
       if(value && grade && !subject){
        filter = data.filter(item => item['genre'] === value && item['grade'].split(';').includes(grade))
       }

       this.setState({
          filteredData: filter,
          genre: value
       })
  }

  filterGrade = (e) => {
       const value = e.target.value;
       const {data, subject, genre, grade} = this.state;
       let filter;

       if(!subject && !genre){
          filter = data.filter(item => item['grade'].split(';').includes(value))
       }

       if(!value && !genre && !subject){
        filter = data
       }

       if(subject && !genre){
        filter = data.filter(item => item['grade'].split(';').includes(value) && item['subject'] === subject)
       }

       if(!value && subject && !genre){
        filter = data.filter(item => item['subject'] === subject)
       }

      if(!subject && genre){
        filter = data.filter(item => item['grade'].split(';').includes(value) && item['genre'] === genre)
       }

      if(!value && !subject && genre){
        filter = data.filter(item => item['genre'] === genre)
       }

       if(subject && genre){
        filter = data.filter(item => item['grade'].split(';').includes(value) && item['subject'] === subject 
        																	  && item['genre'] === genre)
       }

       if(!value && subject && genre){
        filter = data.filter(item => item['subject'] === subject && item['genre'] === genre)
       }

       this.setState({
          filteredData: filter,
          grade: value
       })
  }

  changeType = () => {
    const {type} = this.state;
    this.setState({
      type: type === 'price' ? 'bonuces' : 'price'
    })
  }

  render(){

    const {type, filteredData, coursesNotFound} = this.state;

    return(
      <div className = "container">
          <h1 className="u-text-center">Витрина</h1>
          <ChangeBtn changeType = {this.changeType} type = {type} />
          <Courses filterSubj = {this.filterSubj}
                   filterGenre = {this.filterGenre}
                   filterGrade = {this.filterGrade} 
                   filterName = {this.filterName}
                   term = {this.state.term} />
          {!this.state.data ? <Loader /> : <CoursesList filteredData = {filteredData} type = {this.state.type} />}
          {filteredData.length === 0 && coursesNotFound ? <h2 className="u-text-center">Курсы не найдены!!!</h2> : null}
      </div>
      )
  }

}
export default App;
