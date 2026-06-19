// Seleccionamos los elementos necesarios
const sidebar = document.getElementById('sidebar');
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');

// Función para abrir el menú
const openSidebar = () => {
    sidebar.classList.add('active');
};

// Función para cerrar el menú
const closeSidebar = () => {
    sidebar.classList.remove('active');
};

// Event Listeners
openBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);

// Cerrar al hacer clic fuera del sidebar (en móvil)
document.addEventListener('mousedown', (e) => {
    if (window.innerWidth <= 768 && 
        !sidebar.contains(e.target) && 
        e.target !== openBtn) {
        closeSidebar();
    }
});