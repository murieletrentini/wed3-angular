import {Injectable} from '@angular/core';
import {ResourceBase} from '../../core/resources';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError, map} from 'rxjs/operators';
import {Transaction} from '../models';

@Injectable()
export class DashboardResourceService extends ResourceBase {

  constructor(http: HttpClient) {
    super(http);
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
