const url = "https://tartan-trails-server.herokuapp.com/api/gnomes"

export const fetchGnomes = () => {
    return fetch(url)
        .then(res => res.json())
}