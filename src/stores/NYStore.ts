import { Pizza } from '../Pizza';
import { PizzaType } from '../enums';
import { PizzaStore } from './PizzaStore';

export class NYStore extends PizzaStore {
  private static TYPE: string = 'New York';

  public orderPizza(type: PizzaType): Pizza {
    let pizza: Pizza;
    const builder = Pizza.getBuilder();

    builder.ofStyle(NYStore.TYPE);

    switch (type) {
      case PizzaType.CHEESE: {
        pizza = builder
          .ofType(type)
          .withCheese('new york cheese')
          .withMeat('no meat')
          .withVegetables([])
          .build();
        break;
      }
      case PizzaType.MEAT: {
        pizza = builder
          .ofType(type)
          .withCheese('no cheese')
          .withMeat('new york meat')
          .withVegetables([])
          .build();
        break;
      }
    }
    return pizza;
  }
}
