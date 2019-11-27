import React from "react";
import VBox from "./components/VBox";
import WeatherContainer from "./containers/WeatherContainer";

const App: React.FC = () => {
  return (
    <>
      <VBox justify="center">
        <WeatherContainer />
      </VBox>
    </>
  );
};

export default App;
