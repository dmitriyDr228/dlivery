import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchIngredients} from "../store/action-creators/ingredients";
import IngredientsList from "../components/IngredientsList";

const IngredientPage = () => {

    const {ingredients, error, isLoading} = useTypedSelector(state => state.ingredients)
    const dispatch: any = useDispatch();

    useEffect(() => {
        dispatch(fetchIngredients())
    }, [])

    return (
        <div>
            {isLoading && <h1>Идет загрузка</h1>}
            {error && <h1>{error}</h1>}
            <IngredientsList ingredients={ingredients}/>
        </div>
    );
};

export default IngredientPage;