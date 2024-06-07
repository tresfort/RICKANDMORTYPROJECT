// interfaz de usuario
export const displayCharacters = (characters, charactersDiv) => {
    charactersDiv.innerHTML = ''; // Limpiar el contenido anterior
    characters.slice(0, 6).forEach(character => {
        const characterElement = document.createElement('div');
        characterElement.innerHTML = `
            <h2 class="caracter-nombres">${character.name}</h2>
            <img src="${character.image}" alt="${character.name}">
            <p><strong>Status:</strong> ${character.status}</p>
            <p><strong>Species:</strong> ${character.species}</p>
            <p><strong>Type:</strong> ${character.type || 'Unknown'}</p>
            <p><strong>Gender:</strong> ${      character.gender}</p>
            <p><strong>Origin:</strong> ${character.origin.name}</p>
            <p><strong>Location:</strong> ${character.location.name}</p>
        `;
        charactersDiv.appendChild(characterElement);
    });
};

export const updateButtons = (currentPage, totalPages, prevButton, nextButton) => {
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
};

export const updatePageInfo = (currentPage, totalPages, pageInfo) => {
    pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;
    pageInfo.style.textAlign = 'center';
    pageInfo.style.color = '#60d59d';
    pageInfo.style.fontWeight = 'bold';
    pageInfo.style.fontFamily = 'Arial, sans-serif';
    pageInfo.style.textShadow = '2px 2px 4px rgba(4, 3, 5, 2.5)';
    pageInfo.style.margin = '20px';
};