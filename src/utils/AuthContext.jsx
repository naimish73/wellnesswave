import { createContext, useState, useEffect, useContext } from "react";
import { account } from "../appwriteConfig";
// import deleteCurrentSession from '@/lib/auth'
import { ID } from 'appwrite';

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    useEffect(() => {
        //setLoading(false)
        checkUserStatus()
    }, [])

    const loginUser = async (userInfo) => {
        setLoading(true)

        try {
            let response = await account.createEmailPasswordSession(userInfo.email, userInfo.password)
            let accountDetails = await account.get();
            setUser(accountDetails)
            return { success: true }

        } catch (error) {
            console.error(error)
            return { success: false, error }
        } finally {
            setLoading(false)
        }

    }

    const logoutUser = async () => {
        try {
            await account.deleteSession('current');
            setUser(null);
            return { success: true }

        } catch (error) {
            return { success: false, error }
            console.error('Error deleting session:', error);
            // Handle error gracefully, e.g., show a message to the user
        }
    }
    

    const registerUser = async (userInfo) => {
        setLoading(true)
        // console.log('userInfo',userInfo)

        try {
            let response = await account.create(ID.unique(), userInfo.email, userInfo.password1, userInfo.name);
            await account.createEmailPasswordSession(userInfo.email, userInfo.password1)
            let accountDetails = await account.get();
            setUser(accountDetails)
            return { success: true }

        } catch (error) {
            console.error(error)
            return { success: false, error }

        } finally {
            setLoading(false)
        }

    }

    const checkUserStatus = async () => {
        try {
            let accountDetails = await account.get();
            setUser(accountDetails)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    const contextData = {
        user,
        loginUser,
        logoutUser,
        registerUser
    }

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? <p>Loading...</p> : children}
        </AuthContext.Provider>
    )
}

//Custom Hook
export const useAuth = () => { return useContext(AuthContext) }

export default AuthContext;