import { setCurrentDate } from './shared/datetime';
import { infraCurrentDate } from './infrastructure/datetime';
import { _createRepositories } from './infrastructure/repositories';
import { RepositoriesContext } from './ui/repositories-context';
import Main from './ui/app-components/main';
import Header from './ui/app-components/header';
import Footer from './ui/app-components/footer';

import './App.css';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  setCurrentDate(infraCurrentDate);

  return (
    <RepositoriesContext.Provider value={_createRepositories()}>
      <div className="app-container">
        <Header />
        <Main />
        <Footer />
      </div>
    </RepositoriesContext.Provider>
  );
}

export default App;
