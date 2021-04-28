import { Header } from "./components/Header/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import "../src/styles/theme.scss";
import { Features } from "./components/Features/Features";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/features" component={Features} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
