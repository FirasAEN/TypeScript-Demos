import { Pizza } from "../Pizza";
import { PizzaType } from "../enums";

export abstract class IngredientFactory {
  constructor(){}

  public abstract createPizza(type: PizzaType): Pizza;
}
