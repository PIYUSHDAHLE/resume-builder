import html2pdf from 'html2pdf.js';

export const generatePDF = (elementId = 'resume-preview') => {
  const resume = document.getElementById(elementId);
  if (!resume) return alert("Resume section not found");

  const opt = {
    margin: 0.5,
    filename: 'resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
  };

  html2pdf().set(opt).from(resume).save();
};
