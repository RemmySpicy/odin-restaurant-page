export default function createHome() {
    const div = document.createElement('div');
    div.classList.add('home', 'tab');
    const markup = `
        <div class="container">
            <div class="hero">
                <h2>Welcome to RemmySpicy's Restaurant</h2>
                <p>"Let us spice up your food life with our yummy delicacies!</p>
                <button type="submit" class="btn-pry"><a href="#menu">Order Now!</a></button>
            </div>
        </div>
    `;

    div.innerHTML =  markup;
    return div;
}