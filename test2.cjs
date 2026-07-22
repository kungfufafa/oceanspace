const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html>
<html>
<body>
  <div id="apply-page-title"></div>
  <div id="apply-page-summary"></div>
  <div id="apply-page-meta"></div>
  <div id="apply-page-loading"></div>
  <div id="apply-page-empty"></div>
  <div id="apply-page-error"></div>
  <div id="apply-page-content"></div>
  <div id="apply-page-details"></div>
  <div id="apply-page-description"></div>
  <div id="apply-page-requirements"></div>
  <div id="apply-page-prep"></div>
  <form id="apply-form"></form>
  <div id="form-alerts"></div>
  <div id="apply-hero-section"></div>
</body>
</html>`);
global.window = dom.window;
global.document = dom.window.document;
global.CustomEvent = dom.window.CustomEvent;
global.FormData = dom.window.FormData;
global.requestAnimationFrame = (cb) => setTimeout(cb, 0);
global.URLSearchParams = class { get() { return 'test-slug'; } };
global.fetch = () => Promise.resolve({ ok: true, json: () => Promise.resolve({ success: true }) });
window.OceanSpaceCareerApi = {
  getJobDetail: () => Promise.resolve({
    data: {
      title: 'Test Job',
      description: 'Desc',
      requirements: 'Req',
      location: 'Loc',
      closing_date: '2026-10-10',
      form_fields: [
        { name: 'full_name', type: 'text', label: 'Name', required: true },
        { name: 'whatsapp_number', type: 'number', label: 'Phone', required: true },
        { name: 'photo', type: 'file', label: 'Photo', required: true }
      ]
    }
  }),
  applyToJob: () => { console.log('API called!'); return Promise.resolve({ success: true }); }
};
const code = fs.readFileSync('public/js/career-apply.js', 'utf8');
eval(code);
window.initCareerApply();
setTimeout(() => {
  const form = document.getElementById('apply-form');
  const btn = document.getElementById('btn-submit');
  if(!btn) { console.log('NO BUTTON'); return; }
  
  const fileInput = document.querySelector('input[name="photo"]');
  if (fileInput) {
    Object.defineProperty(fileInput, 'files', {
      value: [{ name: 'test.jpg', type: 'image/jpeg', size: 1000 }]
    });
  }

  const evt = new dom.window.Event('submit', { cancelable: true, bubbles: true });
  console.log('Dispatching submit event...');
  form.dispatchEvent(evt);
}, 500);
