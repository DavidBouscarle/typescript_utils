import { IAdmin } from "../interfaces/IAdmin";
import User from "./User";

export default class Admin extends User implements IAdmin {
    public roles: string[];

    constructor(email: string, password: string, roles: string[]) {
        super(email, password);
        this.roles = roles;
    }

    getRoles() {
        return this.roles;
    }

    setRoles(roles: []) {
        this.roles = roles;
    }
}
