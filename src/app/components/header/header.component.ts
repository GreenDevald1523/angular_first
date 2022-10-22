import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
  outputs: ["val"],
})
export class Header {
  @Output() values = new EventEmitter<number>();
  click(value: number) {
    this.values.emit(value);
  }
}
