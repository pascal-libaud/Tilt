import { createContext } from "react";
import { ChannelRepository } from "../application/channel-repository";
import { UserRepository } from "../application/user-repository";

export const ChannelRepositoryContext = createContext<ChannelRepository>(undefined!);

export const UserRepositoryContext = createContext<UserRepository>(undefined!);