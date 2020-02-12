import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';

function Search({ repos }) {
  const router = useRouter();
  const query = router.query.q;
  const [ inputQuery, setInputQuery ] = useState(query || "");

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        router.push(`${router.pathname}?q=${inputQuery}`);
      }}>
        <input
          value={inputQuery}
          onChange={e => setInputQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {!repos && <p>Loading...</p> }
      {repos && (
        <ul>
          {repos.map(repo => (
            <li key={repo.id}>
              <a href={repo.html_url}>{repo.full_name}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

Search.getInitialProps = async function (context) {
  const query = context.query.q;
  let repos = [];
  if (query) {
    console.log("== Fetching search results for query:", query);
    const response = await fetch(
      `https://api.github.com/search/repositories?q=${query}&sort=stars`
    );
    const responseBody = await response.json();
    repos = responseBody.items || [];
  }
  return { repos: repos };
};

export default Search;
