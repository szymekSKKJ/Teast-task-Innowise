import { createElement } from "../../../utils/createElement";
import * as styles from "./styles.module.scss";

type calculatorButtonProps = {
  children: string | HTMLImageElement;
  className?: string;
  onClick?: (event: MouseEvent) => void;
};

export const calculatorButton = ({ children, className, onClick }: calculatorButtonProps) => {
  return createElement(
    "button",
    { className: `${styles.calculatorButton} ${className}` },
    {
      click: (event) => {
        if (onClick !== undefined) {
          onClick(event);
        }
      },
    },
    children
  );
};
