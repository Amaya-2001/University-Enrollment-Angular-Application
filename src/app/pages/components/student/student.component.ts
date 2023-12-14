import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit {

  constructor(private dialog: MatDialog) {

  }
  ngOnInit(): void {

  }

  studentEditDialog() {
    this.dialog.open(StudentEditDialog);
  }
}

@Component({
  selector: 'studentEditModal.component',
  templateUrl: 'studentEditModal.component.html',
  styleUrl: './student.component.css',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
})
export class StudentEditDialog { }


