
const _nullUser = {
    id: null
};

const SessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch(action.type) {
        default:
            return state;
    };
};

export default SessionReducer;