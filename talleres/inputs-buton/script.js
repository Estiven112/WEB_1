const btnCrear = document.getElementById('btnCrear');
const contenedor = document.getElementById('contenedorProductos');

btnCrear.addEventListener('click', () => {

    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
    const imagen = document.getElementById('imagen').value;
    const cantidad = document.getElementById('cantidad').value;

    if (nombre === '' || precio === '' || imagen === '' || cantidad === '') {
        alert('Por favor, completa todos los campos');
        return;
    }

    for (let i = 0; i < cantidad; i++) {

        const nuevatarjeta = `
        <div class="col">
            <div class="card h-100 shadow-sm">
                <img src="${imagen}" class="card-img-top" alt="${nombre}" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title text-capitalize">${nombre}</h5>
                    <p class="card-text text-success fw-bold">$${precio}</p>
                </div>
            </div>
        </div>
        `;

        contenedor.innerHTML += nuevatarjeta;
    }

    document.getElementById('nombre').value = '';
    document.getElementById('precio').value = '';
    document.getElementById('imagen').value = '';
    document.getElementById('cantidad').value = '';
});