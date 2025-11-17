const citySelect = document.getElementById('citySelect');
const cityLabel = document.getElementById('cityLabel');
const aboutText = document.getElementById('aboutText');
const projects = document.getElementById('projects');
const accentPicker = document.getElementById('accentPicker');
const downloadBtn = document.getElementById('downloadBtn');
const previewBtn = document.getElementById('previewBtn');

const data = {
    padang: {
        city: 'Padang, Sumatra Barat',
        about:
            'Saya adalah seorang kreator multimedia yang memiliki keahlian dalam videografi, fotografi, dan editing video. Juga menguasai IT seperti Laravel & GIS.',
        projects: [
            'Dokumentasi Konser Opick',
            'Video Cinematic (Short Movie)',
            'Dokumentasi Duta Remaja Riau 2022',
            'Dokumentasi Kegiatan Kampus',
            'Magang PT Telkom Akses (GIS & IOC)',
        ],
    },
    pekanbaru: {
        city: 'Pekanbaru, Riau',
        about:
            'Saya adalah kreator multimedia dengan pengalaman pada event besar, konten komersial, dan project IT berbasis lokasi.',
        projects: [
            'Dokumentasi Konser Opick',
            'Video Cinematic',
            'Dokumentasi Duta Remaja Riau 2022',
            'Dokumentasi Kegiatan Kampus',
            'Magang PT Telkom Akses',
        ],
    },
};

function render(cityKey) {
    const entry = data[cityKey];
    cityLabel.textContent = entry.city;
    aboutText.textContent = entry.about;
    projects.innerHTML = entry.projects.map((p) => '- ' + p).join('<br>');
}

citySelect.addEventListener('change', (e) => render(e.target.value));

accentPicker.addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--accent', e.target.value);
});

// Download PDF
downloadBtn.addEventListener('click', () => {
    const opt = {
        margin: 0.4,
        filename: 'CV_Muhammad_Naufal.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
    };

    document.querySelector('.toolbar').style.visibility = 'hidden';

    html2pdf()
        .set(opt)
        .from(document.querySelector('#cvInner'))
        .save()
        .then(() => {
            document.querySelector('.toolbar').style.visibility = 'visible';
        });
});

// Print preview
previewBtn.addEventListener('click', () => {
    window.print();
});

// Initial load
render('padang');
