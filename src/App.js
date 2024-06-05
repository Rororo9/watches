import React, { useState } from 'react';
import Clock from './components/Clock';
import './App.css';

const App = () => {
  const [clocks, setClocks] = useState([]);
  const [cityName, setCityName] = useState('');
  const [timezoneOffset, setTimezoneOffset] = useState('');

  const addClock = (e) => {
    e.preventDefault();
    setClocks([...clocks, { cityName, timezoneOffset: parseInt(timezoneOffset) }]);
    setCityName('');
    setTimezoneOffset('');
  };

  const removeClock = (index) => {
    setClocks(clocks.filter((_, i) => i !== index));
  };

  return (
      <div className="App">
        <h1>Мировые часы</h1>
        <form onSubmit={addClock}>
          <input
              type="text"
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
              placeholder="Название города"
              required
          />
          <input
              type="number"
              value={timezoneOffset}
              onChange={(e) => setTimezoneOffset(e.target.value)}
              placeholder="Временная зона (смещение от UTC)"
              required
          />
          <button type="submit">Добавить</button>
        </form>
        <div className="clocksContainer">
          {clocks.map((clock, index) => (
              <Clock
                  key={index}
                  cityName={clock.cityName}
                  timezoneOffset={clock.timezoneOffset}
                  onRemove={() => removeClock(index)}
              />
          ))}
        </div>
      </div>
  );
};

export default App;

