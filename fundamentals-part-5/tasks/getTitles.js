const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]
  

function getTheTitles1(obj) {
    let outputList = [];

    for (let listElement in obj) {
        title = obj[listElement]["title"];
        outputList.push(title);
    };
    console.log(outputList)
};

const getTheTitles = books.map(title => title.title);
console.log(getTheTitles)

// getTheTitles1(obj=books);