import { Component } from "@angular/core";
// importing apiservices
import { ApiService } from "./api.service";

@Component({
  selector: "users",
  template: `
    <div *ngFor="let user of apiService.users">
      <mat-card [routerLink]="['/profile', user._id]" style="cursor: pointer">{{
        user.email
      }}</mat-card>
    </div>
  `
})
export class UsersComponent {
  // to call our api we use ngOnInit but a constructor needs
  // to be created first
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getUsers();
  }
}
