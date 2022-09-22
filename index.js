console.log("Hello, world!");

$('.logo').on( "click", function(){
    Swal.fire(
        'What is this?',
        'This is my logo :)',
        'question'
      )
})


$('.click-to-learn-more').on( "click", function(){
  Swal.fire(
      'More about me!',
      'Thank you, for your interest! I will eventually add more content!!',
      'info'
    )
})

$('.search-button').on( "click", function(){
  Swal.fire(
      'OH NO!! Something went wrong!',
      'Thank you, for your interest and patience! I will get to working on this ASAP!!',
      'info'
    )
})

