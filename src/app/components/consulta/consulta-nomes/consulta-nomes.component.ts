import { AfterViewInit, Component } from '@angular/core';
import { IbgeApiService } from '../../../ibge-api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';



@Component({
  selector: 'app-consulta-nomes',
  templateUrl: './consulta-nomes.component.html',
  styleUrls: ['./consulta-nomes.component.css']
})
export class ConsultaNomesComponent implements AfterViewInit {
  form!: FormGroup;
  loader = false;
  name: string = '';
  nameData: any = null;
  displayedColumns: string[] = ['periodo', 'frequencia'];
  dataSource = new MatTableDataSource<any>([]);

  constructor(
    private ibgeApiService: IbgeApiService,
    private router: Router
  ) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')])
    });
    
  }

  ngAfterViewInit(): void {
    this.dataSource.data = this.nameData[0].res;
  }

  submitForm() {
    this.loader = true;
    this.name = this.form.get('name')?.value;
    if (this.name) {
      this.ibgeApiService.getNameData(this.name)
        .subscribe(data => {
          this.nameData = data;
          this.dataSource.data = data[0].res;
          this.loader = false;
        });
    }
   
  }

  getTotalFrequencia(): number {
    if (this.nameData) {
      return this.nameData[0].res.reduce((total: number, element: any) => total + element.frequencia, 0);
    }
    return 0;
  }
  

  cancelar() {
    this.router.navigate(['/']);
  }
}
