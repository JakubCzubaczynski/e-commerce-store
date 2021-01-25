const getData = async () => {

    const data = await fetch('./furniture.json').then((data) => data.json()).then(data => data);

    function display(x) {
        console.log(x);
    }

    display(data);

    




}
export default getData;