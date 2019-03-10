import { PizzaType } from "./enums";

export class PizzaBuilder {
  private name: string = 'Fantastic pizza';
  private price: number = 0;
  private type: PizzaType;
  private style: string;
  private cheese: string;
  private meat: string;
  private vegetables: string[];

  public constructor(){}

  public build(): Pizza {
    let p = new Pizza();
    p.style = this.style;
    p.type = this.type;
    p.name = this.name;
    p.price = this.price;
    p.cheese = this.cheese;
    p.meat = this.meat;
    p.vegetables = this.vegetables;
    return p;
  }

  public ofType(type: PizzaType): PizzaBuilder {
    this.type = type;
    return this;
  }

  public ofStyle(style: string): PizzaBuilder {
    this.style = style;
    return this;
  }

  public withCheese(cheese: string): PizzaBuilder {
    this.cheese = cheese;
    return this;
  }

  public withMeat(meat: string): PizzaBuilder {
    this.meat = meat;
    return this;
  }

  public withVegetables(vegetables: string[]): PizzaBuilder {
    this.vegetables = vegetables;
    return this;
  }
}

export class Pizza {
  private static builder: PizzaBuilder;
  public name: string;
  public price: number;
  public type: string;
  public cheese: string;
  public meat: string;
  public style: string;
  public vegetables: string[];

  public constructor() {}

  public static getBuilder(): PizzaBuilder {
    if (!Pizza.builder) {
      Pizza.builder = new PizzaBuilder();
    }
    return Pizza.builder;
  }
}
