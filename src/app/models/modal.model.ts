import { ModalInterface } from "../interfaces/modal.interface";

export class ModalModel {

  private _label: string = '';
  private _image: string | null = null;
  private _details: ModalInterface[] = [];

  /**
   * Getter for the label property.
   * @returns The label of the modal.
   */
  get label(): string {
    return this._label;
  }

  /**
   * Setter for the label property.
   * @param label The label to set for the modal.
   */
  set label(label: string) {
    this._label = label;
  }

  /**
   * Getter for the image property.
   * @returns The image URL of the modal.
   */
  get image(): string | null {
    return this._image;
  }

  /**
   * Setter for the image property.
   * @param image The image URL to set for the modal.
   */
  set image(image: string) {
    this._image = image;
  }

  /**
   * Getter for the details property.
   * @returns An array of ModalInterface objects representing the details of the modal.
   */
  get details(): ModalInterface[] {
    return this._details;
  }

  /**
   * Setter for the details property.
   * @param details An array of ModalInterface objects representing the details to set for the modal.
   */
  set details(details: ModalInterface[]) {
    this._details = details;
  }
}
