import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../../../../shared/services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'underscore';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
  animations: [routerTransition()]
})
export class ListUsersComponent implements OnInit {

  private _sub;
  private userList: any;
  private current = 1;
  private pages = 1;
  private userListError = false;

  private successMessage = null;
  private errorMessage = null;

  private dialog: NgbModalRef | null;
  private deleteItem: string;
  private tableHeaders = ['Username', 'Email', 'Cargo', 'Adicionado a'];

  constructor(private translate: TranslateService, private userService: UserService, private route: ActivatedRoute,
    private modalService: NgbModal, private router: Router) { }

  ngOnInit() {
    console.log('init');
    this.getUsers();
    if (this.successMessage) {
      setTimeout(() => this.successMessage = null, 5000);
    }
  }

  getUsers(): void {
    this.userService.getUsers(this.current).subscribe(
      res => {
        const response = res.json();
        this.current = response.current;
        this.pages = response.pages;
        console.log(this.pages);
        this.userList = this.convertObjectToArray(response.users);
      },
      error => {
        this.userListError = true;
      }
    );
    this.successMessage = this.userService.sucessMessage;
    this.userService.sucessMessage = null;
  }

  openDeleteItemModel(id, modal) {
    this.deleteItem = id;
    this.modalService.open(modal);
  }

  editItem(id) {
    console.log(id);
    this.router.navigate(['/adminDEV/users', id]);
  }

  addNew() {
    this.router.navigate(['/adminDEV/users/add']);
  }

  confirmDeleteItem() {
    console.log('a correr callback');
    console.log('entrou delete:' + this.deleteItem);
    this.userService.deleteUser(this.deleteItem).subscribe(
      res => {
        this.successMessage = 'User succefully deleted';
        const del = this.deleteItem;
        this.userList = this.userList.filter(function (obj) {
          return obj.id !== del;
        });
        if (this.successMessage) {
          setTimeout(() => this.successMessage = null, 5000);
        }
        this.deleteItem = null;
        return res;
      }, error => {
        console.log(error);
        if (this.errorMessage) {
          setTimeout(() => this.errorMessage = null, 5000);
        }
        return error;
      });
  }

  convertObjectToArray(list) {
    const finalList = [];
    list.forEach(element => {
      const tempElem = { id: '', values: [] };
      tempElem.id = element['id'];
      const tempElemContent: string[] = [];
      Object.keys(element).forEach(function (key) {
        if (key !== 'id') {
          tempElemContent.push(element[key]);
        }
      });
      tempElem.values = tempElemContent;
      finalList.push(tempElem);
    });
    return finalList;
  }

  prevPage() {
    console.log('Onprev');
    this.current--;
    this.getUsers();
  }

  nextPage() {
    console.log('OnNext');
    this.current++;
    this.getUsers();
  }

  goToPage(n) {
    this.current = n;
    this.getUsers();
  }

}
