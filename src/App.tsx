import logo from "./logo.svg";

function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-purple-900 text-white">
      <header className="text-center">
        <img src={logo} className="w-96 inline-block" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          href="https://www.youtube.com/channel/UCyvTBDsdFcJ6bTYgSQKpKlg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React and TailwindCss with ITerando
        </a>
      </header>
    </div>
  );
}

export default App;
