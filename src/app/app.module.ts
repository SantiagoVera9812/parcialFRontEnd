import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ListarBibliotecasService } from './listar-bibliotecas.service';
import { ListarBibliotecasComponent } from './listar-bibliotecas/listar-bibliotecas.component';
import { ListarLibrosService } from './listar-libros.service';
import { ListarLibrosComponent } from './listar-libros/listar-libros.component';
import { RegistroService } from './registro.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListarLibrosComponent,
    ListarBibliotecasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    RegistroService,
    ListarBibliotecasService,
    ListarLibrosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
