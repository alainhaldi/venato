import { Route } from "next";

export const homePath = (): Route => `/home` as Route;

export const projectsPath = (): Route => `/projects` as Route;

// export const projectsHomePath = (): Route => `${projectsPath()}/home` as Route;

export const addProjectsPath = (): Route => `${projectsPath()}/add` as Route;

export const projectDetailsPath = (projectName: string): Route =>
  `${projectsPath()}/${projectName}` as Route;
