import { formatMoney } from "../utils/format-money";
import { useEntries } from "../hooks/useEntries";

//global variable----------------------------------
let newEntries;






export default function ExpenseList() {


  const { entries, setEntries } = useEntries();
  const expenseEntries = entries.filter((entry) => entry.type === "expense");



// updatee data all when click delete button------------------------------------------
function updateData(id,entries){
  console.log(id)
  document.getElementById(id).style.display="none";
   newEntries = entries.filter((entry) =>entry.id !== id)
   setEntries(newEntries)
   console.log(entries)
 }

//  -------------------------------------------

 //edited data updete when click edit button and give both pormt valueee  -------------------------------------------

 function editData(id ,entries){
  const name= prompt('income-catagory')
  //console.log(name)
  const amount =parseFloat(prompt('ammount'))
  //console.log(amount)
  
  const editEntries = entries.filter((entry) =>entry.id === id)
  editEntries[0].title=name;
  editEntries[0].value=amount;
  console.log(editEntries)
  newEntries = entries.map((entry) =>entry)
  setEntries(newEntries)
  
}
  
  return (
    <div>
      <div className="flex gap-28">
      <h2 className="border-b pb-2 font-medium text-red-600">Expense</h2>
      <h2 className="border-b pb-2 font-medium text-red-600">Catagory</h2>
      </div>

      {expenseEntries.length === 0 && (
        <p className="py-2.5 text-gray-600">There are no expenses.</p>
      )}

      <ul id="expense-list" className="divide-y">
        {expenseEntries.map((item) => {
          return (
            <li id={item.id} key={item.id} className="py-2.5">
              <div className="group flex justify-between gap-2 text-sm">
                <span>{item.title}</span>

                <span>{item.cattitle}</span>
                <div>
                  <span className="text-red-600">
                    -{formatMoney(item.value)}
                  </span>
                  <span onClick={()=>updateData(item.id, entries)} className="ml-2 hidden cursor-pointer font-medium text-red-500 group-hover:inline-block">
                    Delete
                  </span>
                  <span onClick={()=>editData(item.id, entries)} className="ml-2 hidden cursor-pointer font-medium text-red-500 group-hover:inline-block">
                    Edit
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
