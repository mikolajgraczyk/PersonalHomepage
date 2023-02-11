export const getReposFromAPI = async () => {
    const response = await fetch("https://apios");

    if(!response.ok){
        new Error(response.statusText);
    };

    return await response.json();
};