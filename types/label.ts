/**
 * https://transform.tools/json-schema-to-typescript
 * use response schema to create typescript definition
 */

export interface Label {
  total_count: number;
  incomplete_results: boolean;
  items: LabelSearchResultItem[];
  [k: string]: unknown;
}

export type SearchResultTextMatches = {
  object_url?: string;
  object_type?: string | null;
  property?: string;
  fragment?: string;
  matches?: {
    text?: string;
    indices?: number[];
    [k: string]: unknown;
  }[];
  [k: string]: unknown;
}[];

/**
 * Label Search Result Item
 */
export interface LabelSearchResultItem {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description: string | null;
  score: number;
  text_matches?: SearchResultTextMatches;
  [k: string]: unknown;
}
