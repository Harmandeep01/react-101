
function List(props) {
  const items = props.item ? props.item : [];
  const category = props.category ? props.category : "Category";

  const itemList = items.map((itemName) => (
    <li key={itemName.name}>
        {itemName.name}: &nbsp;
      <b>{itemName.calories}</b>
    </li>
  ));

  return (
    <>
    <table>
      <th></th>
    </table>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{itemList}</ol>
    </>
  );
}

export default List;
