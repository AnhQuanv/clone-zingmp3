import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../store/reducers/rootReducer';

const reduxConfig = () => {
    const store = configureStore({
        reducer: rootReducer
    });
    return store;
}

export default reduxConfig;
