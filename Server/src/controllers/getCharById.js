const axios = require("axios");
const URL = `https://rickandmortyapi.com/api/character/`;
module.exports = async(req, res) => {
    try {
        const { id } = req.params;
        axios(URL + id)
        const result = await axios(URL + id)
        const { name, gender, image, species, status, origin } = (await 
            axios(URL + id)).data
            const character = {
                id, 
                name, 
                gender,
                image,
                species,
                status,
                origin
            }
            return character ? res.status(200).json(character)
            : res.status(404).json("Character nos found")
        
    } catch (error) {
        
        return res.status(500).send(error.message)
    }}

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