let sampleElem = document.querySelector('#btn1');

function getData(string) {
    fetch(`https://engineering-task.elancoapps.com/api/${string}`)
        .then(res => {
            if (!res.ok) {
                throw new Error('Reponse Failed')
            }
            return res.json();
        })
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.error(`Fetch Error: ${err}`)
        });
}

sampleElem.addEventListener('click', () => {
    getData(sampleElem.textContent);
});