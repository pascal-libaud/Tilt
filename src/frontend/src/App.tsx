import React, { createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { setCurrentDateTime, currentDateTime } from './helper/datetime';
import { _currentDatetime } from './infrastructure/datetime';
import { Repositories } from './application/repositories';
import { _createRepositories } from './infrastructure/repositories';
import { Main } from './ui/app-components/main';

export const RepositoriesContext = createContext<Repositories>(undefined!);

function App() {
  setCurrentDateTime(_currentDatetime);
  const dt = currentDateTime();

  return (
    <RepositoriesContext.Provider value={_createRepositories()}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" width={125} height={125} />
          TILT
        </header>
        <body className="App-body">
          <Main />
        </body>
        <footer className="App-footer">
          <p>{dt}</p>
        </footer>
      </div>
    </RepositoriesContext.Provider>
  );
}

export default App;
