import css from "./PeopleList.module.css";

const PeoplesList = ({ peoples }) => {
  return (
    <ul className={css.list}>
      {peoples?.map(({ age, lastname, name, sex }, indx) => {
        return (
          <li key={indx}>
            <h2>{name + " " + lastname}</h2>
            <p>Возраст: {age}</p>
            <p>Пол: {sex}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default PeoplesList;
