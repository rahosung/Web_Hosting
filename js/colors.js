let Links = {
    setColor: function (color) {
        $('a').css('color', color); //jquery 사용
        
        // let alist = document.querySelectorAll('a');
        // let i = 0;
        // while (i < alist.length) {
        //     console.log(alist[i]);
        //     alist[i].style.color = color;
        //     i++
        // }
    }
}
let Body = {
    setColor: function (color) {
        $('body').css('color', color); //jquery 사용

        // document.querySelector('body').style.color = color;
    },
    setBackgroundColor: function (color) {
        $('body').css('backgroundColor', color); //jquery 사용

        // document.querySelector('body').style.background = color;
    }
};

function nightDayHandler(self) {
    let target = document.querySelector('body');
    if (self.value === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';

        Links.setColor('white');
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night';

        Links.setColor('blue');
    }
}