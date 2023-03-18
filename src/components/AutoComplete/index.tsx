import "./styles.css";
import { useEffect, useState } from "react";
import { Results } from "./types";
import { results } from "./mock";

const AutoComplete = () => {
  const [inputText, setInputText] = useState<string>("");
  const [filteredResults, setFilteredResults] = useState<Results[]>([]);

  const handleInputSearch = async (value: string) => {
    setInputText(value);

    if (value !== "")
      await searchResults(value)
        .then((results) => {
          setFilteredResults([...results]);
        })
        .catch((error) => console.log("There is a error with the Fake API"));
  };

  const handleClickResult = (value: string) => {
    setInputText(value);
    setFilteredResults([]);
  };

  const searchResults = async (input: string): Promise<Results[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtered = results.filter((value) => {
          return value.title.toLowerCase().includes(input.toLocaleLowerCase());
        });
        return resolve([...filtered]);
      }, Math.random() * 1000);
    });
  };

  useEffect(() => {
    if (inputText === "") setFilteredResults([]);
  }, [inputText]);

  return (
    <div className="auto-complete">
      <input
        id="input"
        className="input"
        type="text"
        value={inputText}
        placeholder="model name"
        onChange={(e) => handleInputSearch(e.currentTarget.value)}
      />
      {inputText !== "" && (
        <button className="close" onClick={() => setInputText("")}>
          close
        </button>
      )}
      <ul className="results">
        {filteredResults.map((item) => (
          <li tabIndex={item.id} aria-label={item.title} key={item.id}>
            <a href="#input" onClick={() => handleClickResult(item.title)}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AutoComplete;
