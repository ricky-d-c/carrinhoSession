import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./styles.css";

import Teste from "./InfoX/teste";
import Contador from "./InfoX/comunicacaoComps/contador";

import App from "./InfoX/home";
import DetalheProduto from "./InfoX/detalheProduto";
import Carrinho from "./InfoX/carrinho";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/detalhe" component={DetalheProduto} />
        <Route path="/carrinho" component={Carrinho} />

        <Route path="/teste" component={Teste} />
        <Route path="/infoX/contador" exact={true} component={Contador} />
      </Switch>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
