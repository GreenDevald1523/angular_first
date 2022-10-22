import { Component, Input } from "@angular/core";
import { ICity } from "../../modules/city";
@Component({
  selector: "city",
  templateUrl: "./city.component.html",
  styleUrls: ["./city.component.css"],
})
export class City {
  @Input() block: ICity;
}
