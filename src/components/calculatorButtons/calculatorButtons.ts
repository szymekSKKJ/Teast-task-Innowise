import * as styles from "./styles.module.scss";
import * as buttonStyles from "./calculatorButton/styles.module.scss";
import { createElement } from "../../utils/createElement";
import { calculatorButton } from "./calculatorButton/calculatorButton";
import { randomUUID } from "../../utils/randomUUID";
import { render } from "../../utils/render";

type OperationsTypes = "multiplication" | "subtraction" | "division" | "addition" | "percentage";

const updateCalculatorValue = (value: string) => {
  const calculatorValueElement = document.getElementById("value")!;

  render(calculatorValueElement, [createElement("span", {}, {}, `${value}`)]);
};

export const calculatorButtons = () => {
  const operations: {
    type: OperationsTypes;
    callback: (number1: number, number2?: number) => number;
  }[] = [
    {
      type: "multiplication",
      callback: (number1: number, number2: number) => {
        return number1 * number2;
      },
    },
    {
      type: "subtraction",
      callback: (number1: number, number2: number) => {
        return number1 - number2;
      },
    },
    {
      type: "division",
      callback: (number1: number, number2: number) => {
        return number1 / number2;
      },
    },
    {
      type: "addition",
      callback: (number1: number, number2: number) => {
        return number1 + number2;
      },
    },
    {
      type: "percentage",
      callback: (number1: number) => {
        return number1 / 100;
      },
    },
  ];

  let value = 0;
  let value1 = 0;
  let currentOperationType: null | OperationsTypes = null;

  const buttons: {
    id: string;
    iconHref: string | null;
    callback: () => void;
    content: string | null;
    className: string;
  }[][] = [
    [
      {
        id: randomUUID(),
        iconHref: null,
        callback: () => {
          value = 0;
          value1 = 0;
          currentOperationType = null;
          updateCalculatorValue("0");
        },
        content: "AC",
        className: `${buttonStyles.functional}`,
      },
      {
        id: randomUUID(),
        iconHref: "public/icons/plus-minus-solid.svg",
        callback: () => {},
        content: null,
        className: `${buttonStyles.functional}`,
      },
      {
        id: randomUUID(),
        iconHref: "public/icons/percent-solid.svg",
        callback: () => {
          currentOperationType = "percentage";

          const foundOperation = operations.find((data) => data.type === currentOperationType);

          if (foundOperation) {
            const results = foundOperation.callback(value);

            updateCalculatorValue(`${results}`);
            value = results;
            value1 = 0;
            currentOperationType = null;
          }
        },
        content: null,
        className: `${buttonStyles.functional}`,
      },
      {
        id: randomUUID(),
        iconHref: "public/icons/divide-solid.svg",
        callback: () => {
          currentOperationType = "division";
        },
        content: null,
        className: `${buttonStyles.functional}`,
      },
    ],
    [
      {
        id: randomUUID(),
        iconHref: null,
        callback: () => {
          if (currentOperationType === null) {
            value = parseFloat(`${value}7`);
            updateCalculatorValue(`${value}`);
          } else {
            value1 = parseFloat(`${value1}7`);
            updateCalculatorValue(`${value1}`);
          }
        },
        content: "7",
        className: "",
      },
      {
        id: randomUUID(),
        iconHref: null,
        callback: () => {
          if (currentOperationType === null) {
            value = parseFloat(`${value}8`);
            updateCalculatorValue(`${value}`);
          } else {
            value1 = parseFloat(`${value1}9`);
            updateCalculatorValue(`${value1}`);
          }
        },
        content: "8",
        className: "",
      },
      {
        id: randomUUID(),
        iconHref: null,
        callback: () => {
          if (currentOperationType === null) {
            value = parseFloat(`${value}9`);
            updateCalculatorValue(`${value}`);
          } else {
            value1 = parseFloat(`${value1}9`);
            updateCalculatorValue(`${value1}`);
          }
        },
        content: "9",
        className: "",
      },
      {
        id: randomUUID(),
        iconHref: "public/icons/xmark-solid.svg",
        callback: () => {
          currentOperationType = "multiplication";
        },
        content: null,
        className: `${buttonStyles.functional}`,
      },
    ],
    [
      {
        id: randomUUID(),
        iconHref: null,
        callback: () => {
          if (currentOperationType === null) {
            value = parseFloat(`${value}4`);
            updateCalculatorValue(`${value}`);
          } else {
            value1 = parseFloat(`${value1}4`);
            updateCalculatorValue(`${value1}`);
          }
        },
        content: "4",
        className: "",
      },
      {
        id: randomUUID(),
        iconHref: null,
        callback: () => {
          if (currentOperationType === null) {
            value = parseFloat(`${value}5`);
            updateCalculatorValue(`${value}`);
          } else {
            value1 = parseFloat(`${value1}5`);
            updateCalculatorValue(`${value1}`);
          }
        },
        content: "5",
        className: "",
      },
      {
        id: randomUUID(),
        iconHref: null,
        callback: () => {
          if (currentOperationType === null) {
            value = parseFloat(`${value}6`);
            updateCalculatorValue(`${value}`);
          } else {
            value1 = parseFloat(`${value1}6`);
            updateCalculatorValue(`${value1}`);
          }
        },
        content: "6",
        className: "",
      },
      {
        id: randomUUID(),
        iconHref: "public/icons/minus-solid.svg",
        callback: () => {
          currentOperationType = "subtraction";
        },
        content: null,
        className: `${buttonStyles.functional}`,
      },
    ],
    [
      {
        id: randomUUID(),
        iconHref: null,
        callback: () => {
          if (currentOperationType === null) {
            value = parseFloat(`${value}1`);
            updateCalculatorValue(`${value}`);
          } else {
            value1 = parseFloat(`${value1}1`);
            updateCalculatorValue(`${value1}`);
          }
        },
        content: "1",
        className: "",
      },
      {
        id: randomUUID(),
        iconHref: null,
        callback: () => {
          if (currentOperationType === null) {
            value = parseFloat(`${value}2`);
            updateCalculatorValue(`${value}`);
          } else {
            value1 = parseFloat(`${value1}2`);
            updateCalculatorValue(`${value1}`);
          }
        },
        content: "2",
        className: "",
      },
      {
        id: randomUUID(),
        iconHref: null,
        callback: () => {
          if (currentOperationType === null) {
            value = parseFloat(`${value}3`);
            updateCalculatorValue(`${value}`);
          } else {
            value1 = parseFloat(`${value1}3`);

            updateCalculatorValue(`${value1}`);
          }
        },
        content: "3",
        className: "",
      },
      {
        id: randomUUID(),
        iconHref: "public/icons/plus-solid.svg",
        callback: () => {
          currentOperationType = "addition";
        },
        content: null,
        className: `${buttonStyles.functional}`,
      },
    ],
    [
      {
        id: randomUUID(),
        iconHref: null,
        callback: () => {
          if (currentOperationType === null) {
            value = parseFloat(`${value}0`);
            updateCalculatorValue(`${value}`);
          } else {
            value1 = parseFloat(`${value1}0`);
            updateCalculatorValue(`${value1}`);
          }
        },
        content: "0",
        className: `${buttonStyles.doubleSize}`,
      },
      {
        id: randomUUID(),
        iconHref: null,
        callback: () => {
          updateCalculatorValue(`${value}`);
        },
        content: ",",
        className: "",
      },
      {
        id: randomUUID(),
        iconHref: "public/icons/equals-solid.svg",
        callback: () => {
          const foundOperation = operations.find((data) => data.type === currentOperationType);

          if (foundOperation) {
            const results = foundOperation.callback(value, value1);

            updateCalculatorValue(`${results}`);

            value = results;
            value1 = 0;
            currentOperationType = null;
          }
        },
        content: null,
        className: `${buttonStyles.functional}`,
      },
    ],
  ];

  return buttons.map((data) => {
    return createElement(
      "div",
      { className: `${styles.line}` },
      {},
      data.map(({ content, iconHref, className, callback }) => {
        const contentAfter = (() => {
          if (iconHref !== null) {
            return createElement("img", { src: iconHref });
          } else {
            return `${content}`;
          }
        })();

        return calculatorButton({ children: contentAfter, className: className, onClick: callback });
      })
    );
  });
};
