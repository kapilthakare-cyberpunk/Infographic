import { Infographic } from '@antv/infographic';

// Sample 1: Basic list infographic
const buyerTipsData = `
infographic list-row-simple-horizontal-arrow
data
  lists
    - label ASK FOR MORE PHOTOS
      desc Request specific angles before committing. Sellers expect it.
    - label REQUEST DOCUMENTATION
      demand Copy of invoice accompanied by valid photo ID proof of the seller.
    - label MEET IN PUBLIC SPOTS
      desc Always conduct your first physical equipment inspection in a secure, neutral location.
    - label TEST BEFORE YOU PAY
      desc Mount the lens or check the camera shutter count and sensor on-site.
    - label INSPECT OPTICS AND GEOMETRY
      desc Shine a light through elements to check for fungus, dust, or structural damage.
`;

console.log("Buyer Tips Infographic Data:");
console.log(buyerTipsData);

// To render this infographic, you would use:
// const infographic = new Infographic({
//   container: '#container',
//   width: '1080',
//   height: '1350',
//   editable: false,
// });
// infographic.render(buyerTipsData);

// Sample 2: Using a different template
const buyerTipsGridData = `
infographic list-grid-simple
data
  lists
    - label ASK FOR MORE PHOTOS
      desc Request specific angles before committing. Sellers expect it.
    - label REQUEST DOCUMENTATION
      demand Copy of invoice accompanied by valid photo ID proof of the seller.
    - label MEET IN PUBLIC SPOTS
      desc Always conduct your first physical equipment inspection in a secure, neutral location.
    - label TEST BEFORE YOU PAY
      desc Mount the lens or check the camera shutter count and sensor on-site.
    - label INSPECT OPTICS AND GEOMETRY
      desc Shine a light through elements to check for fungus, dust, or structural damage.
`;

console.log("\nBuyer Tips Grid Infographic Data:");
console.log(buyerTipsGridData);

// Sample 3: Using a pyramid template
const buyerTipsPyramidData = `
infographic list-pyramid-badge-card
data
  lists
    - label INSPECT OPTICS AND GEOMETRY
      desc Shine a light through elements to check for fungus, dust, or structural damage.
    - label TEST BEFORE YOU PAY
      desc Mount the lens or check the camera shutter count and sensor on-site.
    - label MEET IN PUBLIC SPOTS
      desc Always conduct your first physical equipment inspection in a secure, neutral location.
    - label REQUEST DOCUMENTATION
      demand Copy of invoice accompanied by valid photo ID proof of the seller.
    - label ASK FOR MORE PHOTOS
      desc Request specific angles before committing. Sellers expect it.
`;

console.log("\nBuyer Tips Pyramid Infographic Data:");
console.log(buyerTipsPyramidData);