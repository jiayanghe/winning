import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapToastService } from 'src/app/modules/bootstrap-toast/bootstrap-toast.service';
import { Product } from '../../product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {


  @Input() product: Product
  showToastMessage = false
  autohide = true

  constructor(
    private modalSvc: NgbModal,
    private toastSvc: BootstrapToastService
  ) { }

  ngOnInit(): void {
  }

  addProduct(modal: any) {
    this.modalSvc.open(modal).result.then((result) => {
      if (result) {
        this.toastSvc.showSuccess(`${this.product.name} has been added to the cart`)
      }
    });
  }

}
