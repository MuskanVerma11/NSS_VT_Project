import { Client } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('658a6857c727d3b04c61');

export const account = new Account(client);
export const databases = new Databases(client);