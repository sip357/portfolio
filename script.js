document.getElementById('downloadCV').addEventListener('click', function() {
    var link = document.createElement('a');
    
    link.href = "resume/SomtoSWEResume.pdf";
    
    link.download = 'SomtoSWEResume.pdf'; 
    
    // Append the anchor to the body
    document.body.appendChild(link);

    // Trigger the download by simulating a click
    link.click();

    // Remove the anchor from the document
    document.body.removeChild(link);
});

// Select all slider tracks
const sliderContainers = document.querySelectorAll('.slider-container');

sliderContainers.forEach(container => {
    const sliderTrack = container.querySelector('.slider-track');
    const slides = Array.from(sliderTrack.children);

    // Clone the elements to create an infinite effect
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        sliderTrack.appendChild(clone);
    });
});
