import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { HeroComponent } from './hero/hero.component';
import { IntroArticleComponent } from './intro-article/intro-article.component';
import { SkillsComponent } from './skills/skills.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  imports: [
    NavmenuComponent,
    HeroComponent,
    IntroArticleComponent,
    SkillsComponent,
    ResumeComponent,
    ContactComponent,
    FooterComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'portfolio';
}
