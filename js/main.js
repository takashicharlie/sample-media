'use strict'

{
  let i = 0;
  let currentSlideIndex = 0;
  const TYPE_COUNT = 3
  const INTERVAL = 3
  const IMAGE_COUNT = 3
  const HIDDEN_CLASS_NAME = "top-posts--hidden"
  const timer = setInterval(() => {
      i++;
      if (i % INTERVAL === 0) {
          currentSlideIndex = (currentSlideIndex + 1) % TYPE_COUNT;
          const nodes = [...document.body.querySelectorAll(".top-posts__post")]
          const min = currentSlideIndex * IMAGE_COUNT
          const max = min + IMAGE_COUNT - 1
  
          console.log(currentSlideIndex, min, max, nodes)
          nodes.forEach((node, index) => {
              if (min <= index && max >= index) {
                  node.classList.remove(HIDDEN_CLASS_NAME)
              } else {
                  if (!node.classList.contains(HIDDEN_CLASS_NAME)) {
                    node.classList.add(HIDDEN_CLASS_NAME)    
                  }
              }
          });
      }
  }, 3000)
}