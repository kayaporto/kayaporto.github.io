$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
   // toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(200, 610, 50, 50, "blue");
    createPlatform(350, 500, 20, 240, "purple");
    createPlatform(500, 510, 100, 100, "green");
    createPlatform(800, 450, 250, 20, "lime");
    createPlatform(1100, 400, 150, 25);
    createPlatform(1350, 610, 50, 50, "pink");
    createPlatform(1350, 480, 50, 40, "yellow");
    createPlatform(950, 300, 50, 35);


    // TODO 3 - Create Collectables
    createCollectable("diamond", 700, 700);
    createCollectable("steve", 950, 250);
    createCollectable("max", 900, 410);



    
    // TODO 4 - Create Cannons
    createCannon("right", 290, 1950);
    createCannon("bottom", 620, 1400);
    createCannon("left", 500, 2600);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
