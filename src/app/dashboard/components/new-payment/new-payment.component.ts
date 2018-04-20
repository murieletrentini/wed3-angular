import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../auth/services";
import {DashboardResourceService} from "../../resources/dashboard-resource.service";
import {TransferInfo} from "../../models";

@Component({
  selector: 'wed-new-payment',
  templateUrl: './new-payment.component.html',
  styleUrls: ['./new-payment.component.scss']
})
export class NewPaymentComponent implements OnInit {
  private accountNr: string;
  private accountBalance: number;

  public get from(): string {
    return this.accountNr;
  }

  public get balance(): number {
    return this.accountBalance;
  }

  constructor(private authService: AuthService, private dashboardResourceService: DashboardResourceService) {
  }

  ngOnInit() {
    this.accountNr = this.authService.authenticatedUser.accountNr;
    this.dashboardResourceService.getAccountInfos().subscribe(
      a => this.accountBalance = a.amount
    );
  }

  //TODO: lookup 'to' account
  onSubmit(f) {
    console.log(f.value);
    if (f.form.valid){
      this.dashboardResourceService.transfer(new TransferInfo(f.value.to, f.value.amount ));
    }

  }

}
