$(document).ready(function () {

    // Use jQuery to get a reference to `load-songs`
    const loadSongs = $("<#load-songs>")
    // Use jQuery to get a reference to `song-list`
    const songList = $("<#song-list>")

    /*
        Attach a click handler to the button with jQuery. When
        the button is clicked, use $.ajax() to load `songs.json`
        from the file system
    */

    // $("#load-songs").click(() => {
    //     console.log("clicked");
    //     const songJson = $.ajax("songs.json").then(buildDOM => {
    //         for (let songs in buildDOM) {
    //             buildDOM.songs.forEach(element => {
    //                 console.log(element);
    //                 const section = $("<section>").addClass("song").appendTo($("#song-list"))
    //                 const h1el = $("<h1>").addClass("song__title").appendTo($("section"))
    //                 const perfSec = $("<section>").addClass("song__description").appendTo($("section"))
    //             });
    //         }
    //     })
    // })

    const secEl = $("<section>").addClass("song").appendTo($("#song-list"))

    $("#load-songs").click(() => {
        console.log("clicked");
        $.ajax("songs.json").then(buildDOM => {
                buildDOM.songs.forEach(element => {
                    console.log("element",element);
                    console.log(element.title);
                    $("<h1>").addClass("song__title").text(element.title).appendTo(secEl)
                    $("<section>").addClass("song__description").text(`Performed by ${element.artist} on the album ${element.album}`).appendTo($(secEl))
                });
        })
    })
    /*
        Chain a `.then()` method to the ajax call, and when
        it is complete build a DOM component for each song with
        the following structure. Use the jQuery append() method
        to put an HTML representation of each song the DOM as a
        child component of the .

            <section class="song">
                <h1 class="song__title">{Title of song}</h1>
                <section class="song__description">
                    Performed by {artist} on the album {album}
                </section>
            </section>
    */
})