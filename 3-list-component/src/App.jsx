import List from "./List"

function App() {

  const fruits = [
    {name:"Apple", calories: 120},
    {name:"Kiwi", calories: 90},
    {name:"Pineapple", calories: 80},
    {name:"banana", calories: 50},
  ]
  const veggies = [
    {name:"Brocoli", calories: 50},
    {name:"Potatoes", calories: 55},
    {name:"Tomatoes", calories: 40},
    {name:"Spinach", calories: 35},
    
  ]

  return (
    <>
      {fruits.length > 0 && <List item={fruits} category="Fruits"/>}
      {veggies.length > 0 && <List item={veggies} category="Vegetables" />}
    </>
  )
}

export default App
