import { createContext } from "react";
import { Repositories } from "../application/repositories";

export const RepositoriesContext = createContext<Repositories>(undefined!);