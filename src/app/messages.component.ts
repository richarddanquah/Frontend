import { Component } from "@angular/core";
// importing apiservices
import { ApiService } from "./api.service";

@Component({
  selector: "messages",
  template: `
    <div *ngFor="let message of apiService.messages">
      <mat-card>{{ message.message }}</mat-card>
    </div>
  `
})
export class MessagesComponent {
  // to call our api we use ngOnInit but a constructor needs
  // to be created first
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getMessages();
  }
}
