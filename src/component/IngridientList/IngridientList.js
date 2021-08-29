import Ingredient from '../Ingridient/Ingridient';

const IngredientsList = ({ list }) => {
  return (
    <ul className="ingredients">
      {list.map((ingredient, index) => (
        <Ingredient key={index} {...ingredient} />
      ))}
    </ul>
  );
};

export default IngredientsList;
