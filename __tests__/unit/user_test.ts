require('dotenv').config()
import "reflect-metadata"
import { AppDataSource } from "../../src/database/data-source"
import { faker } from '@faker-js/faker';
import AppUser from "../../src/app/application/user"
import IUser from "../../src/app/Interfaces/IUser"
import User  from "../../src/database/entity/User"

describe('testing entity user', ()=>{

    beforeAll(async () => {
        await AppDataSource.initialize()
    });

    const userMock:IUser = {
        "email":faker.internet.email(),
        "nome":faker.name.firstName(),
        "sobrenome":faker.name.lastName(),
        "password":'12345'
    }

    test('it should create new user', async ()=>{
        const userCreated:User = await AppUser.createUser(userMock)

        expect(userMock.email).toBe(userCreated.email)
        expect(userMock.nome).toBe(userCreated.nome)
        expect(userMock.sobrenome).toBe(userCreated.sobrenome)        
    })

    test('it should get user by email', async ()=>{
        const user:User = await AppUser.getByEmail(userMock.email)

        expect(user.email).toBe(userMock.email) 
        expect(user.nome).toBe(userMock.nome) 
    })

    test('it should update user', async ()=>{

        const user:User = await AppUser.getByEmail(userMock.email);

        const email = faker.internet.email();

        const userUpdated:User = await AppUser.updateUser(user.id,{
            email,
            nome: userMock.nome,
            sobrenome: userMock.sobrenome
        })

        userMock.email = email;

        expect(user.email).not.toBe(userUpdated.email)  
        expect(user.nome).toBe(userUpdated.nome) 
        expect(user.sobrenome).toBe(userUpdated.sobrenome)        
    })

    test('it should delete user', async ()=>{
        const user:User = await AppUser.getByEmail(userMock.email);

        await AppUser.deleteById(user.id)

        const userDeleted:User = await AppUser.getByEmail(userMock.email);      

        expect(userDeleted).toBe(null)
    })

})