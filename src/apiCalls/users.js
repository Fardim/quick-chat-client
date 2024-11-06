import api from './index';

export const getLoggedUser = async () => {
    try {
        const response = await api.get('/api/user/get-logged-user');
        return response.data;
    } catch (error) {
        return error;
    }
};

export const getAllUser = async () => {
    try {
        const response = await api.get('/api/user/get-all-users');
        return response.data;
    } catch (error) {
        return error;
    }
};