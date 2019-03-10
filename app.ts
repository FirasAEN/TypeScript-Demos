import { PizzaStore } from "./src/stores/PizzaStore";
import { Pizza } from './src/Pizza';
import { PizzaType } from "./src/enums";
import { NYStore } from "./src/stores/NYStore";
import { ChicagoStore } from "./src/stores/ChicagoStore";


let store: PizzaStore;
let pizza: Pizza;

store = new NYStore();
pizza = store.orderPizza(PizzaType.CHEESE);
print(pizza);

store = new ChicagoStore();
pizza = store.orderPizza(PizzaType.MEAT);
print(pizza);



function print(p: Pizza): void {
  console.log(JSON.stringify(p));
}
