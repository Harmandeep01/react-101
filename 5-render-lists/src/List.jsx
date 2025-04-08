function List() {
  //Render simple lists with map() and sort()
  const fruits = ["Apple", "Pineapple", "Cherry", "Date", "Elderberry"];
  fruits.sort();
  const fruitList = fruits.map((fruit) => <li>{fruit}</li>);

  //Render Array of Objects with map()
  const people = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Jack", age: 26 },
    { id: 4, name: "Mike", age: 35 }
  ];

  // people.sort((a,b) => a.name.localeCompare(b.name)) // Alphabetically
  // people.sort((a,b) => b.name.localeCompare(a.name)) // ReverseAlphabetically
  // people.sort((a,b) => a.age - b.age) // Numerically by age
  // people.sort((a,b) => b.age - a.age) // Numerically by Reverse age

  const peopleList = people.map((person) => (
    <li key={person.id}>
      {person.name} : &nbsp;
      <b>{person.age}</b>
    </li>
  ));

  //Filtering:

  //Filter Persons age < 30
  const youngPeople = people.filter((person) => person.age < 30); //Age less than 30
  const youngPeopleList = youngPeople.map((youngPerson) => (
    <li key={youngPerson.id}>
        {youngPerson.name}: &nbsp;
        {youngPerson.age}
    </li>
  ) )


  //Filter Persons age >= 30
  const midAgedPeople = people.filter((person) => person.age >= 30); //Age >= 30
  const midAgedList = midAgedPeople.map((minAgedPerson) => (
    <li key={minAgedPerson.id}>
      {minAgedPerson.name} : &nbsp;
      <b>{minAgedPerson.age}</b>
    </li>
  ));

  return (
    <>
      <ol>
        <h4>Fruits</h4>
      </ol>
      <ul>{fruitList}</ul>
      <ol>
        <h4>People</h4>
      </ol>
      <ul>{peopleList}</ul>
      <ol>
        <h4>People less than age 30</h4>
      </ol>
      <ul>{youngPeopleList}</ul>
      <ol>
        <h4>People more than or equals to age 30</h4>
      </ol>
      <ul>{midAgedList}</ul>
    </>
  );
}

export default List;
