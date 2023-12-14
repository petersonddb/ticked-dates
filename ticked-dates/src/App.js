import './App.css';
import Menu from './Menu/Menu';
import TickedDates from './TickedDates/TickedDates';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <main className="app-container">
      <Router>
        <Menu className="menu" />

        <Switch>
          <Route path="/ticked-dates">
            <TickedDates className="ticked-dates" />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
