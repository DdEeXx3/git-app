export const handleValue1 = (e) => {
    return {
        type: 'HANDLE_VALUE_1',
        value: e.target.value,
    };
}

export const handleValue2 = (e) => {
    return {
        type: 'HANDLE_VALUE_2',
        value: e.target.value,
    };
}

export const handleSelect = (e) => {
    return {
        type: 'HANDLE_SELECT',
        value: e.target.value,
    };
}