import React, { useState, Suspense } from 'react';
import BoxComponent from './components/BoxComponent/BoxComponent'
import Fotter from './components/Fotter/Fotter'
import MainSection from './components/MainSection/MainSection'
import Navber from './components/Navber/Navber'
import bgImg from './components/vector1.png'

// Create the promise OUTSIDE the component to prevent re-creation on re-renders
const fetchPromise = fetch("/data.json").then(res => res.json());

function App() {
  const [inProgressCount, setInProgressCount] = useState(0);
  const [ResolvedCount, setResolvedCount] = useState(0);

  const handleCardClick = () => {
    setInProgressCount(prevCount => prevCount + 1);
  };
  const handleResolvedCount = () => {
    setResolvedCount(prevCount => prevCount + 1);
    setInProgressCount(prevCount => prevCount - 1);
  };

  return (
    <>
    <Navber></Navber>
    <BoxComponent bgImg={bgImg} inProgressCount={inProgressCount} ResolvedCount={ResolvedCount}></BoxComponent>
    <Suspense fallback={<div><span className="loading loading-spinner loading-xl"></span></div>}>
      <MainSection handleCardClick={handleCardClick} handleResolvedCount={handleResolvedCount} fetchPromise={fetchPromise}></MainSection>
    </Suspense>
    <Fotter></Fotter>
    </>
  )
}

export default App