import { db } from '../database/database.js';

const SELECT = `SELECT * FROM SIMULATIONS`;

export async function getAll() {
    return db
        .execute(SELECT)
        .then((result) => {
            return result[0];
        })
        .catch(console.error);
}

export async function create(simulation) {
    const { UserID, UserPW, Name, Author, Description, File, Image } =
        simulation;

    console.log(simulation);
    return db
        .execute(
            'INSERT INTO Simulations (UserID, UserPW, Name, Author, Description, File, Image) VALUES (?,?,?,?,?,?,?)',
            [UserID, UserPW, Name, Author, Description, File, Image]
        )
        .then((result) => {
            console.log(result);
            return result;
        })
        .catch(console.error);
}

export async function getById(id) {
    return db
        .execute('SELECT * FROM Simulations WHERE ID = (?)', [id])
        .then((result) => result[0])
        .catch(console.error);
}

export async function remove(id) {
    const ID = Number(id);
    const simulation = await getById(ID);
    if (simulation.length) {
        return db
            .execute('DELETE FROM Simulations WHERE ID = (?)', [ID])
            .then((result) => {
                console.log(result);
                return true;
            })
            .catch(console.error);
    } else {
        return false;
    }
}
