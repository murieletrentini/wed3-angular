import {Injectable} from '@angular/core';
import {ResourceBase} from '../../core/resources';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError, map} from 'rxjs/operators';
import {AccountInfo, Transaction, TransferInfo} from '../models';
import {Account} from '../../auth/models';


@Injectable()
export class DashboardResourceService extends ResourceBase {

  constructor(http: HttpClient) {
    super(http);
  }

  public getAccountInfos(): Observable<AccountInfo> {
    return this.get('/accounts/').pipe(
      map((result: any) => {
        if (result) {
          return AccountInfo.fromDto(result);
        }
        return null;
      }),
      catchError((error: any) => of<AccountInfo>(null))
    );
  }

  public getAccount(accountNr: string): Observable<AccountInfo> {
    return this.get(`/accounts/${accountNr}`).pipe(
      map((result: any) => {
        if (result) {
          return new AccountInfo(result.accountNr, 0,
            new Account('', result.owner.firstname, result.owner.lastname, result.acc));
        }
        return null;
      }),
      catchError((error: any) => of<AccountInfo>(null))
    );
  }

  public transfer(transferInfo: TransferInfo): Observable<Transaction> {
    return this.post(`/accounts/transactions`, transferInfo.toDto()).pipe(
      map((result: any) => {
        if (result) {
          return Transaction.fromDto(result);
        }
        return null;
      }),
      catchError((error: any) => of<Transaction>(null))
    );
  }

  public getTransactions(fromDate: string = '', toDate: string = '', count: number = 3, skip: number = 0): Observable<Transaction[]> {
    return this.get(`/accounts/transactions?fromDate=${fromDate}&toDate=${toDate}&count=${count}&skip=${skip}`).pipe(
      map((result: Array<object>) => {
        const transactions: Array<Transaction> = [];
        for (const entry of result['result']) {
          const transaction: Transaction = Transaction.fromDto(entry);
          transactions.push(transaction);
        }
        return transactions;
      }),
      catchError((error: any) => of<Transaction[]>(null))
    );
  }
}
