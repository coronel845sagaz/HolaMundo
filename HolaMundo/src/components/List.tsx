function List() {
  let items = [
    "Patatas Fritas",
    "Patatas Bravas",
    "Patatas Deluxe",
    "Patatas Asadas",
    "Patatas Gajo",
    "Patatas"
  ];

  return (
    <div>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;