/*e36b5c825d4e4a27b3b262445a398ffd */
/* 198bd3c9c502495b83502cc5a2321c98*/
let fetchData = async ({ category = "general", pageSize = 25, page = 1 }) => {
  // utkarsh 198bd3c9c502495b83502cc5a2321c98
  return fetch(
    `https://bbc-news-mock-data.herokuapp.com/${category}?_page=${page}&_limit=${pageSize}`
  )
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      // console.log(res.articles)
      return res;
    })
    .catch(function (error) {});
};
const loadData = async (data, container) => {
  console.log(container);
  let cont = document.getElementById(container);
  cont.innerHTML = null;
  let div = document.createElement("div");
  // div.className = "innerDiv"
  if (container === "top") {
    for (let news of data) {
      let newsArticle = await handleTop(news);
      div.append(newsArticle);
    }
  } else if (container === "main_right") {
    for (let news of data) {
      let newsArticle = await handleside(news);
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

/*async function loadData(data,container){
    console.log(container);
    let cont = document.getElementById(container);
    cont.innerHTML = null;
    let div = document.createElement("div")
   for(let news of data){
      let newsArticle =  await handleNews(news)
     // console.log(box)
      div.append(newsArticle)
   }
   cont.append(div);

}
*/
const handleTop = (data) => {
  let box = document.createElement("div");
  box.className = "top_div";
  let img = document.createElement("img");
  img.className = "img_box_top";
  img.src = `${data.urlToImage}`;
  let div1 = document.createElement("div");
  let p = document.createElement("h3");
  p.textContent = `${data.title}`;
  let description = document.createElement("p");
  description.textContent = `${data.description}`;

  div1.append(p, description);
  box.append(img, div1);
  return box;
};
const handleside = (data) => {
  let box = document.createElement("div");
  box.className = "top_div";
  let img = document.createElement("img");
  img.className = "img_box_top";
  img.src = `${data.urlToImage}`;
  let div1 = document.createElement("div");
  let p = document.createElement("h3");
  p.textContent = `${data.title}`;
  let publishDate = document.createElement("p");
  publishDate.style.padding = "1rem 0rem";
  publishDate.textContent = `Published At: ${data.publishedAt}`;

  div1.append(p, publishDate);
  box.append(img, div1);
  return box;
};
const handleNews = (data) => {
  // console.log(data);
  let box = document.createElement("div");
  box.style.paddngTop = "30px";
  box.className = "boxes";
  let img = document.createElement("img");
  img.className = "img_box";
  img.src = `${data.urlToImage}`;
  let p = document.createElement("h3");
  p.textContent = `${data.title}`;
  let publishDate = document.createElement("p");
  publishDate.style.padding = "1rem 0rem";
  publishDate.textContent = `Published At: ${data.publishedAt}`;

  box.append(img, p, publishDate);
  return box;
};

export { fetchData, loadData, handleNews };
