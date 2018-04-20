export class Transaction {
  constructor(public from: string,
              public target: string,
              public amount: number,
              public total: number,
              public date: string) {
  }

  public static fromDto(data: any): Transaction {
    return new Transaction(data.from, data.target, data.amount, data.total, data.date);
  }

  public toDto(): any {
    return {
      from: this.from,
      target: this.target,
      amount: this.amount,
      tatal: this.total,
      date: this.date
    };
  }
}
