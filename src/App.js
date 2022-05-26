import './App.css';
import { useEffect, useState } from 'react';
import HeroesList from './components/HeroesList';
import { useHeroes } from './hooks/useHeroes';
import HeroView from './components/HeroView';
import Title from './components/Title';
import { Context } from './store/store';

function App() {

  const { state, dispatch, isReady } = useHeroes();

  const [heroActif, setHero] = useState(null);

  const [view, setView] = useState('list');


  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="App">
        <Title title={'Heroes list'} />
        {view === 'list' ? (isReady ? <HeroesList onPress={setView} setHero={setHero} title={'Mes heros'} /> : null) : <HeroView hero={heroActif} setView = {setView} />}
      </div>
    </Context.Provider>
  );
}

export default App;
