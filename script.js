// Create a function to help viewer download my CV
document.getElementById('downloadCV').addEventListener('click', function() {
    var link = document.createElement('a');
    
    link.href = "resume/SomtoSWEResume.pdf";
    
    link.download = 'SomtoResume.pdf'; 
    
    // Append the anchor to the body (optional, to ensure compatibility)
    document.body.appendChild(link);

    // Trigger the download by simulating a click
    link.click();

    // Remove the anchor from the document
    document.body.removeChild(link);
});