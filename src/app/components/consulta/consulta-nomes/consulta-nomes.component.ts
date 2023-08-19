import { AfterViewInit, Component } from '@angular/core';
import { IbgeApiService } from '../../../ibge-api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-consulta-nomes',
  templateUrl: './consulta-nomes.component.html',
  styleUrls: ['./consulta-nomes.component.css']
})
export class ConsultaNomesComponent implements AfterViewInit{
  form!: FormGroup;
  loader = false;
  name: string = '';
  nameData: any = null;
  displayedColumns: string[] = ['periodo', 'frequencia'];
  dataSource = new MatTableDataSource<any>([]);

ngAfterViewInit(): void {
  this.dataSource.data = this.nameData[0].res
}
  constructor(private ibgeApiService: IbgeApiService) {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required)
    })
  }

  submitForm() { // depois que o usuario envia o formulario verifica se há um nome
    this.loader = true;
    this.name = this.form.get('name')?.value;
    if (this.name) {
      this.ibgeApiService.getNameData(this.name) //atribui os resultados em nameData
        .subscribe(data => {
          this.nameData = data;
          this.dataSource.data = data[0].res
          this.loader = false;

        });
    }
  }
}
