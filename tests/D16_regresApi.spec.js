//CURD Operation:-
//Create
//Update
//Retrive
//Delete

const { test, expect, request } = require("@playwright/test")

test('API GET request', async ({ request }) => {
    let req = await request.get('https://reqres.in/api/users?page=2')
    // console.log(await req.status())
    let res = await req.json()
    // console.log(res)
    console.log(res.total)
    await expect(req.status()).toBe(200);
    await expect(res.total).toBe(12);
    // console.log(res.total_pages)
    // console.log(res.data[0].first_name)
})

test.only('APT POST request', async ({ request }) => {
    let req2 = await request.post('https://reqres.in/api/users', {
        data: {
            "name": "Aman",
            "job": "Tester"
        }
    })
    let res2 = await req2.json()
    // console.log(res2)
    expect(await req2.status()).toBe(201)
    expect(await req2.name).toBe('Aman')
})