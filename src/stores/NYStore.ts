import { Pizza } from '../Pizza';
import { PizzaType } from '../enums';
import { PizzaStore } from './PizzaStore';

export class NYStore extends PizzaStore {
  private static TYPE: string = 'New York';

  public orderPizza(type: PizzaType): Pizza {
    let pizza = new Pizza();
    pizza.type = NYStore.TYPE;
    switch (type) {
      case PizzaType.CHEESE: {
        pizza.name = 'cheese pizza';
        pizza.price = 1;
        pizza.cheese = 'new york cheese';
        pizza.meat = 'no meat';
        pizza.vegetables = [];
        break;
      }
      case PizzaType.MEAT: {
        pizza.name = 'meat pizza';
        pizza.price = 1;
        pizza.cheese = 'no cheese';
        pizza.meat = 'new york meat';
        pizza.vegetables = [];
        break;
      }
    }
    return pizza;
  }
}
