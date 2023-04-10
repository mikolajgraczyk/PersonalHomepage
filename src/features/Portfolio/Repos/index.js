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
      {repos.map((repo) => (
        <Repo key={repo.id} darkModeEnabled={theme}>
          <div>
            <RepoName darkModeEnabled={theme}>{repo.name}</RepoName>
            <RepoDescription darkModeEnabled={theme}>
              {repo.description}
            </RepoDescription>
          </div>
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
