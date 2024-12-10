const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('bg-gray-900');
  document.body.classList.toggle('text-gray-100');
  darkModeToggle.textContent = document.body.classList.contains('bg-gray-900') 
    ? 'Light Mode' 
    : 'Dark Mode';
});

// Download PDF
function downloadPDF(fileName) {
  const link = document.createElement('a');
  link.href = `files/${fileName}`; 
  link.download = fileName;
  link.click();
}
