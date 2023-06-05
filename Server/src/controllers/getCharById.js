const axios = require("axios");
const URL = `https://rickandmortyapi.com/api/character/`;
module.exports = (req, res) => {
    const { id } = req.params;
    axios(URL + id)
        .then(response => {
            const { status, name, species, origin, image, gender } = response.data;
            const character = {
                id, status, name, species, origin, image, gender
            }
            return character.name
                ? res.status(200).json(character)
                : res.status(404).send("Not fount")
        })
        .catch(error => {
            return res.status(500).send(error.message)
        })
}

// const getCharacterById = (req, res) => {
//     axios
//         .get(`https://rickandmortyapi.com/api/character/:id`)
//         .then(response => response.data)
//         .then(data => {
//             const character = {
//                 id: data.id,
//                 name: data.name,
//                 gender: data.gender,
//                 species: data.species,
//                 origin: data.origin,
//                 image: data.image,
//                 status: data.status,
//             }
//             res
//                 .writeHead(200, { "Content-Type": "application/json"})
//                 .end(JSON.stringify(character))
//         })
//         .catch(error =>
//             res
//                 .writeHead(500, { "Content-Type": "text/plain"})
//                 .end(error.message))
// }
// module.exports = getCharacterById;