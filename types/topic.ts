/**
 * https://transform.tools/json-schema-to-typescript
 * use response schema to create typescript definition
 */

export interface Topic {
  total_count: number;
  incomplete_results: boolean;
  items: TopicSearchResultItem[];
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
 * Topic Search Result Item
 */
export interface TopicSearchResultItem {
  name: string;
  display_name: string | null;
  short_description: string | null;
  description: string | null;
  created_by: string | null;
  released: string | null;
  created_at: string;
  updated_at: string;
  featured: boolean;
  curated: boolean;
  score: number;
  repository_count?: number | null;
  logo_url?: string | null;
  text_matches?: SearchResultTextMatches;
  related?:
    | {
        topic_relation?: {
          id?: number;
          name?: string;
          topic_id?: number;
          relation_type?: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[]
    | null;
  aliases?:
    | {
        topic_relation?: {
          id?: number;
          name?: string;
          topic_id?: number;
          relation_type?: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[]
    | null;
  [k: string]: unknown;
}
