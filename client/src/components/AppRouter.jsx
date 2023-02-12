import React, {useContext} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {publicRoutes} from "../routes";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context)
    return (
        <Routes>
            {publicRoutes.map(({path, element}) =>
                <Route key={path} path={path} element={element}/>
            )}
            <Route
                path="*"
                element={<Navigate to="/login"/>}
            />
        </Routes>
    );
};

export default AppRouter;