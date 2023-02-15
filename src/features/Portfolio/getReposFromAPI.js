export const getReposFromAPI = async () => {
    const response = await fetch("https://api.github.com/users/mikolajgraczyk/repos");

    if(!response.ok){
        new Error(response.statusText);
    };

    return await response.json();
};