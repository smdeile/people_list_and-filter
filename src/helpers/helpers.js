export const filterPeoplesList = (arr, query) => {
  let newArr = [...arr];
  const arrOfKeys = Object.keys(query);

  newArr.map((people) =>
    arrOfKeys.map((key) => {
      if (people[key] && query[key]) {
        const filteredArr = newArr.filter((item) => {
          const checkElement =
            typeof item[key] === "number"
              ? item[key].toString()
              : item[key].toLowerCase();

          return checkElement.includes(query[key].toLowerCase());
        });

        newArr = [...filteredArr];
      } else if (typeof query[key] === "boolean" && query[key] === false) {
        const genderFind = newArr.filter((item) => {
          if (key !== "male") {
            return item.sex === "m";
          }
          if (key !== "female") {
            return item.sex === "f";
          }
        });
        return (newArr = [...genderFind]);
      }
    })
  );

  return newArr;
};
