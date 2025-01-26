import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SnippetsComponent } from './snippets/snippets.component';
import { ClipboardAnywhereComponent } from './clipboard-anywhere/clipboard-anywhere.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { ClipboardDevicesComponent } from './clipboard-devices/clipboard-devices.component';
import { FooterComponent } from './footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SnippetsComponent,
    ClipboardAnywhereComponent,
    WorkflowComponent,
    ClipboardDevicesComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'clipboard-landing-page';
}
