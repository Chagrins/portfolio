function getData(category) {
    category = category.toLowerCase();

    if(category === "" || category === "personal") {
        return `
                <gallery-item src="./resources/personal/mistywalks.png" target="https://mistywalks.com/" caption="Misty Walks" subcaption="Webpage - Custom front end and NodeJS back end" is-list="true"></gallery-item>
                <gallery-item src="./resources/personal/earthmars.png" target="https://itch.io/jam/stl-arcade-jam/rate/310627" caption="From Earth to Mars<br/>STL Arcade Jam 2018" subcaption="Unity" is-list="true"></gallery-item>
                <gallery-item src="https://raw.githubusercontent.com/Floppy-Hat-Studio/Floppy-Saves/main/Resources/Icon128.png" target="https://github.com/Moon-Crash/Floppy-Saves/" caption="Floppy Saves" subcaption="Unreal Engine - Plugin" is-list="true"></gallery-item>
                <gallery-item src="./resources/personal/ssf.png" target="https://apkcombo.com/soda-shake-factory/com.CodeAnvilStudio.SodaShakeFactory/" caption="Soda Shake Factory" subcaption="Unity" is-list="true"></gallery-item>
                <gallery-item src="./resources/personal/losttempleofenki.jpg" target="link" caption="The Lost Temple of Enki" subcaption="Custom Engine" is-list="true"></gallery-item>`;
    }

    if(category === "professional") {
        return `
                <gallery-item src="./resources/logos/boeing.jpg" target="https://www.boeing.com/" caption="Boeing" is-list="true"></gallery-item>
                <gallery-item src="./resources/logos/microsoft.jpg" target="https://news.microsoft.com/source/features/work-life/microsoft-mixed-reality-capture-studios-create-holograms-to-educate-and-entertain/" caption="Microsoft" is-list="true"></gallery-item>
                <gallery-item src="./resources/logos/pixovr.jpg" target="https://pixovr.com/" caption="PixoVR" is-list="true"></gallery-item>
                <gallery-item src="./resources/logos/ars.jpg" target="https://anotherreality.studio/" caption="Another Reality Studio" is-list="true"></gallery-item>
                <gallery-item src="./resources/logos/tapestry.jpg" target="https://www.tapestrysolutions.com/" caption="Tapestry Solutions" is-list="true"></gallery-item>
                <gallery-item src="./resources/logos/indepth.jpg" target="https://indepth.com/" caption="In-Dpeth Engineering" is-list="true"></gallery-item>
                <gallery-item src="./resources/logos/cubic.jpg" target="https://www.youtube.com/watch?v=j-YSUF6Y1a0" caption="Cubic Corp CALS" is-list="true"></gallery-item>
                <gallery-item src="./resources/logos/ea-tib.jpg" target="https://en.wikipedia.org/wiki/NCAA_Football_14" caption="RPG Party" is-list="true"></gallery-item>
                <gallery-item src="./resources/logos/bisim.jpg" target="https://bisimulations.com/" caption="Bohemia Interactive Simulations" is-list="true"></gallery-item>`;
    }

    return ``;
}