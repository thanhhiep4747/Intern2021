export class Size {
  sizeId: number | undefined;
  sizeName: string | undefined;

  constructor(sizeId: number, sizeName: string) {
    this.sizeId = sizeId;
    this.sizeName = sizeName;
  }
}
