
function handleSubmit(event) {
  event.preventDefault();
  const form = document.getElementById('careForm');
  const reportDiv = document.getElementById('report');
  const reportContent = document.getElementById('reportContent');

  const formData = new FormData(form);
  const report = `
CareFile Trauma Report

1. What happened?
${formData.get("event")}

2. How has this affected you?
${formData.get("impact")}

3. Has anyone helped you?
${formData.get("support")}

4. What support do you need?
${formData.get("needs")}

Consent given: ${formData.get("consent") === "yes" ? "Yes" : "No"}
  `.trim();

  reportContent.textContent = report;
  reportDiv.classList.remove("hidden");
  form.style.display = "none";

  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  });
}

function copyReport() {
  const content = document.getElementById('reportContent').textContent;
  navigator.clipboard.writeText(content);
}
