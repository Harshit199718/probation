import { BrowserRouter, Route, Switch } from "react-router-dom"
import Landing from "./pages/landing/landing";
import "./styles/index.scss"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
