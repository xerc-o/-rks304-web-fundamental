document.getElementById('registerForm').addEventListener('submit', function (event) {
  event.preventDefault();

  let isValid = true;

  function setError(inputId, errorId, message) {
    const inputField = document.getElementById(inputId);
    const errorText = document.getElementById(errorId);

    if (message) {
      errorText.textContent = message;
      inputField.classList.add('border-red-500');
      inputField.setAttribute('aria-invalid', 'true');
      isValid = false;
    } else {
      errorText.textContent = '';
      inputField.classList.remove('border-red-500');
      inputField.removeAttribute('aria-invalid');
    }
  }

  const username = document.getElementById('username').value.trim();
  if (username === '') {
    setError('username', 'usernameError', 'Username tidak boleh kosong.');
  } else if (username.length < 3) {
    setError('username', 'usernameError', 'Username minimal 3 karakter.');
  } else {
    setError('username', 'usernameError', '');
  }

  const password = document.getElementById('password').value.trim();
  if (password === '') {
    setError('password', 'passwordError', 'Password tidak boleh kosong.');
  } else if (password.length < 8) {
    setError('password', 'passwordError', 'Password minimal 8 karakter.');
  } else {
    setError('password', 'passwordError', '');
  }

  const nama = document.getElementById('nama').value.trim();
  if (nama === '') {
    setError('nama', 'namaError', 'Nama tidak boleh kosong.');
  } else {
    setError('nama', 'namaError', '');
  }

  const tanggalLahirVal = document.getElementById('tanggalLahir').value;
  if (tanggalLahirVal === '') {
    setError('tanggalLahir', 'tanggalLahirError', 'Tanggal lahir tidak boleh kosong.');
  } else {
    const today = new Date();
    const todayValue = [today.getFullYear(), String(today.getMonth() + 1).padStart(2, '0'), String(today.getDate()).padStart(2, '0')].join('-');

    if (tanggalLahirVal > todayValue) {
      setError('tanggalLahir', 'tanggalLahirError', 'Tanggal lahir tidak boleh di masa mendatang.');
    } else {
      setError('tanggalLahir', 'tanggalLahirError', '');
    }
  }

  const alamat = document.getElementById('alamat').value.trim();
  if (alamat === '') {
    setError('alamat', 'alamatError', 'Alamat tidak boleh kosong.');
  } else {
    setError('alamat', 'alamatError', '');
  }

  const telepon = document.getElementById('telepon').value.trim();
  if (telepon === '') {
    setError('telepon', 'teleponError', 'Nomor telepon tidak boleh kosong.');
  } else if (!telepon.startsWith('62')) {
    setError('telepon', 'teleponError', 'Nomor telepon harus berawalan 62.');
  } else {
    setError('telepon', 'teleponError', '');
  }

  if (isValid) {
    this.submit();
  }
});