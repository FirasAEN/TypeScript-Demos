import { Pizza } from "./Pizza";

export class PizzaStore {

  constructor(){}

  public orderNYPizza(): Pizza {
    let pizza = new Pizza();
    pizza.name = 'Cheese pizza';
    pizza.price = 1;
    pizza.type = 'NY';
    return pizza;
  }

  public orderChicagoPizza(): Pizza {
    let pizza = new Pizza();
    pizza.name = 'Cheese pizza';
    pizza.price = 1;
    pizza.type = 'Chicago';
    return pizza;  }
}
