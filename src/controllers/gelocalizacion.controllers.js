// Importar el servicio para la geolocalización
const geolocationService = require('../services/geolocation.service');

// Controlador para obtener la ubicación actual del usuario
exports.getCurrentLocation = async (req, res) => {
    try {
        // Lógica para obtener la ubicación actual del usuario utilizando el servicio de geolocalización
        const location = await geolocationService.getCurrentLocation();

        // Enviar la ubicación como respuesta
        res.json(location);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener la ubicación actual del usuario.' });
    }
};

// Controlador para obtener la ubicación de un usuario por su ID
exports.getUserLocationById = async (req, res) => {
    try {
        const userId = req.params.id;

        // Lógica para obtener la ubicación de un usuario por su ID utilizando el servicio de geolocalización
        const location = await geolocationService.getUserLocationById(userId);

        // Enviar la ubicación como respuesta
        res.json(location);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener la ubicación del usuario.' });
    }
};

// Controlador para actualizar la ubicación de un usuario
exports.updateUserLocation = async (req, res) => {
    try {
        const userId = req.params.id;
        const { latitude, longitude } = req.body;

        // Lógica para actualizar la ubicación de un usuario utilizando el servicio de geolocalización
        await geolocationService.updateUserLocation(userId, latitude, longitude);

        res.status(200).json({ message: 'Ubicación del usuario actualizada correctamente.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar la ubicación del usuario.' });
    }
};
