
export function validUsername(username: string): boolean {
    return new RegExp(/^[a-zA-Z0-9._-]*$/).test(username);
}

export function validPassword(password: string): boolean {
    return password.length > 5 && password.indexOf(" ") === -1;
}