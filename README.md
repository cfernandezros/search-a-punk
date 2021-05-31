# search-a-punk

Simple React app that fetches CryptoPunks data from https://cryptopunks.herokuapp.com/api/punks and shows image, id and accessories for each CryptoPunk from a random sample of 20 which can be reandomly fetched again with the Refresh button. Then you can filter the showed punks by accesories with the searchbox.

The fetched sample is limited because otherwise the webpage where the images are stored will throw a 429 server error.

## How to use:
1. Clone this repository
2. Run npm install
3. Run npm start

Based on https://github.com/aneagoie/robofriends tutorial.
