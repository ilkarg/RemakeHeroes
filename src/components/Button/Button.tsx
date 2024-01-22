import { ButtonProps } from "../../stores/TypesStore";
import "./Button.sass";
import { Action } from "./Action";

export const Button = (props: ButtonProps) => {
    return (
        <>
            <button onClick={Action.click}>test</button>
        </>
    );
}
