import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../auth/services";
import {DashboardResourceService} from "../../resources/dashboard-resource.service";
import {AccountInfo, TransferInfo} from "../../models";

@Component({
  selector: 'wed-new-payment',
  templateUrl: './new-payment.component.html',
  styleUrls: ['./new-payment.component.scss']
})
export class NewPaymentComponent implements OnInit {
  public from: string;
  public balance: number;
  public toLabel: string = "Please specify the target account number";


  constructor(private authService: AuthService, private dashboardResourceService: DashboardResourceService) {
  }

  lookUpTo(newValue: string, f) {
    this.dashboardResourceService.getAccount(newValue).subscribe(
      (a: AccountInfo) => {
        if (a) {
          this.toLabel = `${a.owner.firstname} ${a.owner.lastname}`;
        } else{
          this.toLabel = 'Unknown account';
          f.form.controls['to'].setErrors({'incorrect': true});
        }
      }
    );

  }

  ngOnInit() {
    this.from = this.authService.authenticatedUser.accountNr;
    this.dashboardResourceService.getAccountInfos().subscribe(
      a => this.balance = a.amount
    );
  }

  //TODO: lookup 'to' account
  onSubmit(f) {
    if (f.form.valid) {
      this.dashboardResourceService.transfer(new TransferInfo(f.value.to, f.value.amount));
    }

  }

}
