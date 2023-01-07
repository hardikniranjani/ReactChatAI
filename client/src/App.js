// import logo from './logo.svg';
import './App.css';
import './custom.css';
import './normal.css';
function App() {
  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="side-menu-button">
          <span>+</span>
          New Chat
        </div>
      </aside>
      <section className="chatbox">
        <div className="chat-log">
          <div className="chat-message">
            <div className="chat-message-center">
              <div className="avatar">
                Me
              </div>
              <div className="message">
                Hello world
              </div>
            </div>
          </div>
        </div>
        <div className="chat-input-holder">
          <textarea
            className="chat-input-testarea"
            rows="1"
            cols="1"
            placeholder="Ask to ChatAI..."
          >
          </textarea>
        </div>
      </section>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
