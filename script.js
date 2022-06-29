const slidegroup = document.getElementById('slidegroup');
const slides = [].slice.call(document.getElementsByTagName("slide"));
const chapters = [].slice.call(document.getElementsByTagName("chapter"));
const viewport_height = window.innerHeight;
const select_language = document.getElementById("language");
slidegroup.addEventListener("scroll", function(evt){
  let top = slidegroup.scrollTop;

  const selectCurrent = function(target){
    const current = document.getElementsByClassName("current")[0];
    if(current && current!=target) current.classList.remove("current");
    target.classList.add("current");

    const chapterName = target.getAttribute("chapter");
    const target_chapter = document.getElementById(`chapter-${chapterName}`);
    if(chapterName) {
      const current_chapter = document.getElementsByClassName("current-chapter")[0];
      if(current_chapter && current_chapter!=target_chapter) current_chapter.classList.remove("current-chapter");
      target_chapter.classList.add("current-chapter");
    }
  }

  if (top < viewport_height * 0.5) selectCurrent(slides[0]);
  else if (top < viewport_height * 1.5) selectCurrent(slides[1]);
  else if (top < viewport_height * 2.5) selectCurrent(slides[2]);
  else if (top < viewport_height * 3.5) selectCurrent(slides[3]);
  else if (top < viewport_height * 4.5) selectCurrent(slides[4]);
  else if (top < viewport_height * 5.5) selectCurrent(slides[5]);
  else if (top < viewport_height * 6.5) selectCurrent(slides[6]);
  else if (top < viewport_height * 7.5) selectCurrent(slides[7]);
  else if (top < viewport_height * 8.5) selectCurrent(slides[8]);
  else if (top < viewport_height * 9.5) selectCurrent(slides[9]);
  else if (top < viewport_height * 10.5) selectCurrent(slides[10]);
});

select_language.addEventListener("change",function(evt){
  if(window.location.href="https://2ood.github.io/2ood/ko/index.html")
    window.location.href="https://2ood.github.io/2ood/index.html";
  else window.location.href="https://2ood.github.io/2ood/ko/index.html";
});

document.addEventListener("DOMContentLoaded",function(){
  slides[0].classList.add("current");
  chapters[0].classList.add("current-chapter");
});
