import React from "react";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

const Div = styled.div``;

const App = () => {
  return (
    <Div>
      <Sidebar />
      <Dashboard />
    </Div>
  );
};

export default App;
