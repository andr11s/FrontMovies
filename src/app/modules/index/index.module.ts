import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { InicioComponent } from './components/inicio/inicio.component';

@NgModule({
  declarations: [InicioComponent],
  imports: [CommonModule, IndexRoutingModule],
})
export class IndexModule {}
