
import './App.css';
import Leftcom from './Leftcom';
import Rightcomponent from './Rightcomponent';


function App() {
  return (
    < div className="App lg:flex  bg-[ #F8F8F8] ">
      <div className="hidden bg-black	"></div>
      <div className="main-class
     flex flex-col lg:flex justify-start mx-5 md:mx-10 mt-6 lg:justify-end">
        <h1 className="mb-3 items-start flex ml-1.5 text-[32px] font-bold leading-10">Order summary</h1>
        <div className="flex flex-col justify-between lg:flex-row gap-6">
          <Leftcom />
          <Rightcomponent />
        </div>
      </div>
    </div>
  );
}

export default App;
