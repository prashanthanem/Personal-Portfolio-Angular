import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-intro-article',
  templateUrl: './intro-article.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntroArticleComponent {}
