import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { RouterConfig } from "./router/index";
import "./mock/index.js"; //导入mockjs 模拟数据
import { Provider } from "mobx-react";
import stores from "./store";
ReactDOM.render(
    <Provider {...stores}>
        <RouterConfig />
    // </Provider>
    ,document.getElementById("root")
);

serviceWorker.unregister();
