import { final } from "../decorators/final.decorators";
import { IUserAware } from '../interfaces/IUserAware';

@final
export default class User implements IUserAware {
    constructor(public email: string, public password: string) {
        this.email = email;
        this.password = password;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email: string) {
        this.email = email;
    }

    getPassword() {
        return this.password;
    }

    setPassword(password: string) {
        this.password = password;
    }
}
