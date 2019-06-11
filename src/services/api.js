export default async function getRequest(URL){  // 
  const apiURL = await                          // fetch отправляет сам запрос, когда он отправил запрос мы в переменную дата заносим результат приравненный к json формату
    fetch(URL);
    const data = await apiURL.json();
    console.log(data);
    return data;
}