import Instructions from '../Instruction/Instructions';
import IngredientsList from '../IngridientList/IngridientList';
import Summary from '../Summary/Summary';

const Recipe = ({ name, ingredients, steps }) => (
  <section id={name.toLowerCase().replace(/ /g, '-')}>
    <h1>{name}</h1>
    <IngredientsList list={ingredients} />
    <Instructions title="Cooking Instructions" steps={steps} />
    <Summary title={name} steps={steps} ingredients={ingredients} />
  </section>
);

export default Recipe;
