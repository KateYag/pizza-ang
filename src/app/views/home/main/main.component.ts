import {AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {CartService} from "../../../shared/services/cart.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PopupComponent} from "../../../shared/components/popup/popup.component";




// declare var bootstrap: any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {


  private observable: Observable<string>;
  private promise: Promise<string>;

  constructor(public cartService: CartService, private modalService: NgbModal) {
    this.promise = new Promise<string>(resolve => {
      setTimeout(() => {
        resolve('hello');
      }, 2000);
    });

    this.observable = new Observable((observer) => {
      setTimeout(() => {
        observer.next('hello');
      }, 2000);
      setTimeout(() => {
        observer.next('world');
      }, 3000);
    })
  }

  // @ViewChild('popup')
  // popup!: TemplateRef<ElementRef>;
  ngOnInit() {

    // const myModalAlternative = new bootstrap.Modal('#myModal', {});
    // myModalAlternative.show();

    // this.modalService.open(content, { })

    this.observable.subscribe((param: string) => {
      console.log(param);
    });

    // this.promise.then((param: string) => {
    //   console.log(param);
    // });
  }

  ngAfterViewInit() {
    const modalRef = this.modalService.open(PopupComponent);
    modalRef.componentInstance.data = 'World';
    // this.modalService.open(this.popup, { })
  }

}
