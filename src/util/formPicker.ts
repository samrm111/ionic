import {Input, Output, EventEmitter, EventEmitter} from "@angular/core";

export abstract class FormPicker {
  /**
   * @private
   */
  id: string;
  /**
   * @input {string} The text to display on the picker's cancel button. Default: `Cancel`.
   */
  @Input() cancelText: string = 'Cancel';

  /**
   * @input {string} The text to display on the picker's "Done" button. Default: `Done`.
   */
  @Input() doneText: string = 'Done';

  /**
   * @input {any} Any additional options that the picker interface can accept.
   * See the [Picker API docs](../../picker/Picker) for the picker options.
   */
  @Input() pickerOptions: any = {};

  /**
   * @output {any} Any expression to evaluate when the datetime selection has changed.
   */
  @Output() ionChange: EventEmitter<any> = new EventEmitter();

  /**
   * @output {any} Any expression to evaluate when the datetime selection was cancelled.
   */
  @Output() ionCancel: EventEmitter<any> = new EventEmitter();

  /**
   * @input {boolean} Whether or not the datetime component is disabled. Default `false`.
   */
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }

  /**
   * @private
   */
  getValue(): DateTimeData {
    return this._value;
  }
}
