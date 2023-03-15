    const httplib = require("supertest");
    const apKuncie = httplib("https://api.kunciebootcampqa.com/api/bootcamp");

    function GetuserList() {
        return apKuncie.get("/users");
    };

function createUser(namaUser) {
    return apKuncie
            .post("/users")
            .send({
                "name": namaUser,
                "phone_number": "111222333444",
                "address": "Automasi Address",
                "point": 500,
                "is_registered": true,
                "vehicles": [
                    {
                        "name": "Supra - Automasi",
                        "type": "Toyota - Automasi"
                    },
                    {
                        "name": "Mobilio - Automasi",
                        "type": "Honda - Automasi"
                    }
                ]
            });
}

module.exports = {
    GetuserList,
    createUser
}