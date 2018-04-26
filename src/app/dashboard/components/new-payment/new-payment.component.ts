import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../auth/services';
import {DashboardResourceService} from '../../resources/dashboard-resource.service';
import {AccountInfo, Transaction, TransferInfo} from '../../models';
import {DashboardCommunicationService} from '../../services/dashboard-communication.service';

@Component({
  selector: 'wed-new-payment',
  templateUrl: './new-payment.component.html',
  styleUrls: ['./new-payment.component.scss']
})
export class NewPaymentComponent implements OnInit {
  private TO_LABEL: string = 'Please specify the target account number';
  public from: string;
  public target: string;
  public amount: number;
  public balance: number;
  public toLabel: string = this.TO_LABEL;
  public paymentSucceeded: boolean = false;

  constructor(private authService: AuthService,
              private dashboardResourceService: DashboardResourceService,
              private dashboardCommunicationService: DashboardCommunicationService) {
  }

  lookUpTo(newValue: string, form) {
    if (form.controls['target'].valid) {
      this.dashboardResourceService.getAccount(newValue).subscribe(
        (account: AccountInfo) => {
          if (account) {
            this.toLabel = `${account.owner.firstname} ${account.owner.lastname}`;
            form.form.controls['target'].setErrors(null);
          } else {
            form.form.controls['target'].setErrors({'unknown': true});
          }
        }
      );
    }
  }

  ngOnInit() {
    this.from = this.authService.authenticatedUser.accountNr;
    this.refreshBalance();
  }

  onSubmit(f) {
    if (f.form.valid) {
      if (this.amount >= this.balance) {
        f.form.controls['amount'].setErrors({'range': true});
      } else if (this.target == this.from) {
        f.form.controls['target'].setErrors({'selfReference': true});
      } else {
        this.toLabel = this.TO_LABEL;
        this.dashboardResourceService.transfer(new TransferInfo(this.target, this.amount)).subscribe(
          (t: Transaction) => {
            if (t) {
              this.paymentSucceeded = true;
              this.dashboardCommunicationService.alertPayment();
              this.refreshBalance();
            }
          }
        );
      }
    }
  }

  private refreshBalance() {
    this.dashboardResourceService.getAccountInfos().subscribe(
      infos => this.balance = infos.amount
    );
    this.amount = null;
    this.target = null;
  }

}
