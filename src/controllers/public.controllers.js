const { isLoggedIn } = require('../lib/auth');
const pool = require('../config/dataBase.sql');
const public = require('../models/public.model');

document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('post-form');
    const postsContainer = document.getElementById('posts-container');

    // Event listener para el formulario de publicación
    postForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const textarea = postForm.querySelector('textarea');
        const postContent = textarea.value;
        if (postContent.trim() !== '') {
            // Lógica para enviar la publicación al servidor y mostrarla en la página
            const newPost = createPostElement(postContent);
            postsContainer.prepend(newPost);
            textarea.value = '';
        }
    });

    // Función para crear un elemento de publicación
    function createPostElement(content) {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.textContent = content;
        return postElement;
    }
});
