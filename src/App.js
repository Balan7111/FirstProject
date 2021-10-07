import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="header">
        <div className="header__left">
          <p><a href="https://www.simplesite.com/">SimpleSite</a></p>
          <p>Try for free</p>
          <p>Customer Services</p>
          <p>Features</p>
          <p>Themes</p>
        </div>

        <div className="header__right">
          <p>Login</p>
          <p>English</p>
        </div>
      </div>

      <div className="content">
        <h1>Create your website in three simple steps</h1>
        <p>- 30-day free trial! -</p>
        <button>Start Here</button>
      </div>
    </div>
  );
}

export default App;
