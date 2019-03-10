import { PizzaStore } from "./src/PizzaStore";
import { Pizza } from './src/Pizza';


const store = new PizzaStore();
const nyPizza = store.orderNYPizza();
print(nyPizza);

const chicagoPizza = store.orderChicagoPizza();
print(chicagoPizza);



function print(p: Pizza): void {
  console.log(`${p.name} - type : ${p.type}`);
}
