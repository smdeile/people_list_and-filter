import React, { useState, useEffect } from "react";
import { fetchPeople } from "../services/api";
import FindPeopleForm from "./FindPeolpleForm/FindPeopleForm";
import PeoplesList from "./PeoplesList/PeoplesList";
import * as helpers from "../helpers/helpers";

function App() {
  const [peoples, setPeoples] = useState([]);
  const [error, setError] = useState(null);

  const [query, setQuery] = useState({
    name: "",
    lastname: "",
    age: "",
    male: true,
    female: true,
  });

  useEffect(() => {
    fetchPeople()
      .then(({ data }) => setPeoples(data))
      .catch((err) => {
        setError(err);
      });
  }, []);

  const handleChange = (e) => {
    setQuery({
      ...query,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const filteredPeoplesByQuery = helpers.filterPeoplesListByName(
    peoples,
    query
  );

  return (
    <div className="App">
      {error && "Something going wrong"}
      {!!peoples.length && (
        <>
          <FindPeopleForm query={query} handleChange={handleChange} />
          <PeoplesList peoples={filteredPeoplesByQuery} />
        </>
      )}
    </div>
  );
}

export default App;
