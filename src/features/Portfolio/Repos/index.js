import { Wrapper, Repo, RepoName, RepoDescription, RepoAndDemo, DemoURL, CodeURL } from "./styled";
import { useSelector } from "react-redux";
import { selectRepos } from "../portfolioSlice";
import { useDarkTheme } from "../../../useDarkTheme";

const Repos = () => {
  const repos = useSelector(selectRepos);
  const theme = useDarkTheme();

  return (
    <Wrapper>
      {repos.map(repo =>
        <Repo key={repo.id} darkModeEnabled={theme}>
          <RepoName darkModeEnabled={theme}>{repo.name}</RepoName>
          <RepoDescription darkModeEnabled={theme}>{repo.description}</RepoDescription>
          <RepoAndDemo darkModeEnabled={theme}>
            Demo: <DemoURL
              href={repo.homepage}
              target="_blank"
              rel="noreferrer"
              darkModeEnabled={theme}
            >
              https://link.demo.com
            </DemoURL>
            Code: <CodeURL
              href={repo.svn_url}
              target="_blank"
              rel="noreferrer"
              darkModeEnabled={theme}
            >
              https://link.code.com
            </CodeURL>
          </RepoAndDemo>
        </Repo>)}
    </Wrapper>
  );
};

export default Repos;