import { Animal, Cat } from "./class.js";
import { Dog } from "./dog.js";

const animals = [new Animal(), new Dog(), new Cat()];

for (const zvyk of animals) {
  zvyk.Golos();
}
