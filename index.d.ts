export type Provinces =
  | "alberta"
  | "british_columbia"
  | "manitoba"
  | "new_brunswick"
  | "newfoundland_and_labrador"
  | "northwest_territories"
  | "nova_scotia"
  | "nunavut"
  | "ontario"
  | "prince_edward_island"
  | "quebec"
  | "saskatchewan"
  | "yukon";

type Term =
  | "City"
  | "Discrict Municipality"
  | "Mountain Resort Municipality"
  | "Resort Municipality"
  | "Town"
  | "Village"
  | "Hamlet"
  | "Orangized Hamlet"
  | "Resort Village"
  | "Northern Village"
  | "Northern Hamlet"
  | "Urban Community"
  | "Rural Community"
  | "Abandoned Locality"
  | "Community"
  | "Industrial Park"
  | "Landing"
  | "Locality";

export interface Place {
  name: string;
  term: Term | Omit<string, Term>; // #TODO: Add more terms
  latitude: string;
  longitude: string;
}

export function getPlace(province: Provinces): Place[];
