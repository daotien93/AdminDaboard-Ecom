import env from "react-dotenv";

const login = (email: string, password: string) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    };

    return fetch(`${env.API_URL}/api/v1/auth`, requestOptions)
}