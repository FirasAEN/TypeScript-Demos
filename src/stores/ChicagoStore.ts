import { Pizza } from '../Pizza';
import { PizzaType } from '../enums';
import { PizzaStore } from './PizzaStore';

export class ChicagoStore extends PizzaStore {
  private static TYPE: string = 'Chicago';

  public orderPizza(type: PizzaType): Pizza {
    let pizza: Pizza;
    const builder = Pizza.getBuilder();

    builder.ofStyle(ChicagoStore.TYPE);

    switch (type) {
      case PizzaType.CHEESE: {
        pizza = builder
          .ofType(type)
          .withCheese('chicago cheese')
          .withMeat('no meat')
          .withVegetables([])
          .build();
        break;
      }
      case PizzaType.MEAT: {
        pizza = builder
          .ofType(type)
          .withCheese('no cheese')
          .withMeat('chicago meat')
          .withVegetables([])
          .build();
        break;
      }
    }
    return pizza;
  }
}
