
export async function getProjects() {
    const res = await fetch('https://api.github.com/users/connormul/repos?sort=created')
    const json = await res.json()
    console.log(json)
    return json
}