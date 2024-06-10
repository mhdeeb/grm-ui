import { useEffect, useState } from "react";
import "../style/repo.css";
import getRepoData from './data';

function RepoItem(repo: any) {
    return (
        <div className="repo-item">
            <h2 className="repo-name">{repo.name}</h2>
            <a className="repo-link" href={repo.html_url} target="_blank">{repo.html_url}</a>
            <p className="repo-description">{repo.description}</p>
        </div>
    );
}

function PlaceholderRepo() {
    const values = []
    for (let i = 0; i < 4; i++) {
        values.push(
            <div className="repo-item">
                <h2 className="repo-name">Placeholder Repo</h2>
                <a className="repo-link">link</a>
                <p className="repo-description">desc</p>
            </div>
        ) 
    }
    return values
}

export default function Repo() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        getRepoData("mhdeeb").then(setRepos);
    }
    , []);

    const repoList = repos.map((repo: any) =>  <RepoItem key={repo.id} {...repo} />);

    return (
        <section className="repo">
            <h1 className="repo-header">Repositories</h1>
            <div className="repo-content">
                {repoList.length ? repoList : <PlaceholderRepo />}
            </div>
        </section>
    );
}