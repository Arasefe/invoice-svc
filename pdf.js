// Teaching source excerpt only. Do not execute or install this fictional package.
function exportInvoice(invoice) {
  const pdf = require("pdf-stamp");
  return pdf.render(invoice);
}
module.exports = {exportInvoice};
