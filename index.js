// script.js
$(document).ready(function() {
   // Function to execute the "banner" command
   function executeBannerCommand() {
      var cmd = "banner";
      
      // Display the command with the prompt in the output
      $("#output").append("<div><span id='prompt'>terminal@shacyan.cloud:~$</span> " + cmd + "</div>");

      // Fetch and display the content of a text file (e.g., banner.txt)
      fetch('banner.txt')
         .then(response => response.text())
         .then(data => {
            // Display the content in the output without the initial prompt
            $("#output").append(data);
         })
         .catch(error => {
            // Handle errors
            $("#output").append("<div>Error loading banner content.</div>");
         });
   }

   // Execute the "banner" command when the document is ready (page loads)
   executeBannerCommand();

   // Set focus on the input field
   $("#cmd").focus();

   $("#cmd").keypress(function(e) {
      if (e.which == 13) {
         var cmd = $("#cmd").val().trim().toLowerCase();
         $("#cmd").val("");

         var allowedCommands = ["whoami", "profile", "about", "banner"];

         // Display user's input with the prompt in the output
         $("#output").append("<div><span id='prompt'>terminal@shacyan.cloud:~$</span> " + cmd + "</div>");

         if (allowedCommands.includes(cmd)) {
            switch (cmd) {
               case "whoami":
                  // Display the result without the initial prompt
                  $("#output").append("<div>Your username is John Doe.</div>");
                  break;
               case "profile":
                  // Display the result without the initial prompt
                  $("#output").append("<div>This is your profile.</div>");
                  break;
               case "about":
                  // Display the result without the initial prompt
                  $("#output").append("<div>This is the about page.</div>");
                  break;
               case "banner":
                  // Execute the "banner" command again
                  fetch('banner.txt')
                  .then(response => response.text())
                  .then(data => {
                     // Display the content in the output without the initial prompt
                     $("#output").append(data);
                  })
                  break;
            }
         } else {
            // Display the result without the initial prompt
            $("#output").append("<div>Command not found. Type 'help' for a list of available commands.</div>");
         }
      }
   });
});
