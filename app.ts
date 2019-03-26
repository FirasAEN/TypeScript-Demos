import { PizzaStore } from "./src/stores/PizzaStore";
import { Pizza } from './src/Pizza';
import { PizzaType } from "./src/enums";
import { NYIngredientFactory } from "./src/factories/NYIngredientFactory";
import { ChicagoIngredientFactory } from "./src/factories/ChicagoIngredientFactory";
import { IngredientFactory } from "./src/factories/IngredientFactory";


let store: PizzaStore;
let pizza: Pizza;
let ingredientFactory: IngredientFactory;

ingredientFactory = new NYIngredientFactory();
store = new PizzaStore(ingredientFactory);
pizza = store.orderPizza(PizzaType.CHEESE);
print(pizza);

ingredientFactory = new ChicagoIngredientFactory();
store = new PizzaStore(ingredientFactory);
pizza = store.orderPizza(PizzaType.MEAT);
print(pizza);



function print(p: Pizza): void {
  console.log(JSON.stringify(p));
}
