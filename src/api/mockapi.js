

export const getContacts = async () => {
        const {data} = await axios('/contacts');
        return data;
}

export const postContact = async (data) => {
    const response = await axios.post('/contacts', data);
    return response;
}