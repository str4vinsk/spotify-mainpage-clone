function PlayMusic()
{
    if(music.paused)
    {
        music.play();
        playandpause.src = 'resources/Icons/playaudio.jpg'
    }
    else
    {
        music.pause();
        playandpause.src = 'resources/Icons/pause1.png'
    }
}

function checkLoop()
{
    if (loopbtn.checked)
    {
        music.removeAttribute("loop")
        loopstyle.style.backgroundColor = "transparent"
    } 
    else 
    {
        music.setAttribute("loop", true)
        loopstyle.style.backgroundColor = "#1db954"
    }
}

var set_volume = function(){
    music.volume = this.value / 100
};

function Next()
{

}
function Previous()
{

}

function NextFifSec()
{
    music.currentTime = music.currentTime + 15
}

function LastFifSec()
{
    music.currentTime = music.currentTime - 15
}

function formatSecondsAsTime(secs, format) // Code from https://stackoverflow.com/users/1380403/kstensland
{
    var hr  = Math.floor(secs / 3600);
    var min = Math.floor((secs - (hr * 3600))/60);
    var sec = Math.floor(secs - (hr * 3600) -  (min * 60));

    if (min < 10){ 
        min = "0" + min; 
    }
    if (sec < 10){ 
        sec  = "0" + sec;
    }

    return min + ':' + sec;
}