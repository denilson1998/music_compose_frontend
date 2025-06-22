import { Component } from '@angular/core';
import { AiService } from '../../../services/ai.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-score-harmony',
  imports: [FormsModule, CommonModule],
  templateUrl: './score-harmony.component.html',
  styleUrl: './score-harmony.component.css'
})
export class ScoreHarmonyComponent {
  inputXml = '';
  harmonyXml = '';

  constructor(private aiService: AiService) {}

  generateHarmony() {
    this.aiService.suggestHarmony(this.inputXml).subscribe((resp: any) => {
      this.harmonyXml = resp.musicXml;
    });
  }
}
