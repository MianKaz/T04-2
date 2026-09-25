// --- Logo click -> Home ---
function goHome(){ window.location.href = "index.html"; }

// --- Highlight current page in nav ---
(function setActiveNav(){
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll('[data-nav]').forEach(a=>{
    if(a.getAttribute('href') === path){ a.classList.add('active'); }
  });
})();

// --- Optional: dynamic year in footer ---
(function setYear(){
  const y = document.getElementById('year');
  if(y){ y.textContent = new Date().getFullYear(); }
})();

// --- “Swap pages using JavaScript” (intercept clicks) ---
document.addEventListener('click', e=>{
  const a = e.target.closest('a[data-nav]');
  if(!a) return;
  e.preventDefault();                // JS handles navigation
  window.location.href = a.getAttribute('href');
});
