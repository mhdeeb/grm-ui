import axios from 'axios';

export default (user: string) => axios(`https://api.github.com/users/${user}/repos?sort=updated&direction=desc`).then(response => 
    response.data.map((repo: any) => ({id: repo.id, name: repo.name, html_url: repo.html_url, description: repo.description}))
).catch(error => {console.error(error)});