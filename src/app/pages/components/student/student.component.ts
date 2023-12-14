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

  addStudent() {
    this.dialog.open(StudentAddDialog);
  }
  viewDeatils() {
    this.dialog.open(StudentDetailsDialog);

  }
  studentDelete() {
    this.dialog.open(StudentDeleteDialog);

  }
}

@Component({
  selector: 'studentEditModal.component',
  templateUrl: 'studentEditModal.component.html',
  styleUrl: './student.component.css',
  standalone: true,
  imports: [],
})
export class StudentEditDialog { }


@Component({
  selector: 'studentAddModel.component',
  templateUrl: 'studentAddModel.component.html',
  styleUrl: './student.component.css',
  standalone: true,
  imports: [],
})
export class StudentAddDialog { }


@Component({
  selector: 'studentDetailsModel.component',
  templateUrl: 'studentDetailsModel.component.html',
  styleUrl: './student.component.css',
  standalone: true,
  imports: [],
})
export class StudentDetailsDialog { }


@Component({
  selector: 'studentDeleteModal.component',
  templateUrl: 'studentDeleteModal.component.html',
  styleUrl: './student.component.css',
  standalone: true,
  imports: [],
})
export class StudentDeleteDialog { }

