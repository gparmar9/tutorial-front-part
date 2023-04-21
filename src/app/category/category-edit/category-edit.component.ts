import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from '../category.service';
import { Category } from '../model/Category';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {

  category : Category;

  edit = true;

  constructor(
    public dialogRef: MatDialogRef<CategoryEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private categoryService: CategoryService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    if (this.data.category != null) {
      this.category = Object.assign({}, this.data.category);
      this.edit = true;
    }
    else {
      this.category = new Category();
      this.edit = false;
    }
  }

  onSave() {
    this.categoryService.saveCategory(this.category).subscribe(result => {
      this.dialogRef.close();
    });    

    if (this.edit) {
      this.snackBar.open("Categoria editada", 'Aceptar', {duration: 2000});
    } else {
      this.snackBar.open("Categoria creada", 'Aceptar', {duration: 2000});
    }
  }  

  onClose() {
    this.dialogRef.close();
  }

}