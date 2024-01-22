import { Button } from "../../../components/Button/Button";
import "./Home.sass";
import { State } from "../State";

export const Home = () => {
    const { testState } = State();
    
    return (
        <>
            <Button data={0} />
            <button onClick={() => {
                alert(testState.get);
            }}>test 123</button>
        </>
    );
}
