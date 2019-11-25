import {InMemoryDbService} from 'angular-in-memory-web-api';
//mocks = clases/Base de Datos para asignar los datos de User y Region.
export class InMemoryDataService implements InMemoryDbService {
    createDb()
    {
        const user =[
            {
                id: 1,
                nombre: 'juan',
                apellido: 'alvarez',
                correo: 'castillo@gmail.com',
                telefono: 82245873,
                usuario: 'admin',
                pass: 'admin',
                regionId: 1

            },

            {
                id: 2,
                nombre: 'juan2',
                apellido: 'alvarez2',
                correo: 'castillo@gmail.com2',
                telefono: 82245873,
                usuario: 'admin2',
                pass: 'admin2',
                regionId: 2
            },

            {
                id: 3,
                nombre: 'juan3',
                apellido: 'alvarez3',
                correo: 'castillo@gmail.com3',
                telefono: 82245873,
                usuario: 'admin3',
                pass: 'admin3',
                regionId: 3
            }

        ];

        const region =[
            {
                id: 1,
                nombre: 'Santiago',
                

            },

            {
                id: 2,
                nombre: 'Atacama',
                
            },

            {
                id: 3,
                nombre: 'Juan Fernandez',
                
            }

        ];
        return {user, region};
    }
}
