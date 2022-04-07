import React from "react";
import ReactDOM from "react-dom";
import App from "./client/component/App";
import Loginfirst from "./presentation/loginfirst";
import "./client/css/styles/index.scss";
import "./style.css"
import First from "./presentation/first";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./client/component/reducers";
import { getUsers } from "./client/component/actions/users.actions";
// dev tools
import { composeWithDevTools } from "redux-devtools-extension";
import { getPosts } from "./client/component/actions/post.actions";
import { BrowserRouter } from "react-router-dom";
import StandardImageList from "./composant-ui/image.accueil";


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(getUsers());
store.dispatch(getPosts());

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <First />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

