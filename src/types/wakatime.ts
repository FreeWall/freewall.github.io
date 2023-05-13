export interface WakatimeLanguagesResponse {
  data?: {
    languages?: {
      name: string;
      total_seconds: number;
      hours: number;
      minutes: number;
      percent: number;
    }[];
  };
  error?: string;
}
