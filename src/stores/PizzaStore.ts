import { PizzaType } from "../enums";
import { Pizza } from "../Pizza";
import { IngredientFactory } from "../factories/IngredientFactory";

export class PizzaStore {
  private factory: IngredientFactory;

  constructor (ingredientFactory: IngredientFactory){
    this.factory = ingredientFactory;
  }

  public orderPizza(type: PizzaType): Pizza {
    return this.factory.createPizza(type);
  }
}
