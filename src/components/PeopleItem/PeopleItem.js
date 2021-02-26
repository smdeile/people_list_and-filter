const PeopleItem = ({ people }) => {
  const { name, lastname, age, sex } = people;

  return (
    <li>
      <h2>{name + " " + lastname}</h2>
      <p>Возраст: {age}</p>
      <p>Пол: {sex === "m" ? "мужской" : "женский"}</p>
    </li>
  );
};

export default PeopleItem;
