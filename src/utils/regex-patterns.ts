// regex-patterns.ts
export const patterns = {
    easy: /^[a-zA-Z]+$|^[0-9]+$|^[!@#$%^&*()-_+=~<>?,.:/;{}[\]]+$/,
    medium: /^[0-9a-zA-Z]+$/,
    strong: /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/`\-='"]+$/
}