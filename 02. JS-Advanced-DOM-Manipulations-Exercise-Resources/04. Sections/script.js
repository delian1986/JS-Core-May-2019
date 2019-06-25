function create(sections) {
   if (Array.isArray(sections)) {
      drawSections(sections);
   }

   function drawSections(sections) {
      let content = document.getElementById('content');
      for (let i = 0; i < sections.length; i++) {
         let div = document.createElement('div');
         let p = document.createElement('p');

         p.innerText = sections[i];
         p.style.display = 'none';
         div.appendChild(p);
         div.addEventListener('click', toggleText);
         content.appendChild(div);
      }
   }

   function toggleText() {
      if (this.childNodes[0].tagName != 'P') {
         console.error('Element is not para');
         return;
      }

      if (this.childNodes[0].style.display == 'none') {
         this.childNodes[0].style.display = 'block';
      } else {
         this.childNodes[0].style.display = 'none';
      }
   }
}