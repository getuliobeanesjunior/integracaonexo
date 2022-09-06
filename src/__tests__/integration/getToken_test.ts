import { ApiNexoManager } from "../../app/apiNexoManager"

require('dotenv').config()

describe('testing tokem from api Nexo', ()=>{

    test('it should get token from API NEXO', async ()=>{

        const tokenAPi = await ApiNexoManager.getToken({})

        expect(typeof tokenAPi).toBe('string')
    })

})