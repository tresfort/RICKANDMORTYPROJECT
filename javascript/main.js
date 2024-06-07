// main.js
import { fetchCharacters } from './servicioapi.js';
import { displayCharacters, updateButtons, updatePageInfo } from './interfaz-usuario.js';

document.addEventListener("DOMContentLoaded", () => {
    const apiURL = 'https://rickandmortyapi.com/api/character';
    const charactersDiv = document.getElementById('characters');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const pageInfo = document.getElementById('page-info');
    let currentPage = 1;
    let totalPages = 1;

    const loadCharacters = (page) => {
        fetchCharacters(apiURL, page)
            .then(data => {
                displayCharacters(data.results, charactersDiv);
                currentPage = page;
                totalPages = data.info.pages;
                updateButtons(currentPage, totalPages, prevButton, nextButton);
                updatePageInfo(currentPage, totalPages, pageInfo);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            loadCharacters(currentPage + 1);
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            loadCharacters(currentPage - 1);
        }
    });

    loadCharacters(currentPage);
});