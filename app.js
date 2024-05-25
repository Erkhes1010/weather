// API ->zuugch neg torluun huselt damjuulagch
// fetch() -> API ruu huselt/requist ywuulna
// response -> huseltiin harui
// response -> 200: approved, 404,300,500: error
// Promise -> harui ireh amlalt -> .then()
// json() -> zambaraagui data-g tsegtslen garagah code

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((product) => {
    console.log(product);
    console.log(product[0]);
    console.log(product[0].title);
    console.log(product[product.length - 1].rating.rate);
  });

fetch("https://fakestoreapi.com/carts")
  .then((response) => response.json())
  .then((product) => {
    console.log(product);
    console.log(product[0].userId);
  });
const name = document.querySelector(".name");
const temp = document.querySelector(".temp");
const wind = document.querySelector(".wind");
const desc = document.querySelector(".desc");
const searchBtn = document.getElementsByTagName("button")[0];
[0];
const input = document.getElementsByTagName("input")[0];
searchBtn.addEventListener("click", () => {
  let city = input.value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9ac1f5c2d6508db3c616a0d1f80a08fd`
  )
    .then()
    .then((response) => response.json())
    .then((weather) => {
      console.log(weather);
      console.log(weather.main.temp);
      console.log(weather.weather[0].description);
      name.innerText = weather.name;
      temp.innerText = weather.main.temp;
      desc.innerText = weather.weather[0].description;
      wind.innerText = weather.wind.speed;
    });
});
