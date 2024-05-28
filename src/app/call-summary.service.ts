import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

@Injectable({
  providedIn: 'root'
})
export class CallSummaryService {
  private apiUrl = 'https://localhost:7177/demo/call-summary';

  constructor(private http: HttpClient) { }

  getCallSummary(date: string): Observable<CallSummary> {
    return this.http.get<CallSummary>(`${this.apiUrl}?date=${date}`);
  }
}
