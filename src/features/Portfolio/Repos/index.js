import { Wrapper, Repo, RepoName, RepoDescription, RepoAndDemo, DemoURL, CodeURL } from "./styled";
import { useSelector } from "react-redux";
import { selectRepos } from "../portfolioSlice";

const Repos = () => {
  const repos = useSelector(selectRepos);

  return (
    <Wrapper>
      {repos.map(repo =>
        <Repo key={repo.id}>
          <RepoName>{repo.name}</RepoName>
          <RepoDescription>{repo.description}</RepoDescription>
          <RepoAndDemo>
            Demo: <DemoURL href={repo.homepage} target="_blank" rel="noreferrer">https://link.demo.com</DemoURL>
            Code: <CodeURL href={repo.svn_url} target="_blank" rel="noreferrer">https://link.code.com</CodeURL>
          </RepoAndDemo>
        </Repo>)}
    </Wrapper>
  );
};

export default Repos;