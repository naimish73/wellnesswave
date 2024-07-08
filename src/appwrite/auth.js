// import { Client, Account, ID } from "appwrite";

// export class AuthService {
//   client = new Client();
//   account;

//   constructor() {
//     this.client
//       .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
//       .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);
//     this.account = new Account(this.client);
//   }

//   async createAccount({ email, password, name }) {
//     try {
//       const userAccount = await this.account.create(ID.unique(), email, password, name);
//       if (userAccount) {
//         return this.login({ email, password });
//       } else {
//         return userAccount;
//       }
//     } catch (error) {
//       console.error("Create Account Error:", error);
//       throw error;
//     }
//   }

//   async login({ email, password }) {
//     try {
//       return  this.account.createEmailPasswordSession(email, password);
//     } catch (error) {
//       console.error("Login Error:", error);
//       throw error;
//     }
//   }

//   async getCurrentUser() {
//     try {
//       return await this.account.get();
//     } catch (error) {
//       console.error("Get Current User Error:", error);
//     }
//     return null;
//   }

//   async logout() {
//     try {
//       await this.account.deleteSessions();
//     } catch (error) {
//       console.error("Logout Error:", error);
//     }
//   }
// }

// const authService = new AuthService();
// export default authService;

import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
      .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(ID.unique(), email, password, name);
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.error("Create Account Error:", error);
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return this.account.createEmailSession(email, password);
    } catch (error) {
      console.error("Login Error:", error);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error("Get Current User Error:", error);
    }
    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.error("Logout Error:", error);
    }
  }
}

const authService = new AuthService();
export default authService;
