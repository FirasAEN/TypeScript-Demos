import { PizzaStore } from "./src/PizzaStore";
import { Pizza } from './src/Pizza';
import { PizzaType } from "./src/enums";


const store = new PizzaStore();
const nyPizza = store.orderNYPizza(PizzaType.CHEESE);
print(nyPizza);

const chicagoPizza = store.orderChicagoPizza(PizzaType.MEAT);
print(chicagoPizza);



function print(p: Pizza): void {
  console.log(`${p.name} - type : ${p.type}`);
}
