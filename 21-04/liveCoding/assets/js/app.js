//MILESTONE 1
//Creiamo un oggetto Movie, con le seguenti proprieta: 
/* -images che conterra una lista di immagini
    -
    title che conterra il titolo del film -
    category che conterra la categoria del film -
    length che conterra la lunghezza del film in minuti */

const app = new Vue({
    el: '#app',
    data: {
        activeImage: 0,
        movie: {
            images: ['https://www.themoviedb.org/t/p/original/sSdRI34rbqXj21SruV52AUoXRkE.jpg', 'https://www.themoviedb.org/t/p/original/bbqz34ytdrYUcK3GZSAwsrW2Ee7.jpg', 'https://www.themoviedb.org/t/p/original/eGrA9icvrXp0WuwstypaAKtJkWc.jpg', 'https://www.themoviedb.org/t/p/original/4NqKmna26QirDqj3vhAggXJ31Ru.jpg', 'https://www.themoviedb.org/t/p/original/uhtZdw7rsBHlALoyMT8rtCVBbMj.jpg'],
            title: 'Venom: Let There Be Carnage',
            category: 'Action',
            lenght: '120'
        }
    },
    methods: {
        prevImage() {
            console.log('prev img');
            if (this.activeImage === 0) {
                this.activeImage = this.movie.images.length
            }
            this.activeImage--
        },
        nextImage() {
            console.log('next img');
            this.activeImage++
                if (this.activeImage === this.movie.images.length) {
                    this.activeImage = 0;
                }
        }
    }
});