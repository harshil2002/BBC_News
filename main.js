export const fetchData = async (
  { category = "general", pageSize = 25 },
  page = 1
) => {
  // Mumma's :  510dfd4725824bd2ace75ec56a4d1c61
  // Mine : 65de7cf43ee34250a7fad72afaea85d5
  return fetch(
    `https://bbc-news-mock-data.herokuapp.com/${category}?_page=${page}&_limit=${pageSize}`
  )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });
};
export const showData = async (data, container) => {
  // console.log(container)
  let cont = document.getElementById(container);
  //cont.innerHTML = null;
  let div = document.createElement("div");
  div.className = "innerDiv";
  if (container === "container_1") {
    for (let news of data) {
      let newsArticle = await main(news);
      div.append(newsArticle);
    }
  } else if (container === "reel_content" || container === "science_content") {
    for (let news of data) {
      let newsArticle = await reelData(news);
      div.append(newsArticle);
    }
  } else {
    for (let news of data) {
      let newsArticle = await handleNews(news);
      div.append(newsArticle);
    }
  }

  cont.append(div);
};
const main = async (data) => {
  let box = document.createElement("div");
  box.className = "boxes";
  box.style.backgroundImage = `url(${data.urlToImage})`;
  let h4 = document.createElement("h4");
  h4.textContent = `${data.title}`;
  // h4.style.fontSize = "16px"
  let publishDate = document.createElement("p");
  publishDate.textContent = `Published At: ${data.publishedAt}`;
  box.append(h4, publishDate);
  return box;
};
const handleNews = async (data) => {
  let box = document.createElement("div");
  box.className = "section";

  let img = document.createElement("img");
  img.src = `${data.urlToImage}`;

  let h5 = document.createElement("h5");
  h5.textContent = `${data.title}`;
  h5.style.padding = "0px";
  h5.style.margin = "0px";
  // h5.style.fontSize = "16px"
  let h6 = document.createElement("h6");
  // h6.style.fontSize = "14px";
  h6.style.padding = "0px";
  h6.style.margin = "0px";
  h6.style.marginTop = "5px";
  h6.style.color = "red";
  h6.textContent = `${data.author}`;
  if (data.author === null) {
    h6.textContent = "Siddhesh Shamla";
  }
  let publishDate = document.createElement("p");
  publishDate.textContent = `Published At: ${data.publishedAt}`;
  box.append(img, h5, h6, publishDate);
  return box;
};
const reelData = async (data) => {
  let box = document.createElement("div");
  box.className = "unique";

  let img = document.createElement("img");
  img.src = `${data.urlToImage}`;

  let h5 = document.createElement("h5");
  h5.textContent = `${data.title}`;
  h5.style.padding = "0px";
  h5.style.margin = "0px";
  // h5.style.fontSize = "16px";

  box.append(img, h5);
  return box;
};
export const weather = async ({ query = "Pune" }) => {
  // http://api.weatherstack.com/current?access_key=881365cb8cd266e52b9bc179c3ee104b&query=New%20York
  return fetch(
    `http://api.weatherstack.com/current?access_key=881365cb8cd266e52b9bc179c3ee104b&query=${query}`
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      // console.log(response)
      return response;
    });
};
export const weatherShow = async (data, container) => {
  let cont = document.getElementById(container);
  cont.innerHTML = null;
  let location = document.createElement("h6");
  location.style.padding = "0px";
  location.style.margin = "0px";
  location.textContent = `${data.location.name},${data.location.region},${data.location.country}`;
  // location.style.fontSize = "18px";

  let img = document.createElement("img");
  img.src = `${data.current.weather_icons}`;
  img.style.alignContent = "center";

  let info = document.createElement("p");
  info.textContent = `Cloudcover:${data.current.cloudcover} | Humidity: ${data.current.humidity} | Temp: ${data.current.temperature} | Observation Time: ${data.current.observation_time}`;
  cont.append(location, img, info);
};

export const fetchsearch = async ({ value, page, language = en }) => {
  page = page || 1;
  //510dfd4725824bd2ace75ec56a4d1c61
  return fetch(
    `https://newsapi.org/v2/everything?apiKey=510dfd4725824bd2ace75ec56a4d1c61&q=${value}&page=${page}&pageSize=10&language=${language}`
  )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      //console.log(res.articles)
      return res.articles;
    });
};
export const showResultsData = async (data, container) => {
  let cont = document.getElementById(container);
  //cont.innerHTML = null;
  // console.log(cont)
  let div = document.createElement("div");
  div.id = "resultsInnerDiv";
  for (let news of data) {
    let newsArticle = await createCard(news);
    div.append(newsArticle);
  }
  cont.append(div);
};
const createCard = async (data) => {
  let card = document.createElement("div");
  card.className = "cards";

  let img = document.createElement("img");
  img.src = `${data.urlToImage}`;

  let h4 = document.createElement("h4");
  h4.textContent = `${data.title}`;

  let p = document.createElement("p");
  p.innerHTML = `${data.description}`;

  card.append(img, h4, p);
  return card;
};
