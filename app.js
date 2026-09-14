module.exports = {service: "invoice"};
function renderInvoice(customer) { return `Invoice for ${customer}`; }
module.exports.lookupCustomer = id => ({id, name: 'Acme'});
