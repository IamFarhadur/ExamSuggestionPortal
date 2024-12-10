document.addEventListener('DOMContentLoaded', function() {
    Swal.fire('Hello World!');
});


window.onload = function() {
    Swal.fire({
      title: 'Join us!',
      html: `<p>Join <a href="https://www.facebook.com/share/g/15KWxi1CBT/" target="_blank" class="font-bold">BTRIHS SSC-2026</a> For more.</p>`,
      icon: 'info',
      confirmButtonText: 'Close',
      customClass: {
        popup: 'bg-gray-800 text-white',
        title: 'text-xl font-bold',
        content: 'text-sm',
        confirmButton: 'bg-blue-500 text-white hover:bg-blue-600'
      },
      backdrop: true,
    });
  }