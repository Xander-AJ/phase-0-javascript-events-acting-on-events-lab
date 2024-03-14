// Your code here
// Access the dodger element
const dodger = document.getElementById("dodger");

// Function to move dodger left
function moveDodgerLeft() {
  const left = parseInt(dodger.style.left.replace("px", ""), 10);
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// Function to move dodger right
function moveDodgerRight() {
  const left = parseInt(dodger.style.left.replace("px", ""), 10);
  if (left < 360) { // Adjusted for dodger width of 40px
    dodger.style.left = `${left + 1}px`;
  }
}

// Event listener for left and right arrow keys
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});

// Test suite
describe('Dodger Movement', function() {
  beforeAll(function(done) {
    // Perform any setup tasks here (if any)
    done();
  });

  it('should move dodger left when left arrow key is pressed', function() {
    dodger.style.left = '50px'; // Set initial position
    const initialLeft = parseInt(dodger.style.left);
    const event = new KeyboardEvent('keydown', { key: 'ArrowLeft' });
    
    document.dispatchEvent(event); // Simulate key press event
    
    const finalLeft = parseInt(dodger.style.left);
    expect(finalLeft).toBeLessThan(initialLeft); // Ensure dodger moved left
  });

  it('should move dodger right when right arrow key is pressed', function() {
    dodger.style.left = '50px'; // Set initial position
    const initialLeft = parseInt(dodger.style.left);
    const event = new KeyboardEvent('keydown', { key: 'ArrowRight' });
    
    document.dispatchEvent(event); // Simulate key press event
    
    const finalLeft = parseInt(dodger.style.left);
    expect(finalLeft).toBeGreaterThan(initialLeft); // Ensure dodger moved right
  });
});