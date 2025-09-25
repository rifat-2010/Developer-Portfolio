import './App.css'
import { Suspense } from 'react';
import BoxComponent from './components/BoxComponent/BoxComponent'
import Fotter from './components/Fotter/Fotter'
import MainSection from './components/MainSection/MainSection'
import Navber from './components/Navber/Navber'
import bgImg from './components/vector1.png'

const fetchPromises = async () => {
  const result = await fetch("/data.json");
  return result.json();
};
let fetchPromise = fetchPromises();

function App() {
  
  return (
    <>
    <Navber></Navber>
    <BoxComponent bgImg={bgImg}></BoxComponent>
     <Suspense fallback={<div><span class="loading loading-spinner loading-xl"></span></div>}> 
                <MainSection fetchPromise={fetchPromise}></MainSection>
            </Suspense>
    <Fotter></Fotter>
    </>
  )
}

export default App
