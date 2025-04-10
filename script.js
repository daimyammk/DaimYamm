function copyPhone() {
  const phoneText = document.getElementById("phone").innerText;

  // Try modern clipboard API
  if (navigator.clipboard) {
    navigator.clipboard.writeText(phoneText)
      .then(() => {
        alert("Copied: " + phoneText);
      })
      .catch(err => {
        fallbackCopy(phoneText);
      });
  } else {
    fallbackCopy(phoneText);
  }
}

// Fallback method
function fallbackCopy(text) {
  const tempInput = document.createElement("input");
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  try {
    document.execCommand("copy");
    alert("Copied: " + text);
  } catch (err) {
    alert("Copy failed.");
  }
  document.body.removeChild(tempInput);
}

function transfer() {
  window.location.href = "kbzpay://";
}
