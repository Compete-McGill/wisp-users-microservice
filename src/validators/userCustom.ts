export const validUsername = (username: string): boolean => {
    return new RegExp(/^[a-zA-Z0-9._-]*$/).test(username);
};

export const validPassword = (password: string): boolean => {
    return password
        ? password.length > 5 && password.indexOf(" ") === -1
        : true;
};

export const hasCodeforcesUserData = (
    platformData: Record<string, unknown>
): boolean => {
    return platformData.hasOwnProperty("codeforces");
};

export const hasCodeforcesUsername = (
    platformData: Record<string, unknown>
): boolean => {
    return platformData["codeforces"].hasOwnProperty("username");
};
