import Chat from './components/chat/Chat';
import Connection from './components/connection/Connection';
import Header from './components/header/Header';
import Player from './components/player/Player';

function App() {
  return (
    <>
      <Header></Header>
      <main className="main">
        <div className="main__info">
          <Player />
          <Chat />
        </div>
        <div>
          <Connection />
        </div>
      </main>
    </>
  );
}

export default App;
