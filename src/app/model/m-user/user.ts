export class User {
    id?: number;
    nombre: string;
    apellido: string;
    correo: string;
    telefono: number;
    usuario: string;
    pass: string;
    regionId: number;
    
    constructor(
        id?: number,
        nombre?: string,
        apellido?: string,
        correo?: string,
        telefono?: number,
        usuario?: string,
        pass?: string,
        regionId?: number
        )
    {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.telefono = telefono;
        this.usuario = usuario;
        this.pass = pass;
        this.regionId = regionId;
    }
}
