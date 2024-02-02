window.onload = function() {

    setTimeout(function(){
        let submitButton = document.querySelector('button[data-e2e-locator="console-submit-button"]');
        

        if(submitButton){
            // Add event listener to the submit button
               
            submitButton.addEventListener('click', function() {
                        
                function checkSubmissionResult() {
                    var submissionResultSpan = document.querySelector('span[data-e2e-locator="submission-result"]');
                    if (submissionResultSpan && submissionResultSpan.textContent.trim() === "Accepted") {
                        // Send message to background script
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
