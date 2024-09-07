import { Component, Input } from '@angular/core';
import { FileItem } from '../../models/file.item.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  
  @Input() files: FileItem[] = [];
}
