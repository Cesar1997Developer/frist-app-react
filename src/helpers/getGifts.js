
export const getGifs = async (category) => {
    let apiGift = `https://api.giphy.com/v1/gifs/search?api_key=3fkkP7v7B9wbrRHk7XFmQJL5uZsuch5F&q=${encodeURI(category)}&limit=10`;

    const resp = await fetch(apiGift);
    const { data } = await resp.json();

    const gifts = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,

        }
    })

   return gifts;

}