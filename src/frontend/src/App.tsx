import { setCurrentDate } from './shared/datetime';
import { infraCurrentDate } from './infrastructure/datetime';
import { ChannelRepositoryContext, UserRepositoryContext } from './ui/repositories-context';
import { useChannelRepository, useUserRepository } from './infrastructure/repositories';
import Main from './ui/app-components/main';
import Header from './ui/app-components/header';
import Footer from './ui/app-components/footer';

import './App.css';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  setCurrentDate(infraCurrentDate);

  return (
    <UserRepositoryContext.Provider value={useUserRepository()}>
      <ChannelRepositoryContext.Provider value={useChannelRepository()}>
        <div className="app-container">
          <Header />
          <Main />
          <Footer />
        </div>
      </ChannelRepositoryContext.Provider>
    </UserRepositoryContext.Provider>
  );
}

export default App;
