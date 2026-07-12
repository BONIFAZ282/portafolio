import { Component, HostListener, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ProjectService } from '../../../../core/services/project.service';
import { Project, Testimonial } from '../../../../core/models';

@Component({
  selector: 'app-project-detail',
  standalone: false,
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
})
export class ProjectDetailComponent implements OnInit {
  project?: Project;
  testimonial?: Testimonial;

  /** True si el video es de YouTube/Vimeo (se muestra en iframe). */
  isEmbedVideo = false;
  /** URL segura para el iframe del video incrustado. */
  embedUrl?: SafeResourceUrl;

  /** Imagen ampliada en el lightbox (null = cerrado). */
  readonly lightboxImage = signal<string | null>(null);

  openLightbox(img: string): void {
    this.lightboxImage.set(img);
  }

  closeLightbox(): void {
    this.lightboxImage.set(null);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeLightbox();
  }

  constructor(
    private route: ActivatedRoute,
    private service: ProjectService,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug') ?? '';
      this.project = this.service.getBySlug(slug);
      this.testimonial = this.project
        ? this.service.getTestimonialForProject(slug)
        : undefined;
      this.setupVideo();
      window.scrollTo({ top: 0 });
    });
  }

  private setupVideo(): void {
    this.isEmbedVideo = false;
    this.embedUrl = undefined;

    const url = this.project?.videoUrl;
    if (!url) {
      return;
    }

    const embed = this.toEmbedUrl(url);
    if (embed) {
      this.isEmbedVideo = true;
      this.embedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embed);
    }
  }

  /** Convierte un link de YouTube/Vimeo en su URL de incrustación. Devuelve null si es un archivo. */
  private toEmbedUrl(url: string): string | null {
    const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]+)/);
    if (yt) {
      return `https://www.youtube.com/embed/${yt[1]}`;
    }
    const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    if (vimeo) {
      return `https://player.vimeo.com/video/${vimeo[1]}`;
    }
    return null;
  }
}
