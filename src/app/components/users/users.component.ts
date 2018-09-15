import { Component, OnInit, HostListener } from '@angular/core';

import { SpinnerService } from 'app/services/spinner.service';
import { UserService } from 'app/services/user.service';
import { User } from 'app/interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  search_term: string;
  limit = 100;
  offset = 0;

  constructor(private userService: UserService,
    private spinnerService: SpinnerService) { }

  /**
   * [ngOnInit description]
   * @return [description]
   */
  ngOnInit() {
    this.getAll();
  }

  /**
   * capture keyboard action.
   * @param  event [description]
   * @return       [description]
   */
  @HostListener('document:keypress', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.search();
    }
  }

  /**
   * it returns all instances and loads in instances variable
   */
  getAll(): void {
    this.spinnerService.display(true); // starts running the spinner until data is returned
    this.userService.getAll(this.search_term, this.offset, this.limit)
      .subscribe(data => { this.users = this.users.concat(data); },
        error => { console.error(error); });
  }

  /**
   * [search description]
   */
  search(): void {
    this.users = [];
    this.getAll();
  }

  /**
   * manages infite scroll
   * @return [description]
   */
  onScroll() {
    this.offset = this.offset + this.limit;
    // fire next query only if the total results are odd.
    // This is a crude method to check if all records have already been fetched
    if (this.users.length % 2 === 0) {
      this.getAll();
    }
  }

}
