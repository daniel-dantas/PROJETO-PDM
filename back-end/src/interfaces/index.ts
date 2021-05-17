export interface IUser {
    matricula: string | number;
    senha: string;
    nome: string;
    email: string;
    dataNascimento: string;
    endereco: string;
}

export interface IStudent extends IUser {
    turma?: string | IClass;
}

export interface IClass {
    codigo: string | number;
    descricao: string;
    serie: string;
    professor?: string | ITeacher;
    diretor?: string | IPrincipal;
}

export interface ITeacher extends IUser {
    titulo: string;
}

export interface IPrincipal extends IUser {}