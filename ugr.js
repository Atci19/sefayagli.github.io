// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const profiles = [
        { id: 1, name: 'Uğur', age: 36, description: 'Kibar ama bir o kadar da sert, elektrik mühendisi, 43 numara ayağı var.' },
    ];

    const profileList = document.getElementById('profileList');
    const selectProfile = document.getElementById('selectProfile');

    // Profilleri listele
    profiles.forEach(profile => {
        const profileDiv = document.createElement('div');
        profileDiv.classList.add('profile');
        profileDiv.innerHTML = `
            <h3>${profile.name}, ${profile.age}</h3>
            <p>${profile.description}</p>
        `;
        profileList.appendChild(profileDiv);

        const option = document.createElement('option');
        option.value = profile.id;
        option.textContent = profile.name;
        selectProfile.appendChild(option);
    });

    // Kayıt formu
    document.getElementById('registerForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Kayıt işlemi başarılı!');
        e.target.reset();
    });

    // Rezervasyon formu
    document.getElementById('bookingForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Rezervasyon başarılı!');
        e.target.reset();
    });
});
