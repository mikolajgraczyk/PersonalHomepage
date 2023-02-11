export const getReposFromAPI = async () => {
    const response = await fetch("https://api.github.com/users/scudoo/repos");

    if(!response.ok){
        new Error(response.statusText);
    };

    return await response.json();
};