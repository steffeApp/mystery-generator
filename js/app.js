let currentStep = 1;

const totalSteps = 7;

const participant = {
    firstName: "",
    lastName: "",
    nickname: "",
    email: "",
    age: "",
    occupation: "",

    partner: "",
    partnerStatus: "",

    mother: "",
    motherStatus: "",

    father: "",
    fatherStatus: "",

    siblings: [],

    children: [],

    bestFriend: "",
bestFriendNickname: "",

interests: [],
familyRoles: [],

personalityTraits: [],

strengths: [],

weaknesses: []
};

function renderStep() {

    document.getElementById("stepText").innerText =
        `Steg ${currentStep} av ${totalSteps}`;

    document.getElementById("progressBar").style.width =
        `${(currentStep / totalSteps) * 100}%`;

    const content =
        document.getElementById("stepContent");

    if (currentStep === 1) {

        content.innerHTML = `

            <h2>Grunduppgifter</h2>

            <label>Foto</label>
            <input type="file" id="photo">

            <label>Förnamn</label>
            <input type="text"
                id="firstName"
                value="${participant.firstName}">

            <label>Efternamn</label>
            <input type="text"
                id="lastName"
                value="${participant.lastName}">

            <label>Smeknamn</label>
            <input type="text"
                id="nickname"
                value="${participant.nickname}">

            <label>E-post</label>
            <input type="email"
                id="email"
                value="${participant.email}">

            <label>Ålder</label>
            <input type="number"
                id="age"
                value="${participant.age}">

            <label>Sysselsättning</label>
            <input
                type="text"
                id="occupation"
                value="${participant.occupation}">
        `;

    }

    else if (currentStep === 2) {

        let siblingsHtml = "";

        participant.siblings.forEach((sibling, index) => {

            siblingsHtml += `

            <div class="family-card">

                <label>Syskon ${index + 1}</label>

                <input
                    type="text"
                    id="sibling-name-${index}"
                    placeholder="Namn"
                    value="${sibling.name}">

                <select id="sibling-type-${index}">
                    <option value="">Relation</option>

                    <option value="Storebror"
                        ${sibling.type === "Storebror" ? "selected" : ""}>
                        Storebror
                    </option>

                    <option value="Lillebror"
                        ${sibling.type === "Lillebror" ? "selected" : ""}>
                        Lillebror
                    </option>

                    <option value="Storasyster"
                        ${sibling.type === "Storasyster" ? "selected" : ""}>
                        Storasyster
                    </option>

                    <option value="Lillasyster"
                        ${sibling.type === "Lillasyster" ? "selected" : ""}>
                        Lillasyster
                    </option>

                    <option value="Tvilling"
                        ${sibling.type === "Tvilling" ? "selected" : ""}>
                        Tvilling
                    </option>

                    <option value="Halvsyskon"
                        ${sibling.type === "Halvsyskon" ? "selected" : ""}>
                        Halvsyskon
                    </option>
                </select>

                <select id="sibling-status-${index}">
                    <option value="">Status</option>

                    <option value="Lever"
                        ${sibling.status === "Lever" ? "selected" : ""}>
                        Lever
                    </option>

                    <option value="Avliden"
                        ${sibling.status === "Avliden" ? "selected" : ""}>
                        Avliden
                    </option>

                    <option value="Okänd"
                        ${sibling.status === "Okänd" ? "selected" : ""}>
                        Okänd
                    </option>

                </select>

            </div>
            `;
        });

        let childrenHtml = "";

        participant.children.forEach((child, index) => {

            childrenHtml += `

            <div class="family-card">

                <label>Barn ${index + 1}</label>

                <input
                    type="text"
                    id="child-name-${index}"
                    placeholder="Namn"
                    value="${child.name}">

                <select id="child-status-${index}">

                    <option value="">Status</option>

                    <option value="Lever"
                        ${child.status === "Lever" ? "selected" : ""}>
                        Lever
                    </option>

                    <option value="Avliden"
                        ${child.status === "Avliden" ? "selected" : ""}>
                        Avliden
                    </option>

                    <option value="Okänd"
                        ${child.status === "Okänd" ? "selected" : ""}>
                        Okänd
                    </option>

                </select>

            </div>
            `;
        });

        content.innerHTML = `

            <h2>Relationer</h2>

            <label>Partner</label>
            <input
                type="text"
                id="partner"
                value="${participant.partner}">

            <label>Partnerstatus</label>
            <select id="partnerStatus">

                <option value="">Välj</option>

                <option value="Gift"
                    ${participant.partnerStatus === "Gift" ? "selected" : ""}>
                    Gift
                </option>

                <option value="Sambo"
                    ${participant.partnerStatus === "Sambo" ? "selected" : ""}>
                    Sambo
                </option>

                <option value="Flickvän"
                    ${participant.partnerStatus === "Flickvän" ? "selected" : ""}>
                    Flickvän
                </option>

                <option value="Pojkvän"
                    ${participant.partnerStatus === "Pojkvän" ? "selected" : ""}>
                    Pojkvän
                </option>

                <option value="Ex-partner"
                    ${participant.partnerStatus === "Ex-partner" ? "selected" : ""}>
                    Ex-partner
                </option>

                <option value="Singel"
                    ${participant.partnerStatus === "Singel" ? "selected" : ""}>
                    Singel
                </option>

            </select>

            <label>Mamma</label>
            <input
                type="text"
                id="mother"
                value="${participant.mother}">

            <label>Mammas status</label>
            <select id="motherStatus">
                <option value="">Välj</option>
                <option value="Lever" ${participant.motherStatus === "Lever" ? "selected" : ""}>Lever</option>
                <option value="Avliden" ${participant.motherStatus === "Avliden" ? "selected" : ""}>Avliden</option>
                <option value="Okänd" ${participant.motherStatus === "Okänd" ? "selected" : ""}>Okänd</option>
            </select>

            <label>Pappa</label>
            <input
                type="text"
                id="father"
                value="${participant.father}">

            <label>Pappas status</label>
            <select id="fatherStatus">
                <option value="">Välj</option>
                <option value="Lever" ${participant.fatherStatus === "Lever" ? "selected" : ""}>Lever</option>
                <option value="Avliden" ${participant.fatherStatus === "Avliden" ? "selected" : ""}>Avliden</option>
                <option value="Okänd" ${participant.fatherStatus === "Okänd" ? "selected" : ""}>Okänd</option>
            </select>

            <h3>Syskon</h3>

            ${siblingsHtml}

            <button type="button" onclick="addSibling()">
                + Lägg till syskon
            </button>

            <h3 style="margin-top:25px;">Barn</h3>

            ${childrenHtml}

            <button type="button" onclick="addChild()">
                + Lägg till barn
            </button>

            <label style="margin-top:25px;">Bästa vän</label>

<input
    type="text"
    id="bestFriend"
    placeholder="Namn"
    value="${participant.bestFriend}">

<label>Bästa väns smeknamn</label>

<input
    type="text"
    id="bestFriendNickname"
    placeholder="Smeknamn"
    value="${participant.bestFriendNickname}">
        `;
    }

else if (currentStep === 3) {

    const interests = [
        "Fotboll",
        "Padel",
        "Gaming",
        "Musik",
        "Film",
        "Träning",
        "Matlagning",
        "Resor",
        "Bilar",
        "Teknik",
        "Snickeri",
        "Fiske",
        "Motorsport",
        "Djur",
        "Friluftsliv"
    ];

    const familyRoles = [
        "Planerar allt",
        "Organiserar",
        "Lagar mat",
        "Löser problem",
        "Skämtar",
        "Fixar teknik",
        "Håller fred",
        "Startar projekt",
        "Tar initiativ",
        "Skapar kaos",
        "Håller ordning",
        "Tar hand om djur"
    ];

    content.innerHTML = `

        <h2>Intressen</h2>

        <p>
            ${participant.interests.length} / 5 valda
        </p>

        <div class="chip-container">

            ${interests.map(i =>
                renderChip(
                    i,
                    participant.interests.includes(i),
                    `toggleInterest('${i}')`
                )
            ).join("")}

        </div>

        <h2 style="margin-top:30px;">
            Roll i familjen
        </h2>

        <p>
            ${participant.familyRoles.length} / 3 valda
        </p>

        <div class="chip-container">

            ${familyRoles.map(role =>
                renderChip(
                    role,
                    participant.familyRoles.includes(role),
                    `toggleFamilyRole('${role}')`
                )
            ).join("")}

        </div>
    `;
}

else if (currentStep === 4) {

    const personalityTraits = [

        "Social",
        "Utåtriktad",
        "Omtänksam",
        "Hjälpsam",
        "Humoristisk",
        "Charmig",

        "Analytisk",
        "Smart",
        "Logisk",
        "Nyfiken",
        "Kreativ",
        "Strategisk",

        "Envis",
        "Tålmodig",
        "Impulsiv",
        "Organiserad",
        "Ambitiös",
        "Äventyrlig",

        "Tävlingsinriktad",
        "Misstänksam",
        "Hemlighetsfull",
        "Kontrollbehov",
        "Stolt",
        "Rastlös"
    ];

    content.innerHTML = `

        <h2>Personlighet</h2>

        <p>
            Välj exakt 5 egenskaper som beskriver dig bäst.
        </p>

        <p>
            ${participant.personalityTraits.length} / 5 valda
        </p>

        <div class="chip-container">

            ${personalityTraits.map(trait =>
                renderChip(
                    trait,
                    participant.personalityTraits.includes(trait),
                    `togglePersonality('${trait}')`
                )
            ).join("")}

        </div>

    `;
}

else if (currentStep === 5) {

    const strengths = [

        "Lojal",
        "Intelligent",
        "Kreativ",
        "Pålitlig",
        "Ansvarsfull",
        "Arbetsam",
        "Modig",
        "Initiativrik",
        "Empatisk",
        "Ledare",
        "Strukturerad",
        "Lösningsorienterad"

    ];

    content.innerHTML = `

        <h2>Styrkor</h2>

        <p>
            Välj exakt 3 styrkor.
        </p>

        <p>
            ${participant.strengths.length} / 3 valda
        </p>

        <div class="chip-container">

            ${strengths.map(strength =>
    renderChip(
        strength,
        participant.strengths.includes(strength),
        `toggleStrength('${strength}')`
    )
).join("")}

        </div>

    `;
}

else if (currentStep === 6) {

    const weaknesses = [

        "Otålig",
        "Impulsiv",
        "Slarvig",
        "Glömsk",
        "Konflikträdd",
        "Stolt",
        "Envis",
        "Rastlös",
        "Övertänker",
        "Tidsoptimist",
        "Kontrollbehov",
        "Lättdistraherad"

    ];

    content.innerHTML = `

        <h2>Svagheter</h2>

        <p>
            Välj exakt 3 svagheter.
        </p>

        <p>
            ${participant.weaknesses.length} / 3 valda
        </p>

        <div class="chip-container">

            ${weaknesses.map(weakness =>
                renderChip(
                    weakness,
                    participant.weaknesses.includes(weakness),
                    `toggleWeakness('${weakness}')`
                )
            ).join("")}

        </div>

    `;
}

else if (currentStep === 7) {

    content.innerHTML = `

        <h2>Sammanfattning</h2>

        <div class="summary-section">

            <h3>${participant.firstName} "${participant.nickname}" ${participant.lastName}</h3>

            <p><strong>Ålder:</strong> ${participant.age}</p>

            <p><strong>Sysselsättning:</strong> ${participant.occupation}</p>

        </div>

        <div class="summary-section">

            <h3>Relationer</h3>

            <p><strong>Partner:</strong> ${participant.partner || "-"}</p>

            <p><strong>Mamma:</strong> ${participant.mother || "-"}</p>

            <p><strong>Pappa:</strong> ${participant.father || "-"}</p>

            <p><strong>Bästa vän:</strong> ${participant.bestFriend || "-"}</p>

        </div>

        <div class="summary-section">

            <h3>Intressen</h3>

            <p>${participant.interests.join(", ")}</p>

        </div>

        <div class="summary-section">

            <h3>Familjeroller</h3>

            <p>${participant.familyRoles.join(", ")}</p>

        </div>

        <div class="summary-section">

            <h3>Personlighet</h3>

            <p>${participant.personalityTraits.join(", ")}</p>

        </div>

        <div class="summary-section">

            <h3>Styrkor</h3>

            <p>${participant.strengths.join(", ")}</p>

        </div>

        <div class="summary-section">

            <h3>Svagheter</h3>

            <p>${participant.weaknesses.join(", ")}</p>

        </div>

        <button
            type="button"
            onclick="finishProfile()"
            class="submit-btn">

            Slutför profil

        </button>

    `;
}

    else {

        content.innerHTML = `
            <h2>Kommer snart</h2>
            <p>Byggs i nästa steg.</p>
        `;
    }

    document.getElementById("backBtn").disabled =
        currentStep === 1;

    document.getElementById("nextBtn").innerText =
        currentStep === totalSteps
            ? "Slutför"
            : "Nästa";
}

function addSibling() {

    saveCurrentStep();

    participant.siblings.push({
        name: "",
        type: "",
        status: ""
    });

    renderStep();
}

function addChild() {

    saveCurrentStep();

    participant.children.push({
        name: "",
        status: ""
    });

    renderStep();
}

function saveCurrentStep() {

    if (currentStep === 1) {

        participant.firstName =
            document.getElementById("firstName").value;

        participant.lastName =
            document.getElementById("lastName").value;

        participant.nickname =
            document.getElementById("nickname").value;

        participant.email =
            document.getElementById("email").value;

        participant.age =
            document.getElementById("age").value;

        participant.occupation =
            document.getElementById("occupation").value;
    }

    if (currentStep === 2) {

        participant.partner =
            document.getElementById("partner").value;

        participant.partnerStatus =
            document.getElementById("partnerStatus").value;

        participant.mother =
            document.getElementById("mother").value;

        participant.motherStatus =
            document.getElementById("motherStatus").value;

        participant.father =
            document.getElementById("father").value;

        participant.fatherStatus =
            document.getElementById("fatherStatus").value;

        participant.bestFriend =
            document.getElementById("bestFriend").value;

            participant.bestFriendNickname =
    document.getElementById("bestFriendNickname").value;

        participant.siblings.forEach((sibling, index) => {

            sibling.name =
                document.getElementById(`sibling-name-${index}`).value;

            sibling.type =
                document.getElementById(`sibling-type-${index}`).value;

            sibling.status =
                document.getElementById(`sibling-status-${index}`).value;
        });

        participant.children.forEach((child, index) => {

            child.name =
                document.getElementById(`child-name-${index}`).value;

            child.status =
                document.getElementById(`child-status-${index}`).value;
        });
    }

    console.log(participant);
}

function toggleInterest(value) {

    const index =
        participant.interests.indexOf(value);

    if (index > -1) {
        participant.interests.splice(index, 1);
    }
    else {

        if (participant.interests.length >= 5) {
            alert("Du kan välja högst 5 intressen");
            return;
        }

        participant.interests.push(value);
    }

    renderStep();
}

function toggleFamilyRole(value) {

    const index =
        participant.familyRoles.indexOf(value);

    if (index > -1) {
        participant.familyRoles.splice(index, 1);
    }
    else {

        if (participant.familyRoles.length >= 3) {
            alert("Du kan välja högst 3 familjeroller");
            return;
        }

        participant.familyRoles.push(value);
    }

    renderStep();
}

function togglePersonality(value) {

    const index =
        participant.personalityTraits.indexOf(value);

    if (index > -1) {

        participant.personalityTraits.splice(index, 1);

    } else {

        if (participant.personalityTraits.length >= 5) {
            alert("Du ska välja exakt 5 personlighetsdrag");
            return;
        }

        participant.personalityTraits.push(value);
    }

    renderStep();

}

function toggleStrength(value) {

    const index =
        participant.strengths.indexOf(value);

    if (index > -1) {

        participant.strengths.splice(index, 1);

    } else {

        if (participant.strengths.length >= 3) {
            alert("Du ska välja exakt 3 styrkor");
            return;
        }

        participant.strengths.push(value);
    }

    renderStep();
}

function toggleWeakness(value) {

    const index =
        participant.weaknesses.indexOf(value);

    if (index > -1) {

        participant.weaknesses.splice(index, 1);

    } else {

        if (participant.weaknesses.length >= 3) {
            alert("Du ska välja exakt 3 svagheter");
            return;
        }

        participant.weaknesses.push(value);
    }

    renderStep();
}

function renderChip(
    text,
    selected,
    clickFunction
) {

    return `
        <button
            type="button"
            class="chip ${selected ? 'selected-chip' : ''}"
            onclick="${clickFunction}">
            ${text}
        </button>
    `;
}

function nextStep() {

function finishProfile() {

    const jsonData =
        JSON.stringify(
            participant,
            null,
            2
        );

    const blob =
        new Blob(
            [jsonData],
            {
                type: "application/json"
            }
        );

    const url =
        URL.createObjectURL(blob);

    const link =
        document.createElement("a");

    link.href = url;

    link.download =
        "participant.json";

    link.click();

    URL.revokeObjectURL(url);

    content.innerHTML = `
        <h2>Profil sparad</h2>

        <p>
            participant.json har laddats ner.
        </p>

        <pre>${jsonData}</pre>
    `;
}
    
if (
    currentStep === 5 &&
    participant.strengths.length !== 3
) {

    alert(
        "Du måste välja exakt 3 styrkor."
    );

    return;
}

if (
    currentStep === 6 &&
    participant.weaknesses.length !== 3
) {

    alert(
        "Du måste välja exakt 3 svagheter."
    );

    return;
}

if (
    currentStep === 4 &&
    participant.personalityTraits.length !== 5
) {

    alert(
        "Du måste välja exakt 5 personlighetsdrag."
    );

    return;
}

    saveCurrentStep();

    if (currentStep < totalSteps) {
        currentStep++;
        renderStep();
        return;
    }

    alert("Wizard färdig!");
}

function previousStep() {

    saveCurrentStep();

    if (currentStep > 1) {
        currentStep--;
        renderStep();
    }
}

renderStep();