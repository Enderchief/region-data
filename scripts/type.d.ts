export interface Region {
  _CGNDB_ID: string;
  "Geographical Name": string;
  "ISO Language Code": string;
  Language: string;
  "Syllabic Form": string;
  "Generic Term": string;
  "Generic Category": string;
  "Concise Code": "CITY" | "MUN1" | "TOWN" | "VILG" | "UNP";
  "Toponymic Feature ID": string;
  Latitude: number;
  Longitude: number;
  Location: string;
  "Province - Territory": string;
  "Relevance at Scale": string;
  "Decision Date": Date;
  Source: string;
}
