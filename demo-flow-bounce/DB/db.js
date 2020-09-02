import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('screens.db');

export const init = () => {

    return  new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('create table if not exists screens(id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL)',
            [],
            () => {
                resolve("Table created successfully");
            },
            (_, err) => {
                reject(`${err}`);
            }
            );
        });
    });
}

export const insertScreens = (id, name) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(`insert into screens (id, name) values (?,?)`,
            [id, name],
            () => {
                resolve("Data addded successfully");
            },
            (_,err) => {
                reject(`${err}`);
            }
            );
        });
    });
}

export const getAllScreens = () => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(`select * from screens`,
            [],
            (data, succ) => {
                resolve(succ);
            },
            (_,err) => {
                reject(`${err}`);
            }
            );
        });
    });
}