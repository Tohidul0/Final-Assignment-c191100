import { createContext, useEffect, useState } from "react";
export const EntriesContext = createContext();

export function EntriesProvider({ children }) {
  const [entries, setEntries] = useState(function () {
    const value = localStorage.getItem("entries");
    console.log(JSON.parse(value))
    // fetch("http://localhost:3000/entries")
    // .then (res => res.json())
    // .then( data => console.log(data))
     let data;
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3000/entries');
         data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error:', error);
      }
    }
    
    fetchData();

    
    if (!data) return [];
    return JSON.parse(data);
  });

  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  const totalIncome = entries
    .filter((entry) => entry.type === "income")
    .reduce((prev, entry) => prev + entry.value, 0);

  const totalExpense = entries
    .filter((entry) => entry.type === "expense")
    .reduce((prev, entry) => prev + entry.value, 0);

  return (
    <EntriesContext.Provider
      value={{ entries, setEntries, totalIncome, totalExpense }}
    >
      {children}
    </EntriesContext.Provider>
  );
}
