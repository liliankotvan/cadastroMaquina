import { Maquina } from './../shared/maquina';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MaquinaService } from '../shared/maquina.service';

@Component({
  selector: 'app-maquina-edit',
  templateUrl: './maquina-edit.component.html',
  styleUrls: ['./maquina-edit.component.css']
})
export class MaquinaEditComponent implements OnInit {

  linhas = [
    {id: 1, value: 'Linha A'},
    {id: 2, value: 'Linha B'}];

  constructor(private fb: FormBuilder, private router: Router, private maquinaService: MaquinaService) { }
  form: FormGroup;
  maquina: Maquina;

  ngOnInit() {
    const maquinaId = localStorage.getItem('editMaquina');
    if (!maquinaId) {
      alert('Ação Inválida!');
      this.router.navigate(['']);
      return;
    }
    this.form = this.fb.group({
      id: [],
      codigo: ['', [Validators.required, Validators.minLength(5)]],
      descricao: ['', Validators.required],
      linha: ['']
    });
    const data = this.maquinaService.getMaqById(+maquinaId);
    this.form.setValue(data);
  }

  isInvalid(codigo: string) {
    const control = this.form.get(codigo);
    return control.invalid && control.dirty;
  }

  onSubmit() {
    this.maquinaService.create(this.form.value);
    this.router.navigate(['']);
  }

  onCancel() {
    this.router.navigate(['']);
  }
}
