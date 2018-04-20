export class TransferInfo {
  constructor(public to: string,
              public amount: number) {
  }

  public static fromDto(data: any): TransferInfo {
    return new TransferInfo(data.to, data.amount);
  }

  toDto(): any {
    return {
      to: this.to,
      amount: this.amount
    };
  }
}
