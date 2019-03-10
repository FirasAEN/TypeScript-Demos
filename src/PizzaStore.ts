import { Pizza } from "./Pizza";
import { PizzaType } from "./enums";

export class PizzaStore {

  constructor(){}

  public orderNYPizza(type: PizzaType): Pizza {
    let pizza = new Pizza();
    pizza.type = 'NY';
    switch (type) {
      case PizzaType.CHEESE: {
        pizza.name = 'Cheese pizza';
        pizza.price = 1;
        break;
      }
      case PizzaType.MEAT: {
        pizza.name = 'Meat pizza';
        pizza.price = 1;
        break;
      }
    }
    return pizza;
  }

  public orderChicagoPizza(type: PizzaType): Pizza {
    let pizza = new Pizza();
    pizza.type = 'Chicago';
    switch (type) {
      case PizzaType.CHEESE: {
        pizza.name = 'Cheese pizza';
        pizza.price = 1;
        break;
      }
      case PizzaType.MEAT: {
        pizza.name = 'Meat pizza';
        pizza.price = 1;
        break;
      }
    }
    return pizza;
  }
}
