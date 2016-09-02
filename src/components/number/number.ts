import {ViewEncapsulation, Component} from "@angular/core";

@Component({
  selector: 'ion-number',
  template: `
    <div class="number-text">{{_text}}</div>
    <button ion-button="item-cover" 
            aria-haspopup="true"
            type="button"
            [id]="id"
            [attr.aria-labelledby]="_labelId"
            [attr.aria-disabled]="_disabled">
    </button>
  `,
  host: {
    '[class.number-disabled]': '_disabled'
  },
  encapsulation: ViewEncapsulation.None,
})

export class Number {

}
