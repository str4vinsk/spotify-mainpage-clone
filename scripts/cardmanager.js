function LoadPlayer(elem)
{
    playandpause.src = 'resources/Icons/playaudio.jpg'
    
    // Get the first word of the button id
    var card_id = elem.id.split('-')[0]
    var card = document.getElementById(card_id) // And search for the card with that id

    var checkChild = recentmusic.querySelector(`#${card_id}`) == null;

    if (checkChild) 
    {
        recentmusic.appendChild(card.cloneNode(true))
    }
    
    var audioFile = document.getElementById(`${card_id}-audio`) // Get the audio file of that card
    var music_file = audioFile.getAttribute('data-value') // Get the link to the audio file

    // Play the audio of that card
    source.src = music_file
    music.load()
    music.play()
    
    // Replaces footer data with card data
    var playlistLogo = card.getElementsByClassName('playlist_logos')[0].src
    playerImage.setAttribute('src', playlistLogo)

    var title = card.getElementsByClassName('playlist_title')[0]
    var title_text = title.getAttribute('data-value')
    var title_text = title_text.length > 40 ? title_text.substring(0, 40 - 3) + "..." : title_text
    playerName.innerHTML = title_text

    var desc = card.getElementsByClassName('playlist_author')[0].innerHTML
    playerDesc.innerHTML = desc
    
}


function CreateCard(cardname)
{
    // Here a card is created for the added playlist

    var cardbody = document.createElement("li")
    setAttributes(cardbody, {"id": cardname, "class": "playlist_card"})
    
    
    var cardimg = document.createElement("img")
    setAttributes(cardimg, {"class": "playlist_logos", "src": "resources/Logos/default.png"})
    

    var cardtitle = document.createElement("p")
    setAttributes(cardtitle, {"class": "playlist_title", "data-value": cardname})
    
    var cardname_format = cardname.length > length ? cardname.substring(0, length - 3) + "..." : cardname
    cardtitle.innerHTML = cardname_format
    
    
    var carddescription = document.createElement("p")
    setAttributes(carddescription, {"class": "playlist_author"})
    carddescription.innerHTML = "Vitor Conroy"

    var audiosource = document.createElement("a")
    setAttributes(audiosource, {"data-value": "https://docs.google.com/uc?export=download&id=1-J8pxXqUbhE1RBmv-NKBLRljosUV1D_W", "id": `${cardname}-audio`})
    
    

    var btn = document.createElement("img")
    setAttributes(btn, {"class": "playbtn", "id": `${cardname}-playbtn`, "src": `resources/Icons/playbtn.png`, "onclick": "LoadPlayer(this)"})
    
    cardbody.appendChild(cardimg)
    cardbody.appendChild(cardtitle)
    cardbody.appendChild(carddescription)
    cardbody.appendChild(audiosource)
    cardbody.appendChild(btn)
    
    cardul.append(cardbody)
}

function createPlaylist()
{
    // Here is created a new playlist and add to the sidebar menu
    var sidebar = document.getElementById("sideul")
    var textBox = document.getElementsByClassName("modal-box")[0].value
    var vrfy = document.getElementById(textBox)

    if (vrfy != null)
    {
        alert("Uma playlist com esse mesmo nome foi detectada, por favor insira um nome diferente para prosseguir.")
        return
    }

    var playlist_added = document.createElement("li")

    playlist_added.setAttribute("class", "new_playlist")
    var textBox_format = textBox.length > 40 ? textBox.substring(0, 40 - 3) + "..." : textBox
    playlist_added.innerHTML = textBox_format

    sidebar.appendChild(playlist_added)
    window.modal.style.display = "none"

    CreateCard(textBox)
}