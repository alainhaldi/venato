import { Route } from "next";

export const homePath = (): Route => `/home` as Route;

export const projectsPath = (): Route => `/projects`;

export const projectsHomePath = (): Route => `${projectsPath()}/home` as Route;

export const addProjectsPath = (): Route => `${projectsPath()}/add`;
