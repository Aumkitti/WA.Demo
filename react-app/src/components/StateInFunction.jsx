import React, { useState } from "react";

const StateInFunction = (props) => {
    const [dataState, setDataState] = useState({
        id: "1",
        name: props.name || "ToT",
        counter:0
    });
    const userClickPlus = () => {
        setDataState({
            ...dataState,
            counter: dataState.counter + 1,
        });
    };

    const userClickMinus = () => {
        setDataState({
            ...dataState,
            counter: dataState.counter - 1,
        });
    };
    return (
        <div>
            <p>
                <strong>
                    {dataState.name}
                </strong>
            </p>
            <p>
                <strong>
                    {dataState.counter}
                </strong> 
            </p>
            <div>
            <button onClick={userClickPlus}>+</button>
            <button onClick={userClickMinus}>-</button>
            </div>
        </div>
    );
};
export default StateInFunction;




