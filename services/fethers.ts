import { Octokit } from "@octokit/core";
import { RequestParameters } from "@octokit/core/dist-types/types";
import { Code, Commit, Issue, Label, Repo, Topic, User } from "app/types";

const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
});

export async function getCode(param: RequestParameters): Promise<Code> {
  const response = await octokit.request(
    "GET /search/code{?q,sort,order,per_page,page}",
    param
  );
  return response.data;
}

export async function getCommit(param: RequestParameters): Promise<Commit> {
  const response = await octokit.request(
    "GET /search/commits{?q,sort,order,per_page,page}",
    param
  );
  return response.data;
}

export async function getIssue(param: RequestParameters): Promise<Issue> {
  const response = await octokit.request(
    "GET /search/issues{?q,sort,order,per_page,page}",
    param
  );
  return response.data;
}

export async function getLabel(param: RequestParameters): Promise<Label> {
  const response = await octokit.request(
    "GET /search/labels{?repository_id,q,sort,order,per_page,page}",
    param
  );
  return response.data;
}

export async function getRepo(param: RequestParameters): Promise<Repo> {
  const response = await octokit.request(
    "GET /search/repositories{?q,sort,order,per_page,page}",
    param
  );
  return response.data;
}

export async function getTopic(param: RequestParameters): Promise<Topic> {
  const response = await octokit.request(
    "GET /search/topics{?q,per_page,page}",
    param
  );
  return response.data;
}

export async function getUser(param: RequestParameters): Promise<User> {
  const response = await octokit.request(
    "GET /search/users{?q,sort,order,per_page,page}",
    param
  );
  return response.data;
}
