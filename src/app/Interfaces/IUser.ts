export default interface IUser{
    nome: string;
    sobrenome: string;
    email: string;
    password?: string;
    created_at?: Date;
    updated_at?: Date;
}