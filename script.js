function toggleSearch() {
    const searchInput = document.querySelector('.search-bar');
    if (searchInput.style.display === 'none' || searchInput.style.display === '') {
        searchInput.style.display = 'block'; 
        searchInput.focus(); 
    } else {
        searchInput.style.display = 'none'; 
    }
}
function toggleMenu() {
        const sideMenu = document.getElementById('sideMenu');
        const overlay = document.getElementById('overlay');
        if (sideMenu.style.left === '0px') {
            sideMenu.style.left = '-250px';
            overlay.style.display = 'none';
        } else {
            sideMenu.style.left = '0px';
            overlay.style.display = 'block';
        }
    }

    function logout() {
        alert('You have logged out successfully.');
        window.location.href = 'login.html';
    }
