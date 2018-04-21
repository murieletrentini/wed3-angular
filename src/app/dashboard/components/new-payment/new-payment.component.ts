import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../auth/services";
import {DashboardResourceService} from "../../resources/dashboard-resource.service";
import {AccountInfo, Transaction, TransferInfo} from "../../models";

@Component({
  selector: 'wed-new-payment',
  templateUrl: './new-payment.component.html',
  styleUrls: ['./new-payment.component.scss']
})
export class NewPaymentComponent implements OnInit {
  private TO_LABEL : string = "Please specify the target account number";
  public from: string;
  public target: string;
  public balance: number;
  public toLabel: string = this.TO_LABEL;
  public paymentSucceeded: boolean = false;

  constructor(private authService: AuthService, private dashboardResourceService: DashboardResourceService) {
  }

  lookUpTo(newValue: string, f) {
    if (newValue !== ''){
      this.dashboardResourceService.getAccount(newValue).subscribe(
        (a: AccountInfo) => {
          if (a) {
            this.toLabel = `${a.owner.firstname} ${a.owner.lastname}`;
            f.form.controls['target'].setErrors(null);
          } else {
            this.toLabel = 'Unknown account';
            f.form.controls['target'].setErrors({'incorrect': true});
          }
        }
      );
    }
  }

  ngOnInit() {
    this.from = this.authService.authenticatedUser.accountNr;
    this.refreshBalance();
  }

  //TODO: error handling
  onSubmit(f) {
    if (f.form.valid) {
      this.toLabel = this.TO_LABEL;
      this.target = f.value.target;
      this.dashboardResourceService.transfer(new TransferInfo(f.value.target, f.value.amount)).subscribe(
        (t: Transaction) => {
          console.log(t);
          if (t) {
            this.paymentSucceeded = true;
            this.refreshBalance();
          }
        }
      );
    }
  }

  private refreshBalance(){
    this.dashboardResourceService.getAccountInfos().subscribe(
      infos => this.balance = infos.amount
    );
  }

}
