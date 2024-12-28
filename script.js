document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.createElement('div');

    // Sidebar HTML
    sidebar.classList.add('sidebar');
    sidebar.innerHTML = `
        <span class="close-btn">&times;</span>
        <ul>
            <li>Products <img src="caret.png" alt="down-caret"></li>
            <li>For business <img src="caret.png" alt="down-caret"></li>
            <li>Resources <img src="caret.png" alt="down-caret"></li>
            <li>Support <img src="caret.png" alt="down-caret"></li>
            <li>Our Company <img src="caret.png" alt="down-caret"></li>
            <li><img src="https://imgs.search.brave.com/LWqvIA9tagEMNotGYlcvqPhos4B11FPW82IR0RTksG0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9jb21tdW5p/Y2F0aW9uLWNoYXQt/Y2FsbC9sYW5ndWFn/ZS10cmFuc2xhdGUt/c3BlZWNoLWJ1YmJs/ZXMtaWNvbi5zdmc" alt="language"></li>
            <li><img src="search.png" alt="search"></li>
        </ul>
    `;
    document.body.appendChild(sidebar);

    // Toggle sidebar
    menuToggle.addEventListener('click', () => {
        sidebar.classList.add('open');
    });

    // Close sidebar
    sidebar.querySelector('.close-btn').addEventListener('click', () => {
        sidebar.classList.remove('open');
    });
});