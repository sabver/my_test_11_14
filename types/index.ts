// export interface Param {
//   q: string;
//   sort?: string;
//   order?: string;
//   per_page?: number;
//   page?: number;
// }

/**
 * https://transform.tools/json-schema-to-typescript
 * use response schema to create typescript definition
 */

export type { Code } from "./code";
export type { Commit } from "./commit";
export { SEARCH_TYPE } from "./enum";
export type { Issue } from "./issue";
export type { Label } from "./label";
export type { Repo } from "./repository";
export type { Topic } from "./topic";
export type { User } from "./user";
