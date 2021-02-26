import React from "react";
import css from "./FindPeopleForm.module.css";

const FindPeopleForm = ({ query, handleChange }) => {
  const { name, lastname, age, male, female } = query;

  return (
    <section className={css.wrapper}>
      <h2 className={css.borderBottom}>Фильтры</h2>
      <label htmlFor={name} className={`${css.textLabel} ${css.borderBottom}`}>
        Имя
        <input
          type="text"
          name="name"
          id={name}
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className={`${css.textLabel} ${css.borderBottom}`}>
        Фамилия
        <input
          type="text"
          name="lastname"
          value={lastname}
          onChange={handleChange}
        />
      </label>
      <label className={`${css.textLabel} ${css.borderBottom}`}>
        Возраст
        <input type="text" name="age" value={age} onChange={handleChange} />
      </label>
      <div className={`${css.checkboxWrapper} ${css.borderBottom}`}>
        <h2>Пол</h2>
        <div className={css.checkboxesBlock}>
          <label>
            М
            <input
              type="checkbox"
              checked={male}
              name="male"
              onChange={handleChange}
            />
          </label>
          <label>
            Ж
            <input
              type="checkbox"
              checked={female}
              name="female"
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
    </section>
  );
};

export default FindPeopleForm;
