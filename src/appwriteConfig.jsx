import { Client, Account } from 'appwrite';

export const API_ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT
export const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID

const client = new Client()
    .setEndpoint(API_ENDPOINT) 
    .setProject(PROJECT_ID);    

export const account = new Account(client);

export default client;