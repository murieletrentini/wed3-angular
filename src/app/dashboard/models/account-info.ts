import {Account} from '../../auth/models';

export class AccountInfo {
  constructor(public accountNr: string,
              public amount: number,
              public owner: Account) {
  }

  public static fromDto(data: any): AccountInfo {
    let owner = data.owner;
    let account = new Account(owner.login, owner.firstname, owner.lastname, owner.accountNr);
    return new AccountInfo(data.accountNr, data.amount, account);
  }

  toDto(): any {
    return {
      accountNr: this.accountNr,
      amount: this.amount,
      owner: this.owner.toDto()
    };
  }
}
