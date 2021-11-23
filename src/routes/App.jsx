import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import CreateAccount from '../pages/CreateAccount';
import NotFound from '../pages/NotFound';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import '../styles/global.css';

const App = () => {
    const initialState = useInitialState();

    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={<Home/>}
                        />
                        <Route
                            exact
                            path="/login"
                            element={<Login/>}
                        />
                        <Route
                            exact
                            path="/create"
                            element={<CreateAccount/>}
                        />
                        <Route
                            path="*"
                            element={<NotFound/>}
                        />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;