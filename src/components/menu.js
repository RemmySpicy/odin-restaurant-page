export default function createMenu() {
    const div = document.createElement('div');
    div.classList.add('menu', 'tab', 'hidden');

    const img = new Image();
    img.src = "/src/menu-item-1.jpg";

    console.log(img);

    const markup = `
        <div class="container">
            <div class="heading">
                <p>Select Your Meal</p>
                <h2>Today's Menu</h2>
            </div>

            <ul>
                <li class="card">
                    <h3>Breakfast</h3>
                    ${img}
                    <img src="/src/menu-item-1.jpg" alt="food 1">
                    <p>Medium bowl of Shrimpy Ricy Soupy thingy</p>
                    <button><a href="">Order Now</a></button>
                </li>
                <li class="card">
                    <h3>Lunch</h3>
                    <img src="/src/menu-item-2.jpg" alt="food 2">
                    <p>Roasted rips with sliced tomatoes and potatoes</p>
                    <button><a href="">Order Now</a></button>
                </li>
                <li class="card">
                <h3>Dinner</h3>
                    <img src="/src/menu-item-3.jpg" alt="food 3">
                    <p>Meaty vegetable dish on ceramic bown</p>
                    <button><a href="">Order Now</a></button>
                </li>
            </ul>
        </div>
    `;

    div.innerHTML = markup;
    return div;
}