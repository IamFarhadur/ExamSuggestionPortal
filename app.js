// পেজ লোড ইভেন্ট
document.addEventListener('DOMContentLoaded', function () {
  Swal.fire({
    title: 'এখনই সাইন আপ করুন!', 
    text: 'বিশেষ পরামর্শ এবং আপডেট পেতে পোর্টালে যোগ দিন।',
    icon: 'info', 
    showCancelButton: false, 
    confirmButtonText: 'সাইন আপ করুন', 
    background: '#1a202c',
    color: '#ffffff', 
    confirmButtonColor: '#38bdf8', 
    cancelButtonColor: '#a3a3a3', 
  }).then((result) => {
    if (result.isConfirmed) {

      window.location.href = '/signup.html';
    } else {
      console.log('ব্যবহারকারী সাইন আপ পপআপ বাতিল করেছেন।');
    }
  });
});
