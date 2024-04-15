fetch(
  "https://api.unsplash.com/photos/random?query=programming&count=6&client_id=Vxq3QCrTGb3ppZYc2olFIKeGN2E3VNI054-Erh3oQsk"
)
  .then((response) => response.json())
  .then((data) => {
    // Procesar los datos de la respuesta de la API
    const images = data;

    // Mostrar las imágenes en el currículum
    const unsplashContainer = document.getElementById("unsplash-container");
    unsplashContainer.innerHTML = `
      ${images
        .map(
          (image) =>
            `<div class="unsplash-images"><img src="${image.urls.small}" alt="${image.alt_description}"></div>`
        )
        .join("")}
    `;
  })
  .catch((error) => {
    console.error("Error al obtener los datos de Unsplash:", error);
  });
