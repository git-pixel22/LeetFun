console.log("starting content.js");

window.onload = function() {
    console.log("The page is loaded")

    setTimeout(function(){
        let submitButton = document.querySelector('button[data-e2e-locator="console-submit-button"]');
        console.log("gotSubmitButton!!");
        console.log(submitButton);

        if(submitButton){
            // Add event listener to the submit button
            console.log("Submit Button exists!!");
    
            submitButton.addEventListener('click', function() {
                
                console.log("About To Check Results!!");
                // var submissionResultSpan = document.querySelector('span[data-e2e-locator="submission-result"]');
                // console.log(`Here is result: ${submissionResultSpan}`)
                
                // if (submissionResultSpan && submissionResultSpan.textContent.trim() === "Accepted") {
    
                //     // Send message to background script
                //     console.log("Accepted Solution Yay!!")
                //     chrome.runtime.sendMessage({ action: "acceptedSubmission" });
                // }

                function checkSubmissionResult() {
                    var submissionResultSpan = document.querySelector('span[data-e2e-locator="submission-result"]');
                    if (submissionResultSpan && submissionResultSpan.textContent.trim() === "Accepted") {
                        // Send message to background script
                        console.log("Accepted Solution Yay!!");
                        chrome.runtime.sendMessage({ action: "acceptedSubmission" });
                    } else {
                        // If the submission result span is not yet available, wait and check again
                        setTimeout(checkSubmissionResult, 1000); // Check again after 1 second
                    }
                }
        
                // Start checking for the submission result
                checkSubmissionResult();

            });
        }

    }, 3000);
   
};
