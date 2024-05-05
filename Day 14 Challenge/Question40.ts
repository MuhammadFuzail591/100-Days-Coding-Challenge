
function makeAlbum(artistName:string,title:string,tracks?:number):object{
    let Album:Record<string,any>={
        "ArtistName":artistName,
        "Title":title
    }

    if(tracks !== undefined){
        Album['tracks']=tracks
    }
    return Album
}

let Album1=makeAlbum("Fuzail","Mahya wy");
let Album2=makeAlbum("Atta Ullah","Ja wekh leya",20);
let Album3=makeAlbum("Naseebo Lal","Naseeb");

console.log(Album1)
console.log(Album2)
console.log(Album3)

// let album={artistName,title}
// if(tracks){
//     album['tracks']=tracks
// }