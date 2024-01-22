import { useState } from "react";

export const State = () => {
    const [testStateGet, testStateSet] = useState<boolean>(false);
    
    return {
        testState: {get: testStateGet, set: testStateSet},
    };
}