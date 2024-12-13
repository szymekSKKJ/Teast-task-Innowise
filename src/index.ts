import { calculatorButtons } from "./components/calculatorButtons/calculatorButtons";
import "./styles/global.scss";
import { render } from "./utils/render";

const calculatorButtonsElement = document.getElementById("calculatorButtons")!;
render(calculatorButtonsElement, calculatorButtons());
