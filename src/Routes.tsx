import React from 'react';
import Login from './Pages/Login';
import { Route, Routes } from 'react-router-dom';

const routes = [
  {
    path: "",
    component: <Login/>,
  },
];

const RouteApp = () => {
  return (
    <div>
      <Routes>
        {routes.map((m) => {
          return <Route path={m.path} element={m.component} />;
        })}
      </Routes>
    </div>
  );
};

export default RouteApp;
