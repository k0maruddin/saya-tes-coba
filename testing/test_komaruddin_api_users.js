const expect = require("chai").expect;
const api = require("../api_kuncie/api.js");

 describe("API GET USER LIST - API GET {{base_url}}/api/bootcamp/users", async() => {
     it("Test apakah fungsi APi Get User List berjalan", async () => {
            const response = await api.GetuserList();

            const resultFilter = response.body.data.filter((element) => {
                return element.name === 'Nicolas Bailey';
            });

            //  apakah Id  6027863f-1a6a-4dd2-9ec1-b3b480d2cc31 exist
            expect(response.status).to.equal(200, "hallo ini response status nya tidak 200")
            expect(resultFilter.length).to.greaterThan(0, "Tidak ada data dengan");
     });

     it("Test apakah fumgsi API Get User List berjalan dengan baik dimana data user yang baru saya buat itu ada", async () => {});
     // Todo: lakukan create user 
     let response = await api.createUser("KOMARUDDIN TEST");
     expect(response.status).to.equal(200);

     console.log(response.body);

     const idUser = response.body.id;
     // Todo: panggil Get User List
     response = await api.GetuserList();
     expect(response.status).to.equal(200);

     // Todo: Cek menggunakan mata atas data dari create user muncul di Get user List
     const resultFilter = response.body.data.filter((element) => {
        return element.id === idUser;
    });

    console.log(resultFilter);

    expect(resultFilter.length).to.greaterThan(0, "Tidak ada data yang anda buat ")
 });

        

