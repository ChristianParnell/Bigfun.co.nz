'use strict';
const form = document.querySelector('#enquiry');
const eventFields = document.querySelector('#event-fields');
const venueFields = document.querySelector('#venue-fields');
function syncService() {
  const permanent = form.elements.Service.value === 'Permanent placement';
  eventFields.hidden = permanent; eventFields.disabled = permanent;
  venueFields.hidden = !permanent; venueFields.disabled = !permanent;
}
form.querySelectorAll('[name="Service"]').forEach(r => r.addEventListener('change', syncService));
syncService();
// Use the visitor's local calendar date so an event today is always allowed.
const now = new Date();
const today = [now.getFullYear(), String(now.getMonth()+1).padStart(2,'0'), String(now.getDate()).padStart(2,'0')].join('-');
form.querySelectorAll('input[type="date"]').forEach(el => el.min = today);
document.querySelector('#year').textContent = now.getFullYear();
const menu = document.querySelector('.menu'); const nav = document.querySelector('#navigation');
menu.addEventListener('click', () => {const open = menu.getAttribute('aria-expanded') !== 'true';menu.setAttribute('aria-expanded', String(open));nav.classList.toggle('open', open);});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {menu.setAttribute('aria-expanded','false');nav.classList.remove('open');}));
document.querySelectorAll('[data-booth]').forEach(button => button.addEventListener('click', () => {
 form.querySelectorAll('[name="Photobooth"]').forEach(r => r.checked = r.value === button.dataset.booth);
 document.querySelector('#booking').scrollIntoView({behavior:'smooth'});
}));
document.querySelectorAll('[data-service]').forEach(button => button.addEventListener('click', () => {
 form.querySelectorAll('[name="Service"]').forEach(r => r.checked = r.value === button.dataset.service);syncService();document.querySelector('#booking').scrollIntoView({behavior:'smooth'});
}));
document.querySelectorAll('dialog').forEach(dialog => {
 dialog.querySelector('.close').addEventListener('click', () => dialog.close());
 dialog.addEventListener('click', e => {if(e.target === dialog){const b = dialog.getBoundingClientRect();if(e.clientX < b.left || e.clientX > b.right || e.clientY < b.top || e.clientY > b.bottom) dialog.close();}});
});
document.querySelectorAll('[data-gallery]').forEach(button => button.addEventListener('click', () => {
 const dialog = document.querySelector('#lightbox');const img = dialog.querySelector('img'); img.src = button.dataset.gallery;img.alt = button.querySelector('img').alt;dialog.querySelector('p').textContent = img.alt;dialog.showModal();
}));
['privacy-button','privacy-footer'].forEach(id => document.getElementById(id).addEventListener('click',()=>document.querySelector('#privacy').showModal()));
function enquiryEntries() {return [...new FormData(form).entries()].filter(([k,v]) => !k.startsWith('_') && k !== 'Consent' && String(v).trim());}
function enquiryText() {
 const entries = enquiryEntries();
 return 'BIGFUN — PHOTOBOOTH ENQUIRY\n' + 'Prepared: ' + new Date().toLocaleString('en-NZ') + '\n\n' + entries.map(([k,v]) => `${k === 'email' ? 'Email address' : k}: ${v}`).join('\n\n') + '\n\nPrivacy consent: agreed\n\nThis is an enquiry only, not a confirmed booking.\nBigFun | bob@bigfun.co.nz';
}
document.querySelector('#review').addEventListener('click', () => {
 if(!form.reportValidity()) return;
 document.querySelector('#review-content').textContent = enquiryText();document.querySelector('#review-dialog').showModal();
});
document.querySelector('#download-enquiry').addEventListener('click', () => {
 const blob = new Blob([enquiryText()],{type:'text/plain;charset=utf-8'});const url = URL.createObjectURL(blob);const a = document.createElement('a');a.href=url;a.download='BigFun-enquiry-'+today+'.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
});
let submitting = false;
form.addEventListener('submit', e => {
 if(submitting){e.preventDefault();return;}
 if(form.elements._honey.value){e.preventDefault();return;}
 const service = form.elements.Service.value;
 const occasion = service === 'Event hire' ? form.elements.Occasion.value : form.elements['Venue type'].value;
 const date = service === 'Event hire' ? form.elements['Event date'].value : form.elements['Placement start date'].value;
 form.elements._subject.value = ['BigFun',service,occasion,date,form.elements.Name.value].filter(Boolean).join(' | ');
 // Native POST keeps provider CAPTCHA and its submission acknowledgement available.
 // The table email contains every enabled named field, including specifications and percentage.
 const next = new URL('thank-you.html', window.location.href);
 if(next.protocol === 'https:' || next.protocol === 'http:') {
  let field = form.querySelector('[name="_next"]'); if(!field){field=document.createElement('input');field.type='hidden';field.name='_next';form.append(field);}field.value=next.href;
 }
 submitting=true; document.querySelector('#form-status').textContent='Opening secure verification. Your enquiry is not submitted until that step is complete.';
 const submit=form.querySelector('[type="submit"]');submit.textContent='Opening verification…';submit.disabled=true;
});
window.addEventListener('pageshow', () => {submitting=false;const submit=form.querySelector('[type="submit"]');submit.disabled=false;submit.textContent='Send my enquiry ↗';document.querySelector('#form-status').textContent='';});
