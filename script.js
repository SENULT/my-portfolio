function addRecommendation() {
    let recommendation = document.getElementById("new_recommendation");
    if (recommendation.value != null && recommendation.value.trim() != "") {
        console.log("New recommendation added");

        // Show the pop-up
        showPopup(true);

        // Create a new recommendation element
        var element = document.createElement("div");
        element.setAttribute("class", "recommendation");
        element.innerHTML = `<span>&#8220;</span>${recommendation.value}<span>&#8221;</span>`;
        
        // Append the recommendation to the list
        document.getElementById("all_recommendations").appendChild(element);

        // Clear the textarea
        recommendation.value = "";
    }
}
  
  function showPopup(bool) {
    
    if (bool) {
      document.getElementById('popup').style.visibility = 'visible'
    } else {
      document.getElementById('popup').style.visibility = 'hidden'
    }
  }

showPopup(true);
  