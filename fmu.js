$(document).ready(function() {
    var selectedTeam = null; // Variable to store the selected team
  
    // Function to handle click events on player divs
    $(".div2, .div3, .div5, .div6, .div7, .div8, .div9, .div10, .div11, .div12, .div14, .div15, .div16, .div17, .div18, .div19, .div20, .div21, .div23, .div24, .div25, .div26, .div27, .div28, .div29").click(function() {
      // Remove the active class from all player divs
      $(".div2, .div3, .div5, .div6, .div7, .div8, .div9, .div10, .div11, .div12, .div14, .div15, .div16, .div17, .div18, .div19, .div20, .div21, .div23, .div24, .div25, .div26, .div27, .div28, .div29").removeClass("active");
  
      // Remove the white background color from all player divs except the selected team
      $(".div2:not(." + selectedTeam + "), .div3:not(." + selectedTeam + "), .div5:not(." + selectedTeam + "), .div6:not(." + selectedTeam + "), .div7:not(." + selectedTeam + "), .div8:not(." + selectedTeam + "), .div9:not(." + selectedTeam + "), .div10:not(." + selectedTeam + "), .div11:not(." + selectedTeam + "), .div12:not(." + selectedTeam + "), .div14:not(." + selectedTeam + "), .div15:not(." + selectedTeam + "), .div16:not(." + selectedTeam + "), .div17:not(." + selectedTeam + "), .div18:not(." + selectedTeam + "), .div19:not(." + selectedTeam + "), .div20:not(." + selectedTeam + "), .div21:not(." + selectedTeam + "), .div23:not(." + selectedTeam + "), .div24:not(." + selectedTeam + "), .div25:not(." + selectedTeam + "), .div26:not(." + selectedTeam + "), .div27:not(." + selectedTeam + "), .div28:not(." + selectedTeam + "), .div29:not(." + selectedTeam + ")").css("background-color", "");
  
      // Add the active class to the clicked player div
      $(this).addClass("active");
  
      // Change the background color of the clicked div to white
      $(this).css("background-color", "white");
  
      // Get the name from the clicked player div
      var playerName = $(this).find(".name").text();
  
      // Get the team-specific points div
      var teamPointsDiv = $(this).find(".points div:visible").text();
  
      // Update the content of the goalkeeper or defender positions
      if ($(this).hasClass("div2") || $(this).hasClass("div3")) {
        updatePosition("#goalie", playerName, teamPointsDiv);
      } else if ($(this).hasClass("div5") || $(this).hasClass("div7")) {
        updatePosition("#cb1", playerName, teamPointsDiv);
      } else if ($(this).hasClass("div6") || $(this).hasClass("div9")) {
        updatePosition("#cb2", playerName, teamPointsDiv);
      } else if ($(this).hasClass("div10") || $(this).hasClass("div12")) {
        updatePosition("#rb", playerName, teamPointsDiv);
      } else if ($(this).hasClass("div8") || $(this).hasClass("div11")) {
        updatePosition("#lb", playerName, teamPointsDiv);
      } else if ($(this).hasClass("div23") || $(this).hasClass("div24") || $(this).hasClass("div27") || $(this).hasClass("div29")) {
        updatePosition("#striker", playerName, teamPointsDiv);
      } else if ($(this).hasClass("div15") || $(this).hasClass("div16") || $(this).hasClass("div17")) {
        updatePosition("#cdm", playerName, teamPointsDiv);
      } else if ($(this).hasClass("div18") || $(this).hasClass("div20") || $(this).hasClass("div21")) {
        updatePosition("#cdm2", playerName, teamPointsDiv);
      } else if ($(this).hasClass("div14")) {
        updatePosition("#cam", playerName, teamPointsDiv);
      } else if ($(this).hasClass("div19") || $(this).hasClass("div25")) {
        updatePosition("#right-wing", playerName, teamPointsDiv);
      } else if ($(this).hasClass("div26") || $(this).hasClass("div28")) {
        updatePosition("#left-wing", playerName, teamPointsDiv);
      }
  
      // Calculate and display the total points for selected players in positions
      var totalPoints = calculateTotalPoints();
      $("#title2").text("Total Points: " + totalPoints);
    });
  
    // Function to update position with player and points
    function updatePosition(position, playerName, teamPointsDiv) {
      $(position).html('<div class="position-player">' + playerName + ' (<span class="white-text">' + teamPointsDiv + '</span>)</div>');
    }
  
    // Function to calculate the total points for selected players in field positions
    function calculateTotalPoints() {
      var totalPoints = 0;
      $(".position-player .white-text").each(function() {
        var points = parseInt($(this).text()) || 0;
        totalPoints += points;
      });
      return totalPoints;
    }
  
    // Get all team div elements
    const teamDivs = document.querySelectorAll('.teams div');
  
    // Add click event listeners to team divs
    teamDivs.forEach(teamDiv => {
      teamDiv.addEventListener('click', function() {
        const team = this.classList[0]; // Get the clicked team class
  
        // Remove the white background color from all team divs
        $(".lfc, .ars, .tot, .city, .chelsea").css("background-color", "");
  
        // Change the background color of the clicked team div to white
        $(this).css("background-color", "white");
  
        // Show players for the selected team
        showPlayers(team);
      });
    });
  
    // Function to show player points based on the selected team
    function showPlayers(team) {
      // Reset total points
      var totalPoints = 0;
  
      // Remove the points from the parentheses and reset to 0
      $(".position-player .white-text").text(function () {
      $(this).text("0");
      });
  
      // Get all player elements
      const playerDivs = document.querySelectorAll('#choose .parent > div[id^="player"]');
  
      // Iterate over each player div
      playerDivs.forEach(playerDiv => {
        const pointsDivs = playerDiv.querySelectorAll('.points div');
  
        // Hide all points divs
        pointsDivs.forEach(pointsDiv => {
          pointsDiv.style.display = 'none';
        });
  
        // Show points div corresponding to the selected team
        const teamPointsDiv = playerDiv.querySelector(`.${team}-points`);
          if (teamPointsDiv) {
            teamPointsDiv.style.display = 'block';
            totalPoints += parseInt(teamPointsDiv.textContent) || 0;
          }
      });
  
      // Update the selected team
      selectedTeam = team;
  
      // Calculate and display the total points for selected players in field positions
      var totalPointsField = calculateTotalPoints();
      $("#title2").text("Total Points: " + totalPointsField);
  
      // Function to calculate the total points for selected players in field positions
      function calculateTotalPoints() {
        var totalPoints = 0;
        $(".position-player .white-text").each(function () {
          var points = parseInt($(this).text()) || 0;
          totalPoints += points;
        });
        return totalPoints;
      }
    }
  
    // Hide all points initially
    const pointsDivs = document.querySelectorAll('.points div');
    pointsDivs.forEach(pointsDiv => {
      pointsDiv.style.display = 'none';
    });
  
    // Calculate and display the total points for selected players in field positions
    var totalPoints = calculateTotalPoints();
    $("#title2").text("Total Points: " + totalPoints);
  });
  