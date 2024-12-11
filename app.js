document.addEventListener('DOMContentLoaded', function () {
  Swal.fire({
    title: 'Good Bye👋👋', 
    text: 'Our exam is over',
    icon: 'info', 
    showCancelButton: false, 
    confirmButtonText: 'Bye Bye👋👋', 
    background: '#1a202c',
    color: '#ffffff', 
    confirmButtonColor: '#38bdf8', 
    cancelButtonColor: '#a3a3a3', 
  }).then((result) => {
    if (result.isConfirmed) {

      window.location.href = '/goodBye.html';
    } else {
      console.log('Nothing to Do...');
    }
  });
});
