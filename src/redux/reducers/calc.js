const calc = {calcValue1: '', calcValue2: '', selectValue: '+', score: ''};

const calcReducer = (state = calc, action) => {
    switch(action.type) {
        case "HANDLE_VALUE_1":
            return Object.assign({}, state, {calcValue1: action.value, score: calcResult(action.value, state.calcValue2, state.selectValue)});
        case "HANDLE_VALUE_2":
            return Object.assign({}, state, {calcValue2: action.value, score: calcResult(state.calcValue1, action.value, state.selectValue)});
        case "HANDLE_SELECT":
            return Object.assign({}, state, {selectValue: action.value, score: calcResult(state.calcValue1, state.calcValue2, action.value)});
        default:
            return state;
    }
}

function calcResult(value1, value2, select) {
    let calcString = value1 + select + value2;
    if (value1 === "" || value2 === "") {
        return "PUT TWO VALUES TO SEE A SCORE";
    }
    return eval(calcString);
};

export default calcReducer;