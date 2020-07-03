import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactRoutes } from './contact.routing';

@NgModule({
  imports: [CommonModule, ContactRoutes],
  declarations: [ContactComponent],
})
export class ContactModule {}
