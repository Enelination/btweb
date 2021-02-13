import Home from "./components/Pages/Home";
import PageWrapper from "./components/PageWrapper";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./components/Pages/About";

function App() {
  return (
    <Router>
      <PageWrapper>
        <Route exact={true} path="/" component={Home} />
        <Route path="/about" component={About} />
        {/* <Route path="/contact" component={Contact} /> */}
      </PageWrapper>
    </Router>
  );
}

export default App;
