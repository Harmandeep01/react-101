/*props : Props are read-only 
  attributes that are passed 
  from a parent component to a 
  child component. 
  They are used to pass data and
  event handlers down the component 
  tree. Props are immutable, meaning
  that a child component cannot modify
  the props it receives from its parent. This 
  immutability helps maintain a unidirectional
  data flow in React applications.
*/
import Student from './Student'
function App() {
  return(
<>
  <Student />
  <Student name="John" age={20} isStudent={false} />
  <Student name="Patrick" age={42} isStudent={true} />
  <Student name="Squidward" age={30} isStudent={false} />
  </>
  )
  
}   

export default App