export class TransferInfo {
  constructor(public target: string,
              public amount: number) {
  }

  public static fromDto(data: any): TransferInfo {
    return new TransferInfo(data.target, data.amount);
  }

  toDto(): any {
    return {
      target: this.target,
      amount: this.amount
    };
  }
}
