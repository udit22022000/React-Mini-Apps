import React from "react";
import { v4 as uuid } from "uuid";
const data = [
  "Udit",
  "Udit",
  "Udit",
  "Udit",
  "Udit",
  "Uditan",
  "Uditan",
  "Uditan",
  "Uditan",
  "Uditan",
  "Uditan",
  "Uditanshu",
  "Uditanshu",
  "Uditanshu",
  "Uditanshu",
  "Uditanshu",
];

const newData = [];
for (var ele of data) {
  newData.push({ data: ele, id: uuid() });
}

const SearchBar1 = () => {
  const [wordList, setWordList] = React.useState([]);
  const [word, setWord] = React.useState(" ");
  const [start, setStart] = React.useState(0);
  const [end, setEnd] = React.useState(5);
  const wordParent = React.useRef();

  const handleChange = (e) => {
    setWord(e.target.value);
  };

  React.useEffect(() => {
    const matchedWords = newData.filter((ele) => ele.data.indexOf(word) !== -1);
    setWordList(matchedWords);
  }, [word]);

  return (
    <div>
      <input
        type="text"
        placeholder="search word"
        value={word}
        onChange={handleChange}
        onKeyPress={(e) => {
          console.log(e.keyCode);
          // setStart((prev) => prev + 1);
        }}
      />
      <div
        style={{ width: "200px", height: "200px", border: "1px solid black" }}
        ref={wordParent}
        onKeyPress={(e) => {
          console.log(e.key);
          // setStart((prev) => prev + 1);
        }}
      >
        {wordList.slice(start, end).map((ele) => (
          <div key={ele.id}>{ele.data}</div>
        ))}
      </div>
    </div>
  );
};

export { SearchBar1 };
