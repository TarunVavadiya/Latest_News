// aa6ebcacd349471d87e5d63ee44d6275

let apiKey = 'aa6ebcacd349471d87e5d63ee44d6275';

let newsAccordion = document.getElementById('newsAccordion');

// create get request 
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/everything?q=tesla&from=2022-05-22&sortBy=publishedAt&apiKey=${apiKey}`, true);
xhr.getResponseHeader('Content-type', 'application/json');

xhr.onload = function () {
    if (this.status === 200) {
        let obj = JSON.parse(this.responseText);
        let articles = obj.articles;
        // console.log(articles);
        let newsHtml = '';
        articles.forEach(function (element, index) {
            
            let news = `<p>
                            <a class="btn btn-secondary" data-bs-toggle="collapse" href="#multiCollapse${index}" role="button"
                            aria-expanded="false" aria-controls="multiCollapse${index}"><b><u class="text-info">Breaking News ${index+1}:</u></b> ${element['title']}</a>
                        </p>
                        <div class="row">
                            <div class="col">
                                <div class="collapse multi-collapse" id="multiCollapse${index}">
                                    <div class="card card-body"> ${element['content']} <a href="${element['url']}" target="_blank">Read More</a> </div>
                                </div>
                            </div>
                        </div>`;
            newsHtml += news;
            newsAccordion.innerHTML = newsHtml;
        });
        } else {
            console.error('some error occured!');
        }
}

    xhr.send();


