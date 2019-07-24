import { IngredientFactory } from "./IngredientFactory";
import { Pizza } from "../Pizza";
import { PizzaType } from "../enums";
import { Cheese } from "../ingredients/Cheese";
import { Meat } from "../ingredients/Meat";
import { Vegetable } from "../ingredients/Vegetable";

export class NYIngredientFactory extends IngredientFactory{
  private static TYPE: string = 'New York style';

  public getCheese(): Cheese {
    throw new Error("Method not implemented.");
  }
  public getMeat(): Meat {
    throw new Error("Method not implemented.");
  }
  public getVegetables(): Vegetable[] {
    throw new Error("Method not implemented.");
  }

  public createPizza(type: PizzaType): Pizza {
    let pizza: Pizza;

    // Cheese cheese = new NYCheese()
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
