const application = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');
application.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'http://localhost:3000/api/movies', true);
request.onload = function () {
  // console.log(typeof this.response); // Should be string
  // console.log(this.response);
  var data = JSON.parse(this.response);
  // console.log(typeof data); // Should be object
  // console.log(data.data);

  if (request.status >= 200 && request.status < 400) {
    data.data.forEach(movie => {
      console.log(movie.originalTitle);

      const wrapper = document.createElement('div');
      const originalTitle = document.createElement('span');
      originalTitle.textContent = movie.originalTitle;

      const titleType = document.createElement('span');
      titleType.textContent = movie.titleType;

      wrapper.appendChild(originalTitle);
      wrapper.appendChild(titleType);
      container.appendChild(wrapper);

    });
  } else {
    console.log('error');
  }
}

request.send();