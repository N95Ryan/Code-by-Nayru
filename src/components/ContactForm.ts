export function initContactForm(): void {
  const form = document.querySelector<HTMLFormElement>("form");
  const successMessage = document.getElementById("success-message");
  const errorMessage = document.getElementById("error-message");

  if (form && successMessage && errorMessage) {
    form.addEventListener("submit", async (e: Event) => {
      e.preventDefault();

      try {
        const formData = new FormData(form);
        const response = await fetch(form.action, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          form.reset();
          successMessage.classList.remove("hidden");
          errorMessage.classList.add("hidden");
          setTimeout(() => {
            successMessage.classList.add("hidden");
          }, 5000);
        } else {
          throw new Error("Erreur lors de l'envoi");
        }
      } catch (error) {
        errorMessage.classList.remove("hidden");
        successMessage.classList.add("hidden");
        setTimeout(() => {
          errorMessage.classList.add("hidden");
        }, 5000);
      }
    });
  }
} 