import React from "react";
import {Route, Routes} from "react-router-dom";
import IngredientPage from "./pages/IngredientPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route element={<IngredientPage/>} path={'/ingredients'}/>
            </Routes>
        </div>
    );
}

export default App;
