window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  const el = document.querySelector('[data-acc-text="Mask4"]');

if (el) {
  el.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
  el.style.backdropFilter = 'blur(4px)';
  el.style.webkitBackdropFilter = 'blur(4px)'; // Safari support
}
}

window.Script2 = function()
{
  const el = object('5jeZSmhmv66');

if (el) {
  el.style.backgroundColor = 'rgba(255, 255, 255, 0.0)';
  el.style.backdropFilter = 'blur(0px)';
  el.style.webkitBackdropFilter = 'blur(0px)'; // Safari support
}
}

window.Script3 = function()
{
  const step5Oval = object('6LKfNG7XL1F');

}

window.Script4 = function()
{
  // Loop through Block1 to Block10
for (let i = 1; i <= 10; i++) {
  const el = document.querySelector(`[data-acc-text="Block${i}"]`);
  
  if (el) {
    el.addEventListener('mouseenter', () => {
      el.style.filter = 'drop-shadow(0px 0px 5px rgba(142, 142, 142, 0.85))';
    });

    el.addEventListener('mouseleave', () => {
      el.style.filter = 'none';
    });
  }
}
}

window.Script5 = function()
{
  const group1Front1 = object('6ljmcQNmjnG');
const group2Front1 = object('6nHUmD1GcnQ');
const group3Front1 = object('6lmnT7ESOcd');
const group4Front1 = object('6M7KLSebpVB');
const rectangle1 = object('6qheGMRL2BG');
const rectangle2 = object('64Gnc0sW4bu');
const rectangle3 = object('6A42Vq19b30');
const rectangle4 = object('6LR8vR7ZJ31');

(function () {

    const style = document.createElement("style");
    style.textContent = `
        .story-card{
            transition:
                transform .8s cubic-bezier(.22,.8,.32,1),
                opacity .5s ease;
            will-change: transform, opacity;
        }
    `;
    document.head.appendChild(style);

    function getEl(obj){
        return obj.element || obj.el || obj.node || obj;
    }

    function animate(sourceObj, targetObj, delay){

        const source = getEl(sourceObj);
        const target = getEl(targetObj);

        if(!source || !target) return;

        const s = source.getBoundingClientRect();
        const t = target.getBoundingClientRect();

        // Distance from source to final position
        const dx = s.left - t.left;
        const dy = s.top - t.top;

        target.classList.add("story-card");

        // Start hidden at source position
        target.style.opacity = "0";
        target.style.transform = `translate(${dx}px, ${dy}px) scale(.9)`;

        requestAnimationFrame(() => {

            setTimeout(() => {

                target.style.opacity = "1";
                target.style.transform = "translate(0px,0px) scale(1)";

            }, delay);

        });
    }

    setTimeout(() => {

        animate(rectangle1, group1Front1,   0);
        animate(rectangle2, group2Front1, 200);
        animate(rectangle3, group3Front1, 400);
        animate(rectangle4, group4Front1, 600);

    }, 300);

})();
}

window.Script6 = function()
{
  const rectangle1 = object('6n1tL0g0sQp');
rectangle1.style.filter =
  'drop-shadow(0px 0px 8px rgba(142, 142, 142, 0.55))';
}

window.Script7 = function()
{
  const rectangle1 = object('6PwWrtmHE7U');
rectangle1.style.filter =
  'drop-shadow(0px 0px 8px rgba(142, 142, 142, 0.55))';
}

window.Script8 = function()
{
  const rectangle1 = object('6ZJIPIFB1aw');
rectangle1.style.filter =
  'drop-shadow(0px 0px 8px rgba(142, 142, 142, 0.55))';
}

window.Script9 = function()
{
  const rectangle1 = object('6Szljg3ICwL');
rectangle1.style.filter =
  'drop-shadow(0px 0px 8px rgba(142, 142, 142, 0.55))';
}

window.Script10 = function()
{
  const rectangle1 = object('5uLINe6Z7Uf');
rectangle1.style.filter =
  'drop-shadow(0px 0px 8px rgba(142, 142, 142, 0.55))';
}

window.Script11 = function()
{
  const rectangle1 = object('5vOjV8poQ51');
rectangle1.style.filter =
  'drop-shadow(0px 0px 8px rgba(142, 142, 142, 0.55))';
}

window.Script12 = function()
{
  const rectangle1 = object('6nfuFjiQS2r');
rectangle1.style.filter =
  'drop-shadow(0px 0px 8px rgba(142, 142, 142, 0.55))';
}

window.Script13 = function()
{
  const rectangle1 = object('6LKfNG7XL1F');
rectangle1.style.filter =
  'drop-shadow(0px 0px 8px rgba(142, 142, 142, 0.55))';
}

window.Script14 = function()
{
  const rectangle1 = object('6bzdC7RJqJ1');
rectangle1.style.filter =
  'drop-shadow(0px 0px 8px rgba(142, 142, 142, 0.55))';
}

window.Script15 = function()
{
  const rectangle1 = object('6ALAPuxG6B5');
rectangle1.style.filter =
  'drop-shadow(0px 0px 8px rgba(142, 142, 142, 0.55))';
}

window.Script16 = function()
{
  const rectangle1 = object('6pknTUKrjf1');
rectangle1.style.filter =
  'drop-shadow(0px 0px 8px rgba(142, 142, 142, 0.55))';
}

window.Script17 = function()
{
  const rectangle1 = object('5q2FqJRRAAS');
rectangle1.style.filter =
  'drop-shadow(0px 0px 8px rgba(142, 142, 142, 0.55))';
}

window.Script18 = function()
{
  const rectangle1 = object('6J6yrSNcHwh');
rectangle1.style.filter =
  'drop-shadow(0px 0px 8px rgba(142, 142, 142, 0.55))';
}

window.Script19 = function()
{
  const rectangle1 = object('6UWb5i82PU4');
rectangle1.style.filter =
  'drop-shadow(0px 0px 8px rgba(142, 142, 142, 0.55))';
}

window.Script20 = function()
{
  const group4Back = object('5VOpgkjM40C');
const group4Front = object('6AMJwQa4Is3');
const cardFront = group4Back;
const cardBack = group4Front;

if (cardFront && cardBack) {

    // Initial state
    cardFront.style.transform = 'rotateY(0deg)';
    cardBack.style.transform = 'rotateY(-180deg)';

    // Prevent the backs of the elements from showing
    cardFront.style.backfaceVisibility = 'hidden';
    cardBack.style.backfaceVisibility = 'hidden';

    // Front flips away
    cardFront.animate(
        [
            { transform: 'rotateY(0deg)' },
            { transform: 'rotateY(180deg)' }
        ],
        {
            duration: 1000,
            easing: 'ease-in-out',
            fill: 'forwards'
        }
    );

    // Back flips into view
    cardBack.animate(
        [
            { transform: 'rotateY(-180deg)' },
            { transform: 'rotateY(0deg)' }
        ],
        {
            duration: 1000,
            easing: 'ease-in-out',
            fill: 'forwards'
        }
    );
}
}

window.Script21 = function()
{
  const group3Back = object('65dYCl53beA');
const group3Front = object('6KmVagsooUs');
const cardFront = group3Back;
const cardBack = group3Front;

if (cardFront && cardBack) {

    // Initial state
    cardFront.style.transform = 'rotateY(0deg)';
    cardBack.style.transform = 'rotateY(-180deg)';

    // Prevent the backs of the elements from showing
    cardFront.style.backfaceVisibility = 'hidden';
    cardBack.style.backfaceVisibility = 'hidden';

    // Front flips away
    cardFront.animate(
        [
            { transform: 'rotateY(0deg)' },
            { transform: 'rotateY(180deg)' }
        ],
        {
            duration: 1000,
            easing: 'ease-in-out',
            fill: 'forwards'
        }
    );

    // Back flips into view
    cardBack.animate(
        [
            { transform: 'rotateY(-180deg)' },
            { transform: 'rotateY(0deg)' }
        ],
        {
            duration: 1000,
            easing: 'ease-in-out',
            fill: 'forwards'
        }
    );
}
}

window.Script22 = function()
{
  const group2Back = object('6Qu40FA7Rop');
const group2Front = object('6iDmxDco1Fh');
const cardFront = group2Back;
const cardBack = group2Front;

if (cardFront && cardBack) {

    // Initial state
    cardFront.style.transform = 'rotateY(0deg)';
    cardBack.style.transform = 'rotateY(-180deg)';

    // Prevent the backs of the elements from showing
    cardFront.style.backfaceVisibility = 'hidden';
    cardBack.style.backfaceVisibility = 'hidden';

    // Front flips away
    cardFront.animate(
        [
            { transform: 'rotateY(0deg)' },
            { transform: 'rotateY(180deg)' }
        ],
        {
            duration: 1000,
            easing: 'ease-in-out',
            fill: 'forwards'
        }
    );

    // Back flips into view
    cardBack.animate(
        [
            { transform: 'rotateY(-180deg)' },
            { transform: 'rotateY(0deg)' }
        ],
        {
            duration: 1000,
            easing: 'ease-in-out',
            fill: 'forwards'
        }
    );
}
}

window.Script23 = function()
{
  const cardFront = object('6Xg4caLnYyz'); //group1Back 
const cardBack = object('67ZfnHXx3bu'); //group1Front

if (cardFront && cardBack) {

    // Initial state
    cardFront.style.transform = 'rotateY(0deg)';
    cardBack.style.transform = 'rotateY(-180deg)';

    // Prevent the backs of the elements from showing
    cardFront.style.backfaceVisibility = 'hidden';
    cardBack.style.backfaceVisibility = 'hidden';

    // Front flips away
    cardFront.animate(
        [
            { transform: 'rotateY(0deg)' },
            { transform: 'rotateY(180deg)' }
        ],
        {
            duration: 1000,
            easing: 'ease-in-out',
            fill: 'forwards'
        }
    );

    // Back flips into view
    cardBack.animate(
        [
            { transform: 'rotateY(-180deg)' },
            { transform: 'rotateY(0deg)' }
        ],
        {
            duration: 1000,
            easing: 'ease-in-out',
            fill: 'forwards'
        }
    );
}
}

window.Script24 = function()
{
  const cardFront = object('6AMJwQa4Is3');
const cardBack = object('5VOpgkjM40C');

if (cardFront && cardBack) {

    // Initial state
    cardFront.style.transform = 'rotateY(0deg)';
    cardBack.style.transform = 'rotateY(-180deg)';

    // Prevent the backs of the elements from showing
    cardFront.style.backfaceVisibility = 'hidden';
    cardBack.style.backfaceVisibility = 'hidden';

    // Front flips away
    cardFront.animate(
        [
            { transform: 'rotateY(0deg)' },
            { transform: 'rotateY(180deg)' }
        ],
        {
            duration: 1000,
            easing: 'ease-in-out',
            fill: 'forwards'
        }
    );

    // Back flips into view
    cardBack.animate(
        [
            { transform: 'rotateY(-180deg)' },
            { transform: 'rotateY(0deg)' }
        ],
        {
            duration: 1000,
            easing: 'ease-in-out',
            fill: 'forwards'
        }
    );
}
}

window.Script25 = function()
{
  const cardFront = object('6KmVagsooUs');
const cardBack = object('65dYCl53beA');

if (cardFront && cardBack) {

    // Initial state
    cardFront.style.transform = 'rotateY(0deg)';
    cardBack.style.transform = 'rotateY(-180deg)';

    // Prevent the backs of the elements from showing
    cardFront.style.backfaceVisibility = 'hidden';
    cardBack.style.backfaceVisibility = 'hidden';

    // Front flips away
    cardFront.animate(
        [
            { transform: 'rotateY(0deg)' },
            { transform: 'rotateY(180deg)' }
        ],
        {
            duration: 1000,
            easing: 'ease-in-out',
            fill: 'forwards'
        }
    );

    // Back flips into view
    cardBack.animate(
        [
            { transform: 'rotateY(-180deg)' },
            { transform: 'rotateY(0deg)' }
        ],
        {
            duration: 1000,
            easing: 'ease-in-out',
            fill: 'forwards'
        }
    );
}
}

window.Script26 = function()
{
  const cardFront = object('6iDmxDco1Fh');
const cardBack = object('6Qu40FA7Rop');

if (cardFront && cardBack) {

    // Initial state
    cardFront.style.transform = 'rotateY(0deg)';
    cardBack.style.transform = 'rotateY(-180deg)';

    // Prevent the backs of the elements from showing
    cardFront.style.backfaceVisibility = 'hidden';
    cardBack.style.backfaceVisibility = 'hidden';

    // Front flips away
    cardFront.animate(
        [
            { transform: 'rotateY(0deg)' },
            { transform: 'rotateY(180deg)' }
        ],
        {
            duration: 1000,
            easing: 'ease-in-out',
            fill: 'forwards'
        }
    );

    // Back flips into view
    cardBack.animate(
        [
            { transform: 'rotateY(-180deg)' },
            { transform: 'rotateY(0deg)' }
        ],
        {
            duration: 1000,
            easing: 'ease-in-out',
            fill: 'forwards'
        }
    );
}
}

window.Script27 = function()
{
  const group1Front = object('67ZfnHXx3bu');
const group1Back = object('6Xg4caLnYyz');

if (group1Front && group1Back) {

    // Initial state
    group1Front.style.transform = 'rotateY(0deg)';
    group1Back.style.transform = 'rotateY(-180deg)';

    // Prevent the backs of the elements from showing
    group1Front.style.backfaceVisibility = 'hidden';
    group1Back.style.backfaceVisibility = 'hidden';

    // Front flips away
    group1Front.animate(
        [
            { transform: 'rotateY(0deg)' },
            { transform: 'rotateY(180deg)' }
        ],
        {
            duration: 1000,
            easing: 'ease-in-out',
            fill: 'forwards'
        }
    );

    // Back flips into view
    group1Back.animate(
        [
            { transform: 'rotateY(-180deg)' },
            { transform: 'rotateY(0deg)' }
        ],
        {
            duration: 1000,
            easing: 'ease-in-out',
            fill: 'forwards'
        }
    );
}
}

};
