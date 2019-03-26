import { IngredientFactory } from "./IngredientFactory";
import { Pizza } from "../Pizza";
import { PizzaType } from "../enums";

export class ChicagoIngredientFactory extends IngredientFactory{
// tslint:disable-next-line: no-inferrable-types
  private static TYPE: string = 'Chicago style';

  public createPizza(type: PizzaType): Pizza {
    let pizza: Pizza;
    const builder = Pizza.getBuilder();

    builder.ofStyle(ChicagoIngredientFactory.TYPE);

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
