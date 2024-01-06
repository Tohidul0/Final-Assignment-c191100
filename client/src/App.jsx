import AddEntry from "./components/AddEntry";
import Header from "./components/Header";
import Listing from "./components/Listing";
import { EntriesProvider } from "./context/EntriesContext";

// Tohidul alam akil added--------------------------------
// function updateData(id){
//   console.log(id)
//   document.getElementById(id).style.display="none";
//  }
//  ----------------------------------------------------


function App() {
  return (
    <EntriesProvider>
      <Header />
      <AddEntry />
      <Listing />
    </EntriesProvider>
  );
}

export default App;
