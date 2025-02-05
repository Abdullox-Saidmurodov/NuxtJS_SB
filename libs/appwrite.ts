import { Account } from './../node_modules/appwrite/src/services/account';
import { Client, Account, ID } from 'appwrite';

const client = new Client();
client.setProject('67a2fad00016d6e6cd86');

export const ACCOUNT = new Account(client)
export const UNIQUE_ID = ID.unique()