export default function createContact() {
    const div = document.createElement('div');
    div.classList.add('contact', 'tab', 'hidden');

    const markup = `
        <div class="container">
            <h2>Book A Table</h2>

            <div class="contact-details">
                <div class="about">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non rem debitis eius dolorem, mollitia, nemo sint, hic nihil fuga laudantium facere at.</p>
            </div>
            
            <div class="reserve">
                <form action="">
                    <label for="people-num">Number of People</label>
                    <input type="number" min="1" max="15" name="people-num" id="" value="2">
                    <label for="date">Choose Day</label>
                    <input type="date">
                    <label for="time">Select Time</label>
                    <input type="time" name="" id="">
                    <button class="btn-pry" type="submit"><a href="">Make Reservation</a></button>
                </form>
            </div>
        </div>    
    `;

    div.innerHTML = markup;
    return div;
}