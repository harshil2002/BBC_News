export const fetchData = async (
  { category = "health", pageSize = 20 },
  page = 1
) => {
  return fetch(`https://bbc-news-mock-data.herokuapp.com/${category}`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });
};

export const showData = async (data) => {
  // const cont = document.getElementById("container");
  // cont.innerHTML = "";
  const div = document.createElement("div");
  let newstitle = [];
  for (let news of data) {
    const div1 = document.createElement("div");
    //  const img =`<img src="${news.urlToImage}" class="img-fluid">`;
    const newsdata = `<div class="card" style="width: 18rem;">
            <img src="${news.urlToImage}" class="card-img-top" alt="...">
         <div class="card-body">
             <a href = "" class="btn btn-light"><p class="card-title">${news.title}</p></a>
         </div>
         <div class="card-body">
            <p class="card-title"><span class="btn btn-dark">Published At:</span> ${news.publishedAt}</p>
         </div>
        </div>`;
    //  console.log(img)
    div1.innerHTML = newsdata;
    div.append(div1);
    newstitle.push(news.title);
  }
  localStorage.setItem("newsTitle", JSON.stringify(newstitle));
  // div.append(div1);
  console.log(div);
  return div;
};

export const showNewsContent = async (data) => {};
