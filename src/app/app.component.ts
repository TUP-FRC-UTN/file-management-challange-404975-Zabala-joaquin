import { Component } from '@angular/core';
import { FileItem } from '../models/file.item.model';
import { FILE_LIST } from '../data/file.storage';
import { ListadoComponent } from "./listado/listado.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  files: FileItem[] = FILE_LIST;
  title = 'file-management';
}
