export const filterPeoplesListByName = (arr, query) => {
  let newArr = [...arr];
  const arrOfKeys = Object.keys(query);

  newArr.map((people) => {
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
        const genderF = newArr.filter((item) => {
          if (key === "male") {
            return item.sex === "f";
          }
          if (key === "female") {
            return item.sex === "m";
          }
        });
        newArr = [...genderF];
      }
    });
  });

  return newArr;
};
