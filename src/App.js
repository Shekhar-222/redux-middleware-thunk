import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from './_actionCreators';


function App() {

  let storeObjectData =  useSelector(store=>store)
  let dispatch = useDispatch()
  
  
  return (
    <div>
      {console.log(storeObjectData)}
      <button onClick={()=>{dispatch(getUserData())}}>call api</button>
      <ul>
         {storeObjectData && storeObjectData.map((cv,idx,arr)=>{
           return<li key={idx}>{cv.first_name}</li>
         })}
      </ul>
    </div>
  );
}

export default App;
