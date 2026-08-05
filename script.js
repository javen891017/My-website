const skillsChange = document.querySelectorAll('.skillsChange');

const skillsText = document.querySelectorAll('.skillsText');

const skillsImg = document.querySelector('#skillsImg')


skillsChange.forEach((element,index)=>{
    element.addEventListener('click',function(){
        
        skillsChange.forEach((element)=>{
            element.classList.remove('skillsChangeShow');
            element.classList.remove('btn-dark');
            element.classList.add('btn-light');
        });
        element.classList.toggle('skillsChangeShow');
        element.classList.toggle('btn-dark');

        skillsText.forEach((element)=>{
            element.classList.remove('skillsTextShow');
        });
        skillsText[index].classList.toggle('skillsTextShow');
        skillsImg.src = element.dataset.src
    })
});

