function Navbar() {
    let div = document.createElement("div")
    div.id = "navbar"
    div.innerHTML = `<img class="logo" src="https://logos-download.com/wp-content/uploads/2016/06/BBC_logo_black_background.png">
    <img class="signInLogo" src="https://as2.ftcdn.net/v2/jpg/00/65/77/27/500_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg">
    <p class="signIn"><a href="./signup.html">Sign in</a></p>
    <p><a href="./home.html">Home</a></p>
    <p><a href="./travel.html">Travel</a></p>
    <p><a href="./sports.html">Sport</a></p>
    <p><a href="./health.html">Health</a></p>
    <p><a href="./Technology.html">Technology</a></p>
    <p><a href="./science.html">Science</a></p>
    <p><a href="./entertainment.html">Entertainment</a></p>
    <p>Language <button id="more" > &#8964;</button>
    <select name="languages" id="lang">
        <option value="en">English</option>
        <option value="de">German</option>
        <option value="fr">French</option>
        <option value="nl">Dutch</option>
        <option value="ru">Russian</option>
        <option value="zh">Chinese</option>
        <option value="pt">Portugese</option>
    </select> 
    </p> 
    <input id="search" type="search" placeholder="Search" name="search"> 
    <img id="searchIcon" src="https://as1.ftcdn.net/v2/jpg/03/25/73/68/1000_F_325736897_lyouuiCkWI59SZAPGPLZ5OWQjw2Gw4qY.jpg">`
    return div
}
export default Navbar