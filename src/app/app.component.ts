import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <mat-toolbar>
      ViniPay
      <button mat-button routerLink="/users">Users</button>
      <span style="flex: 1 1 auto"> </span>
      <button mat-button routerLink="/register">Register</button>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: []
})
export class AppComponent {
  title = "my frontend";
}
