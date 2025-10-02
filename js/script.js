/**
 * Untuk ganti icon sosmed saat hover
 */

document.querySelectorAll(".sosmed i").forEach((sosmed) => {
  sosmed.addEventListener("mouseenter", () => {
    sosmed.classList.remove("ph");
    sosmed.classList.add("ph-fill");
  });

  sosmed.addEventListener("mouseleave", () => {
    sosmed.classList.remove("ph-fill");
    sosmed.classList.add("ph");
  });
});


  function downloadCV(event) {
    event.preventDefault(); // biar gak langsung download
    
    let kode = prompt("Masukkan kode untuk download CV:");
    
    // Ganti "12345" dengan kode rahasia kamu
    if (kode === "300907") {
      window.location.href = "cv.pdf"; // arahkan ke file CV
    } else if (kode !== null) {
      alert("Kode salah! Coba lagi.");
    }
  }
{
   const textElement = document.querySelector(".typing-text");
  const words = [ " WEB DEVOLOPER ",  " PROGAMMER ", " STUDENTS"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let speed = 90; // kecepatan ketik (ms)

  function typeEffect() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      textElement.textContent = currentWord.substring(0, charIndex--);
    } else {
      textElement.textContent = currentWord.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      speed = 90; // kecepatan hapus lebih cepat
      setTimeout(typeEffect, 800); // jeda sebelum hapus
      return;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length; // lanjut kata berikutnya
      speed = 90;
    }

    setTimeout(typeEffect, speed);
  }

  // mulai efek
  typeEffect();
}
{
  const textElement = document.querySelector(".typeng-text");
  const words = [ " INSANITY DZIKRIYANA ",  " BANDUNG WEST JAVA "];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let speed = 50; // kecepatan ketik (ms)

  function typeEffect() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      textElement.textContent = currentWord.substring(0, charIndex--);
    } else {
      textElement.textContent = currentWord.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      speed = 50; // kecepatan hapus lebih cepat
      setTimeout(typeEffect, 800); // jeda sebelum hapus
      return;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length; // lanjut kata berikutnya
      speed = 50;
    }

    setTimeout(typeEffect, speed);
  }

  // mulai efek
  typeEffect();
}