import { Wrapper } from "./styled";
import { useSelector } from "react-redux";
import { selectLoadingStatus } from "./portfolioSlice";

const Portfolio = ({ Header, Repos, LoadingScreen, ErrorScreen }) => {
    const loadingStatus = useSelector(selectLoadingStatus);

    const portfolioContent = () => {
        switch (loadingStatus) {
            case 'success':
                return Repos;
            case 'loading':
                return LoadingScreen;
            case 'fail':
                return ErrorScreen;
            default:
                return null;

        };
    };

    return (
        <Wrapper>
            {Header}
            {portfolioContent()}
        </Wrapper>
    );
};

export default Portfolio;