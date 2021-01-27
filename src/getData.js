const getData = async () => {

    const data = await fetch('./furniture.json').catch((err)=>console.log(err))

    if (data) {
    return data.json();
    }
    return data;

    




}
export default getData;