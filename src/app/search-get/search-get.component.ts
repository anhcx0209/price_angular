import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';
import Product from '../Product';

@Component({
  selector: 'app-search-get',
  templateUrl: './search-get.component.html',
  styleUrls: ['./search-get.component.css']
})
export class SearchGetComponent implements OnInit {

  createForm(): any {
    this.searchForm = this.fb.group({
      kw: ['', Validators.required],
      sr: ['', Validators.required]
    });
  }

  searchForm: FormGroup;
  result$: Observable<Product[]>;

  constructor(private fb: FormBuilder, private sv: ProductService) {
    this.createForm();
  }

  ngOnInit() {
  }

  submitForm(k, s) {
    this.result$ = this.sv.doSearch(k, s);
  }

}
