import { setCurrentDateTime } from './helper/datetime';
import { _currentDatetime } from './infrastructure/datetime';
import { _createRepositories } from './infrastructure/repositories';
import { RepositoriesContext } from './ui/repositories-context';
import Main from './ui/app-components/main';
import Header from './ui/app-components/header';
import Footer from './ui/app-components/footer';

import './App.css';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  setCurrentDateTime(_currentDatetime); // DI

  return (
    <RepositoriesContext.Provider value={_createRepositories()}>
      <div className="app-container d-flex flex-column min-vh-100">

        <div className="p-3">
          <Header />
        </div>


        <div className="flex-grow-1 d-flex p-3">
          <Main />
        </div>

        <div className="p-3">
          <Footer />
        </div>

      </div>
    </RepositoriesContext.Provider>
  );
}

export default App;
