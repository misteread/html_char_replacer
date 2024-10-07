//const docu = fetch("https://jsonplaceholder.typicode.com/users");

function excapeHtml(characters: string) {
    return characters
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/'/g, "&apos;")
        .replace(/"/, "&quot;")
        .replace(/&/, "&amp;");
}

const temp = `hello world`;

console.log(excapeHtml(temp));
