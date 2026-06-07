const participants = [];

function addParticipant() {

    const input =
        document.getElementById("jsonInput");

    try {

        const participant =
            JSON.parse(input.value);

        participants.push(participant);

        renderParticipants();

        input.value = "";

    } catch {

        alert("Ogiltig JSON");
    }
}

function renderParticipants() {

    const list =
        document.getElementById("participantList");

    list.innerHTML = "";

    participants.forEach(person => {

        const li =
            document.createElement("li");

        li.textContent =
            `${person.firstName} ${person.lastName}`;

        list.appendChild(li);
    });
}

function generateMystery() {

    if (participants.length < 2) {

        alert(
            "Lägg till minst två deltagare."
        );

        return;
    }

    const motives = [

        "En konflikt om ett arv",

        "En stulen samling veteranmopeder",

        "En hemlig kärleksaffär",

        "En gammal familjefejd",

        "En dyrbar padelracket",

        "Ett avslöjat svek",

        "En mystisk skuld",

        "En förstörd semester"
    ];

    const victim =
        participants[
            Math.floor(
                Math.random() *
                participants.length
            )
        ];

    let killer;

    do {

        killer =
            participants[
                Math.floor(
                    Math.random() *
                    participants.length
                )
            ];

    } while (
        killer.firstName === victim.firstName &&
        killer.lastName === victim.lastName
    );

    const motive =
        motives[
            Math.floor(
                Math.random() *
                motives.length
            )
        ];

    document.getElementById("result").innerHTML = `

        <div class="card">

            <h2>Mysterium</h2>

            <h3>Offer</h3>

            <p>
                ${victim.firstName}
                ${victim.lastName}
            </p>

            <h3>Mördare</h3>

            <p>
                ${killer.firstName}
                ${killer.lastName}
            </p>

            <h3>Motiv</h3>

            <p>${motive}</p>

            <h3>Bakgrund</h3>

            <p>

                Familjen samlades för en trevlig
                tillställning.

                Under kvällen uppstod flera
                konflikter.

                Morgonen därpå hittades
                ${victim.firstName}
                död.

            </p>

            <h3>Lösning</h3>

            <p>

                Mördaren var
                ${killer.firstName}
                ${killer.lastName}.

            </p>

        </div>
    `;
}