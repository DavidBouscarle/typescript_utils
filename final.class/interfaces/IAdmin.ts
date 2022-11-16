import { IUserAware } from "./IUserAware";

export interface IAdmin extends IUserAware {
    roles: string[];
}
