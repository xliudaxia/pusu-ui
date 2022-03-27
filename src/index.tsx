// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// library.add(fas);

// export { default as Button } from "./components/Button";
// export { default as Menu } from "./components/Menu";
// export { default as Icon } from "./components/Icon";

import ReactDOM from "react-dom";
import "./styles/index.scss";
import BigInput from './components/Input/BigInput'

ReactDOM.render(<BigInput></BigInput>, document.getElementById("root"));
