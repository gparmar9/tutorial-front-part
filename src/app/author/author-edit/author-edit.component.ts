import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthorService } from '../author.service';
import { Author } from '../model/Author';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
selector: 'app-author-edit',
templateUrl: './author-edit.component.html',
styleUrls: ['./author-edit.component.scss']
})
export class AuthorEditComponent implements OnInit {

    author : Author;

    edit = true;

    constructor(
        public dialogRef: MatDialogRef<AuthorEditComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private authorService: AuthorService,

        private snackBar: MatSnackBar,
    ) { }

    ngOnInit(): void {
        if (this.data.author != null) {
            this.author = Object.assign({}, this.data.author);
            this.edit = true;
        }
        else {
            this.author = new Author();
            this.edit = false;
        }
    }

    onSave() {
        this.authorService.saveAuthor(this.author).subscribe(result =>  {
            this.dialogRef.close();
        }); 

        if (this.edit) {
            this.snackBar.open("Autor editado", 'Aceptar', {duration: 2000});
        } else {
            this.snackBar.open("Autor creado", 'Aceptar', {duration: 2000});
        }
    }  

    onClose() {
        this.dialogRef.close();
    }

}