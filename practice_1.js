const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}
var p1 = beatles.members[1].name;
var p2 = beatles.history.formed;
var p3 = beatles.history.disbanded;
var p4 = beatles.members[1].birth;
var p5 = beatles.albums[3];

console.log(`${p1} was in the Beatles from ${p2} to ${p3}. He was born in ${p4}. He contributed to the ${p5}.`)