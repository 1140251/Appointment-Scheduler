export class User {

    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: string;

    constructor(values: Object = {}) {

        Object.assign(this, values);
    }

}
