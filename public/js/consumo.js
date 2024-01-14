fetch("https://localhost:3000/api/monitores")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((monitores) => {
      const card = document.createElement("div");
      card.classList.add("col-md-4");
      card.classList.add("mb-3");

      card.innerHTML = `
                <div class="card" style="margin: 0 auto; text-align: center; width: 300px; height: 600px;">
                  <img src="${monitores.imagen}" class="card-img-top" alt="${monitores.nombre}" style="margin: 0 auto; text-align: center; width: 300px; height: 300px;">
                  <div class="card-body" style="background-color: antiquewhite; padding: 10px;">
                    <h5 class="card-title">${monitores.nombre}</h5>
                    <p class="card-text">${monitores.descripcion}</p>
                    <p class="card-text">${monitores.edad}</p>
                    <p class="card-text">${monitores.dni}</p>
                  </div>
                </div>
              `;

      document.querySelector(".row").appendChild(card);
    });
  });
