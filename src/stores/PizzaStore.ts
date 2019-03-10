import { PizzaType } from "../enums";
import { Pizza } from "../Pizza";

export abstract class PizzaStore {
  constructor (){}

  public abstract orderPizza(type: PizzaType): Pizza;
}
