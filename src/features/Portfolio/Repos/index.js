import {
  Wrapper,
  Repo,
  RepoName,
  RepoDescription,
  RepoAndDemo,
  URL,
} from "./styled";
import { useSelector } from "react-redux";
import { selectRepos } from "../portfolioSlice";
import { useDarkTheme } from "../../../useDarkTheme";

const Repos = () => {
  const repos = useSelector(selectRepos);
  const theme = useDarkTheme();

  return (
    <Wrapper>
      <Repo darkModeEnabled={theme}>
        <RepoName darkModeEnabled={theme}>movies-browser</RepoName>
        <RepoDescription darkModeEnabled={theme}>
          The Movies Browser is a platform that allows users to search and
          browse movies, popular actors and actresses, as well as their
          production history. The website was created by a team of three
          individuals as part of a group project and was completed within three
          weeks.
        </RepoDescription>
        <RepoAndDemo darkModeEnabled={theme}>
          Demo:
          <span>
            <URL
              href="https://marcin10lw.github.io/movies-browser/#/movies"
              target="_blank"
              rel="noreferrer"
              darkModeEnabled={theme}
            >
              https://marcin10lw.github.io/movies-browser/#/movies
            </URL>
          </span>
          Code:
          <span>
            <URL
              href="https://github.com/marcin10lw/movies-browser"
              target="_blank"
              rel="noreferrer"
              darkModeEnabled={theme}
            >
              https://github.com/marcin10lw/movies-browser
            </URL>
          </span>
        </RepoAndDemo>
      </Repo>
      {repos.map((repo) => (
        <Repo key={repo.id} darkModeEnabled={theme}>
          <RepoName darkModeEnabled={theme}>{repo.name}</RepoName>
          <RepoDescription darkModeEnabled={theme}>
            {repo.description}
          </RepoDescription>
          <RepoAndDemo darkModeEnabled={theme}>
            Demo:
            <span>
              <URL
                href={repo.homepage}
                target="_blank"
                rel="noreferrer"
                darkModeEnabled={theme}
              >
                {repo.homepage}
              </URL>
            </span>
            Code:
            <span>
              <URL
                href={repo.svn_url}
                target="_blank"
                rel="noreferrer"
                darkModeEnabled={theme}
              >
                {repo.svn_url}
              </URL>
            </span>
          </RepoAndDemo>
        </Repo>
      ))}
    </Wrapper>
  );
};

export default Repos;
