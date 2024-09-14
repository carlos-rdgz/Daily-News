const apiKey = 'b5c877b1aaa84815a4c83e013086f8bb';
const newsContainer = document.getElementById('news-container');

// Función para obtener noticias
async function fetchNews() {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
    const data = await response.json();
    displayNews(data.articles);
}

// Función para mostrar las noticias en la página
function displayNews(articles) {
    newsContainer.innerHTML = ''; // Limpia las noticias anteriores
    articles.forEach(article => {
        const newsArticle = document.createElement('div');
        newsArticle.classList.add('news-article');
        
        newsArticle.innerHTML = `
            <img src="${article.urlToImage}" alt="News Image">
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;
        newsContainer.appendChild(newsArticle);
    });
}

// Actualizar las noticias cada 10 minutos
setInterval(fetchNews, 600000);

// Cargar las noticias al iniciar
fetchNews();
