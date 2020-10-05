import { combineReducers} from 'redux';

const DEFAULT_REDUCER = (initstate, action) => {
    return {
        key: "HELLO WORLD",
    };
};

const rootReducer = combineReducers({
    DEFAULT: DEFAULT_REDUCER,
});

export default rootReducer;