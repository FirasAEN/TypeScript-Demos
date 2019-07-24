import { Pizza } from "../Pizza";
import { PizzaType } from "../enums";
import { Cheese } from "../ingredients/Cheese";
import { Meat } from "../ingredients/Meat";
import { Vegetable } from "../ingredients/Vegetable";

export abstract class IngredientFactory {
  private cheese: Cheese;
  private meat: Meat;
  private Vegetables: Vegetable[];
  constructor(){}


  public create(type: PizzaType): Pizza {
    // this.getCheese();
    // this.getMeat();
    // this.getVegetables();
    return this.createPizza(type);
  }

  public abstract getCheese(): Cheese;
  public abstract getMeat(): Meat;
  public abstract getVegetables(): Vegetable[];
  public abstract createPizza(type: PizzaType): Pizza;
}
