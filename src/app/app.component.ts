import { Component, Input } from "@angular/core";
import { ICity } from "./modules/city";
import { blocks as data } from "./data/city";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  val: number;
  values(value: number) {
    this.val = value;
    console.log(value);
  }
  blocks: ICity[] = data;
}
