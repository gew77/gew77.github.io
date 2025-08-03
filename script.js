const videos = {
    1: "https://www.tiktok.com/@jeda.dulu3/photo/7517171076242099461",
    2: "https://www.tiktok.com/@jeda.dulu3/photo/7517027972453387525",
    3: "https://www.tiktok.com/@jeda.dulu3/photo/7515966960971140358",
    4: "https://www.tiktok.com/@jeda.dulu3/photo/7516498690505313542",
    5: "https://www.tiktok.com/@jeda.dulu3/photo/7515576543322688773",
    6: "https://www.tiktok.com/@jeda.dulu3/photo/7516785331228675384",
    7: "https://www.tiktok.com/@jeda.dulu3/photo/7515713679145438520",
    8: "https://www.tiktok.com/@jeda.dulu3/photo/7516075183229259013",
    9: "https://www.tiktok.com/@jeda.dulu3/photo/7516677165119851781",
    11: "https://www.tiktok.com/@jeda.dulu3/photo/7516143342564969733",
    22: "https://www.tiktok.com/@jeda.dulu3/photo/7517111866766806277",
    33: "https://www.tiktok.com/@jeda.dulu3/photo/7516415839025941765"
};

function calculateLP() {
    const birthdate = document.getElementById("birthdate").value;
    if (!birthdate) {
        alert("Masukkan tanggal lahir dulu!");
        return;
    }

    const parts = birthdate.split("-");
    let sum = parts.join("").split("").reduce((a, b) => a + parseInt(b), 0);

    while (![11, 22, 33].includes(sum) && sum > 9) {
        sum = sum.toString().split("").reduce((a, b) => a + parseInt(b), 0);
    }

    const lp = sum;
    const resultDiv = document.getElementById("result");

    if (videos[lp]) {
        resultDiv.innerHTML = `
            <h2>Life Path Number kamu: ${lp}</h2>
            <a href="${videos[lp]}" target="_blank">
                <img src="lp${lp}.jpg" alt="Cover LP ${lp}" style="max-width:300px; border-radius:8px; margin-top:10px;">
            </a>
            <br><br>
            <a href="${videos[lp]}" target="_blank" class="tiktok-link">🎯 Lihat TikTok Kamu</a>
        `;
    } else {
        resultDiv.innerHTML = `<p>Video untuk LP ${lp} belum tersedia.</p>`;
    }
}
