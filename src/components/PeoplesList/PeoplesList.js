import css from "./PeopleList.module.css";
import PeopleItem from "../PeopleItem/PeopleItem";

const PeoplesList = ({ peoples }) => {
  return (
    <ul className={css.list}>
      {peoples?.map((people, indx) => {
        return <PeopleItem key={indx} people={people} />;
      })}
    </ul>
  );
};

export default PeoplesList;
