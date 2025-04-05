//import * as SQLite from "expo-sqlite";
import openDatabase from "../databases/sqlite-db";
import { Platform } from "react-native"


export const useDB = () => {
  const openDatabase = async () => {
    let db = null;
    if(Platform.OS !== 'web'){
      db = await openDatabaseSync("sessions.db")
    }
    return db;
  };

  const initDB = async () => {
    const db = await openDatabase();
    console.log(db)
    if(!db) return null;

    const sql = `CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, token TEXT NOT NULL);`;
    const res = await db.execAsync(sql)
    console.log(res)
    return res;
  };

  const insertSession = async ({ email, localId, token }) => {
    const db = await openDatabase();
    if (!db) return null;
    const sql = `INSERT INTO sessions (localId, email, token) VALUES (?, ?, ?);`;
    const args = [localId, email, token];
    const res = await db.runAsync(sql, args);
    console.log(res);
    return res;
  };

  const getSession = async () => {
    const db = await  openDatabase();
    if (!db) return null;
    const sql = `SELECT * FROM sessions`
    const firstRow = await db.getFirstAsync(sql);
    console.log(firstRow)
    return firstRow;
  };

  const truncateSessionTable = async () => {
    const db = await openDatabase()
    if (!db) return null;
    const sql = `DELETE FROM sessions`;
    const args = [];
    const res = await db.execAsync(sql);
    console.log(res)
    return res;
  };

  return {
    initDB,
    insertSession,
    getSession,
    truncateSessionTable,
  };
};