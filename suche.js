const wikiSeiten = [
    { name: "Startseite", url: "index.html", icon: "🏠" },
    { name: "Spieler", url: "spieler.html", icon: "👥" },
    { name: "Spielmodi", url: "spielmodi.html", icon: "🎮" },
    { name: "Karte", url: "karte.html", icon: "🗺️" },
    { name: "Bauwerke", url: "bauwerke.html", icon: "🏰" },
    { name: "Fraktionen & Teams", url: "fraktionen.html", icon: "⚔️" },

    { name: "Aaron", url: "aaron.html", icon: "👤" },
    { name: "Eric", url: "eric.html", icon: "👤" },
    { name: "Eric2", url: "eric2.html", icon: "👤" },
    { name: "Anton", url: "anton.html", icon: "👤" },
    { name: "Oskar", url: "oskar.html", icon: "👤" },
    { name: "Theopa", url: "theopa.html", icon: "👤" },
    { name: "Masterix", url: "masterix.html", icon: "👤" },
    { name: "Walterfrosch", url: "walterfrosch.html", icon: "🐸" }
];


function sucheWiki() {

    const eingabe = document.getElementById("wikiSuche");
    const ergebnisse = document.getElementById("suchErgebnisse");

    const suchtext = eingabe.value.toLowerCase().trim();


    if (suchtext === "") {

        ergebnisse.innerHTML = "";

        return;
    }


    const treffer = wikiSeiten.filter(seite =>
        seite.name.toLowerCase().includes(suchtext)
    );


    if (treffer.length === 0) {

        ergebnisse.innerHTML = `
            <div class="kein-treffer">
                ❌ Keine Ergebnisse gefunden
            </div>
        `;

        return;
    }


    ergebnisse.innerHTML = treffer.map(seite => `

        <a href="${seite.url}" class="such-ergebnis">

            <span>${seite.icon}</span>

            ${seite.name}

        </a>

    `).join("");

}