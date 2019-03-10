import { Pizza } from '../Pizza';
import { PizzaType } from '../enums';
import { PizzaStore } from './PizzaStore';

export class ChicagoStore extends PizzaStore {
  private static TYPE: string = 'Chicago';

  public orderPizza(type: PizzaType): Pizza {
    let pizza = new Pizza();
    pizza.type = ChicagoStore.TYPE;
    switch (type) {
      case PizzaType.CHEESE: {
        pizza.name = 'cheese pizza';
        pizza.price = 1;
        pizza.cheese = 'chicago cheese';
        pizza.meat = 'no meat';
        pizza.vegetables = [];
        break;
      }
      case PizzaType.MEAT: {
        pizza.name = 'meat pizza';
        pizza.price = 1;
        pizza.cheese = 'no cheese';
        pizza.meat = 'chicago meat';
        pizza.vegetables = [];
        break;
      }
    }
    return pizza;
  }
}
