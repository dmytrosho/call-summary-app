import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CallSummaryService } from '../call-summary.service';

interface CallSummary {
  summaryDate: string;
  totalCalls: number;
  totalDurationInSeconds: number;
  avgDurationInSeconds: number;
  hours: HourlySummary[];
}

interface HourlySummary {
  beginning: string;
  totalCalls: number;
  totalDurationInSeconds: number;
  avgDurationInSeconds: number;
}

@Component({
  selector: 'app-call-summary',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './call-summary.component.html',
  styleUrl: './call-summary.component.scss'
})
export class CallSummaryComponent {
  date!: string;
  isLoading = false;
  summary!: CallSummary;

  constructor(private callSummaryService: CallSummaryService) { }

  getSummary() {
    if (!this.date) return;

    this.isLoading = true;
    this.callSummaryService.getCallSummary(this.date).subscribe({
      next: (data) => {
        this.summary = data;
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error fetching call summary:', error);
      }
    });
  }
}
