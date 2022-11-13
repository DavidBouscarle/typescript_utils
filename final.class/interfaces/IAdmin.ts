import { IUserAware } from "./IUserAware";

interface IAdmin extends IUserAware {
    roles: string[];
}
