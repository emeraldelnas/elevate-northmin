import { AfterViewInit, Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appVidLazyLoad]'
})
export class VidLazyLoadDirective implements AfterViewInit {
  @HostBinding('attr.src') srcAttr = null;
  @Input() src: string;

  lazyVideos: any;

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.canLazyLoad() ? this.lazyLoadVideo() : null;
  }

  private canLazyLoad(): boolean {
    return window && 'IntersectionObserver' in window;
  }

  private lazyLoadVideo(): void {

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((video) => {
        if (video.isIntersecting) {

          let sources = video.target.children;

          Array.from(sources).forEach((vidSource: HTMLSourceElement) => {
            vidSource.src = vidSource.dataset.src
          });

          // for (let i = 0; i < video.target.children.length; i++) {
          //   let vidSource = video.target.children[i] as HTMLSourceElement;
          //   vidSource.src = vidSource.dataset.src
          // }

          let loadVid = video.target as HTMLVideoElement;
          loadVid.muted = true;
          loadVid.load();
          obs.unobserve(loadVid);
        }
      });
    });

    obs.observe(this.el.nativeElement);
  }
}
