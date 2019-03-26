import { IngredientFactory } from "./IngredientFactory";
import { Pizza } from "../Pizza";
import { PizzaType } from "../enums";

export class NYIngredientFactory extends IngredientFactory{
  private static TYPE: string = 'New York style';

  public createPizza(type: PizzaType): Pizza {
    let pizza: Pizza;
    const builder = Pizza.getBuilder();

    builder.ofStyle(NYIngredientFactory.TYPE);

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
