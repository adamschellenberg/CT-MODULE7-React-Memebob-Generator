let token = '06352585a40cfeaf9be4fed6f9a8a80e09e0ecd06dedfa56';
export const server_calls = {
    get: async () => {
        const response = await fetch(`https://meme-generator-adam.herokuapp.com/api/memes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to Fetch data from server')
        }

        return await response.json();
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://meme-generator-adam.herokuapp.com/api/memes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },

    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://meme-generator-adam.herokuapp.com/api/memes/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
            
        });
    },

    delete: async(id:string) => {
        const response = await fetch(`https://meme-generator-adam.herokuapp.com/api/memes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
    }
}