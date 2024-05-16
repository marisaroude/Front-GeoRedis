export const addPlaceInGroup = async (nameGroup, longitude, latitude, name) => {
    const url = `http://localhost:3001/add-group?nameGroup=${nameGroup}&longitude=${longitude}&latitude=${latitude}&name=${name}`;
    try {
        const response = await fetch(url); 
        if (response.ok) { 
            const data = await response.json(); 
            return data;
        } else {
            throw new Error('Error add place in group:', response.status); 
        }
    } catch (error) {
        console.error(error);
        throw error; 
    }
}

export const getPlaceInRadius = async (nameGroup, longitude, latitude) => {
    const url = `http://localhost:3001/get-place-within-radius?nameGroup=${nameGroup}&longitude=${longitude}&latitude=${latitude}`;
    try {
        const response = await fetch(url); 
        if (response.ok) { 
            const data = await response.json(); 
            return data;
        } else {
            throw new Error('Error get place in within radius:', response.status); 
        }
    } catch (error) {
        console.error(error);
        throw error; 
    }
}

export const getDistanceWithPlace = async (nameGroup, longitude, latitude, name) => {
    const url = `http://localhost:3001/get-distance?nameGroup=${nameGroup}&longitude=${longitude}&latitude=${latitude}&name=${name}`;
    try {
        const response = await fetch(url); 
        if (response.ok) { 
            const data = await response.json(); 
            return data;
        } else {
            throw new Error('Error get distance:', response.status); 
        }
    } catch (error) {
        console.error(error);
        throw error; 
    }
}

export const getCordinatesOfPlace = async (nameGroup, name) => {
    const url = `http://localhost:3001/get-cordinates?nameGroup=${nameGroup}&name=${name}`;
    try {
        const response = await fetch(url); 
        if (response.ok) { 
            const data = await response.json(); 
            return data;
        } else {
            throw new Error('Error get cordinates:', response.status); 
        }
    } catch (error) {
        console.error(error);
        throw error; 
    }
}