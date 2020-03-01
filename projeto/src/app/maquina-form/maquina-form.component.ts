import { MaquinaService } from './../shared/maquina.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-maquina-form',
  templateUrl: './maquina-form.component.html',
  styleUrls: ['./maquina-form.component.css']
})
export class MaquinaFormComponent implements OnInit {

  linhas = [
    {id: 1, value: 'Linha A'},
    {id: 2, value: 'Linha B'}];

  constructor(private fb: FormBuilder, private router: Router, private maquinaService: MaquinaService) { }
  form: FormGroup;

  @Output()
  create = new EventEmitter();

  ngOnInit() {
    this.form = this.fb.group({
      id: [],
      codigo: ['', [Validators.required, Validators.minLength(5)]],
      descricao: ['', Validators.required],
      linha: [0]
    });
  }

  isInvalid(codigo: string) {
    const control = this.form.get(codigo);
    return control.invalid && control.dirty;
  }

  onSubmit() {
    console.log(this.form.value);
    this.maquinaService.create(this.form.value);
    this.form.reset();
    this.router.navigate(['/listar']);
  }

  onCancel() {
    this.form.reset();
  }
}
