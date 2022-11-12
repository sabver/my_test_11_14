/**
 * https://transform.tools/json-schema-to-typescript
 * use response schema to create typescript definition
 */

export interface Commit {
  total_count: number;
  incomplete_results: boolean;
  items: CommitSearchResultItem[];
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
 * Commit Search Result Item
 */
export interface CommitSearchResultItem {
  url: string;
  sha: string;
  html_url: string;
  comments_url: string;
  commit: {
    author: {
      name: string;
      email: string;
      date: string;
      [k: string]: unknown;
    };
    committer: null | GitUser;
    comment_count: number;
    message: string;
    tree: {
      sha: string;
      url: string;
      [k: string]: unknown;
    };
    url: string;
    verification?: Verification;
    [k: string]: unknown;
  };
  author: null | SimpleUser;
  committer: null | GitUser1;
  parents: {
    url?: string;
    html_url?: string;
    sha?: string;
    [k: string]: unknown;
  }[];
  repository: MinimalRepository;
  score: number;
  node_id: string;
  text_matches?: SearchResultTextMatches;
  [k: string]: unknown;
}
/**
 * Metaproperties for Git author/committer information.
 */
export interface GitUser {
  name?: string;
  email?: string;
  date?: string;
  [k: string]: unknown;
}
export interface Verification {
  verified: boolean;
  reason: string;
  payload: string | null;
  signature: string | null;
  [k: string]: unknown;
}
/**
 * A GitHub user.
 */
export interface SimpleUser {
  name?: string | null;
  email?: string | null;
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string | null;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  starred_at?: string;
  [k: string]: unknown;
}
/**
 * Metaproperties for Git author/committer information.
 */
export interface GitUser1 {
  name?: string;
  email?: string;
  date?: string;
  [k: string]: unknown;
}
/**
 * Minimal Repository
 */
export interface MinimalRepository {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  owner: SimpleUser1;
  private: boolean;
  html_url: string;
  description: string | null;
  fork: boolean;
  url: string;
  archive_url: string;
  assignees_url: string;
  blobs_url: string;
  branches_url: string;
  collaborators_url: string;
  comments_url: string;
  commits_url: string;
  compare_url: string;
  contents_url: string;
  contributors_url: string;
  deployments_url: string;
  downloads_url: string;
  events_url: string;
  forks_url: string;
  git_commits_url: string;
  git_refs_url: string;
  git_tags_url: string;
  git_url?: string;
  issue_comment_url: string;
  issue_events_url: string;
  issues_url: string;
  keys_url: string;
  labels_url: string;
  languages_url: string;
  merges_url: string;
  milestones_url: string;
  notifications_url: string;
  pulls_url: string;
  releases_url: string;
  ssh_url?: string;
  stargazers_url: string;
  statuses_url: string;
  subscribers_url: string;
  subscription_url: string;
  tags_url: string;
  teams_url: string;
  trees_url: string;
  clone_url?: string;
  mirror_url?: string | null;
  hooks_url: string;
  svn_url?: string;
  homepage?: string | null;
  language?: string | null;
  forks_count?: number;
  stargazers_count?: number;
  watchers_count?: number;
  /**
   * The size of the repository. Size is calculated hourly. When a repository is initially created, the size is 0.
   */
  size?: number;
  default_branch?: string;
  open_issues_count?: number;
  is_template?: boolean;
  topics?: string[];
  has_issues?: boolean;
  has_projects?: boolean;
  has_wiki?: boolean;
  has_pages?: boolean;
  has_downloads?: boolean;
  has_discussions?: boolean;
  archived?: boolean;
  disabled?: boolean;
  visibility?: string;
  pushed_at?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  permissions?: {
    admin?: boolean;
    maintain?: boolean;
    push?: boolean;
    triage?: boolean;
    pull?: boolean;
    [k: string]: unknown;
  };
  role_name?: string;
  temp_clone_token?: string;
  delete_branch_on_merge?: boolean;
  subscribers_count?: number;
  network_count?: number;
  code_of_conduct?: CodeOfConduct;
  license?: {
    key?: string;
    name?: string;
    spdx_id?: string;
    url?: string;
    node_id?: string;
    [k: string]: unknown;
  } | null;
  forks?: number;
  open_issues?: number;
  watchers?: number;
  allow_forking?: boolean;
  web_commit_signoff_required?: boolean;
  [k: string]: unknown;
}
/**
 * A GitHub user.
 */
export interface SimpleUser1 {
  name?: string | null;
  email?: string | null;
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string | null;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  starred_at?: string;
  [k: string]: unknown;
}
/**
 * Code Of Conduct
 */
export interface CodeOfConduct {
  key: string;
  name: string;
  url: string;
  body?: string;
  html_url: string | null;
  [k: string]: unknown;
}
