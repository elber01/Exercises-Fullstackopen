
//we define App components
const App = () => {
  const course ={ 
   name: 'Half Stack application development',
   parts : [
  {
    name: 'Fundamentals of React',
    exercises: 10
  },
  
   {
    name: 'Using props to pass data',
    exercises: 7
  },
  
    {
    name: 'State of a component',
    exercises: 14
  }
]
  }
//We define here the way we want everything to appear at the page
  // we define the Header component
const Header = course.parts.reduce((sum,part) => sum+part.exercises,0)
return (
  <div>
    <h1>{course.name}</h1>
    
      {course.parts.map((part, index) => (
        <li key={index}>
          {part.name}  {part.exercises} 
            
         </li>
   
      ))}
      <p>Nomber of exercises: {Header}</p>    
   
     </div>
);


}

export default App