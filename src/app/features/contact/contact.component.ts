import { Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { ContactService } from '../../core/services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private contact = inject(ContactService);
  private snack = inject(MatSnackBar);
  private translate = inject(TranslateService);

  readonly sending = signal(false);

  readonly form = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required]],
  });

  async submit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const payload = this.form.getRawValue() as {
      name: string;
      email: string;
      message: string;
    };

    // Si el servicio de envío aún no está configurado, avisamos.
    if (!this.contact.isConfigured()) {
      this.toast('contact.not_configured');
      return;
    }

    this.sending.set(true);
    try {
      await this.contact.send(payload);
      this.toast('contact.success');
      this.form.reset();
    } catch {
      this.toast('contact.error');
    } finally {
      this.sending.set(false);
    }
  }

  private toast(key: string): void {
    this.snack.open(this.translate.instant(key), 'OK', { duration: 5000 });
  }
}
