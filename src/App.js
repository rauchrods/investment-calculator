import { useState } from 'react';
import DisplayForm from './Components/DisplayForm';
import DisplayTable from './Components/DisplayTable';
import Header from './Components/Header';


function App() {

  let [yearlyData, setyearlyData] = useState([]);


  return (
    <div>

      <Header />

      <DisplayForm   setyearlyData = {setyearlyData}/>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      {yearlyData.length>0 &&  <DisplayTable yearlyData = {yearlyData}/>}
    </div>
  );
}

export default App;
