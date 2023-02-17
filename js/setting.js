function darkMode(event)
{
	var Body = document.body;
    Body.classList.toggle("dark-mode-body");
    
    var gameBox = document.getElementById("gameBox");
    gameBox.classList.toggle("dark-mode-gameBox");
    
    changeDarkModeText();
}

function changeDarkModeText() {
    var Body = document.body;
    var darkButton = document.getElementById('darkButton');
    if (Body.classList.contains('dark-mode-body')) {
        if (t%2 == 0) {
            darkButton.innerHTML = "Light Mode";
        } else {
            darkButton.innerHTML = "وضع نهاري";
        }
    } else {
        if (t%2 == 0) {
            darkButton.innerHTML = "Dark Mode";
        } else {
            darkButton.innerHTML = "وضع ليلي";
        }
    }
}

var texts = {
    E:{
        1:"musab mohammed abualgasim hassan",
        2:"تغير اللغة (عربي)",
        3:"Stop & reset",
        4:"Score:",
        5:"Start game",
        6:"set your speed",
        7:"Value",
        8:"Pong is a table tennis–themed twitch arcade sports video game, featuring simple two-dimensional graphics, manufactured by Atari and originally released in 1972. It was one of the earliest arcade video games; it was created by Allan Alcorn as a training exercise assigned to him by Atari co-founder Nolan Bushnell, but Bushnell and Atari co-founder Ted Dabney were surprised by the quality of Alcorn's work and decided to manufacture the game. Bushnell based the game's concept on an electronic ping-pong game included in the Magnavox Odyssey, the first home video game console. In response, Magnavox later sued Atari for patent infringement.",
        9:"Pong was the first commercially successful video game, and it helped to establish the video game industry along with the Magnavox Odyssey. Soon after its release, several companies began producing games that closely mimicked its gameplay. Eventually, Atari's competitors released new types of video games that deviated from Pong's original format to varying degrees, and this, in turn, led Atari to encourage its staff to move beyond Pong and produce more innovative games themselves.",
        10:"Atari released several sequels to Pong that built upon the original's gameplay by adding new features. During the 1975 Christmas season, Atari released a home version of Pong exclusively through Sears retail stores. The home version was also a commercial success and led to numerous clones. The game was remade on numerous home and portable platforms following its release. Pong is part of the permanent collection of the Smithsonian Institution in Washington, D.C., due to its cultural impact.",
    },
    A:{
        1:"مصعب محمد ابوالقاسم حسن",
        2:"Change Language (Eng)",
        3:"توقف واعادة ضبط",
        4:"الدرجة :",
        5:"أبدأ اللعب",
        6:"ضع السرعة المناسبة لك",
        7:"القيمة :",
        8:"Pong هي لعبة فيديو رياضية من نوع Twitch Arcade ، وتتميز برسومات ثنائية الأبعاد بسيطة ، تم تصنيعها بواسطة Atari وتم إصدارها في الأصل في عام 1972. وكانت واحدة من أقدم ألعاب الفيديو الممرات. تم إنشاؤه بواسطة ألان ألكورن كتدريب تم تعيينه له من قبل المؤسس المشارك لشركة أتاري نولان بوشنيل ، لكن تيد دابني المؤسس المشارك بوشنيل وأتاري فوجئوا بجودة عمل ألكورن وقرروا تصنيع اللعبة. أسس بوشنل مفهوم اللعبة على لعبة تنس الطاولة الإلكترونية المضمنة في Magnavox Odyssey ، أول وحدة تحكم لألعاب الفيديو المنزلية. رداً على ذلك ، رفع Magnavox دعوى قضائية ضد Atari لانتهاك براءات الاختراع.",
        9:"كانت Pong أول لعبة فيديو ناجحة تجاريًا ، وساعدت في تأسيس صناعة ألعاب الفيديو جنبًا إلى جنب مع Magnavox Odyssey. بعد فترة وجيزة من صدوره ، بدأت العديد من الشركات في إنتاج ألعاب تحاكي أسلوب لعبها عن كثب. في النهاية ، أطلق منافسو أتاري أنواعًا جديدة من ألعاب الفيديو انحرفت عن التنسيق الأصلي لبونج بدرجات متفاوتة ، وهذا بدوره دفع أتاري إلى تشجيع موظفيها على تجاوز لعبة بونج وإنتاج المزيد من الألعاب المبتكرة بأنفسهم.",
        10:"أصدر أتاري عدة تتابعات لـ Pong والتي بنيت على طريقة اللعب الأصلية بإضافة ميزات جديدة. خلال موسم عيد الميلاد عام 1975 ، أصدرت أتاري نسخة منزلية من لعبة بونج حصريًا من خلال متاجر سيرز للبيع بالتجزئة. كانت النسخة المنزلية أيضًا نجاحًا تجاريًا وأدت إلى العديد من الحيوانات المستنسخة. تم تجديد اللعبة على العديد من المنصات المنزلية والمحمولة بعد إصدارها. يعد Pong جزءًا من المجموعة الدائمة لمؤسسة Smithsonian Institution في واشنطن العاصمة ، نظرًا لتأثيرها الثقافي.",
    }
};
var t = 0;

function changeLang(event) {
    t++;
    if (t%2 == 0) {

        document.getElementById('myName').innerHTML = texts.E[1];
        document.getElementById('changeLang').innerHTML = texts.E[2];
        document.getElementById('stop').innerHTML = texts.E[3];
        document.getElementById('score').innerHTML = texts.E[4];
        document.getElementById('startButton').innerHTML = texts.E[5];
        document.getElementById('labelRange').innerHTML = texts.E[6];
        document.getElementById('speedValue').innerHTML = texts.E[7];
        document.getElementById('PD1').innerHTML = texts.E[8];
        document.getElementById('PD2').innerHTML = texts.E[9];
        document.getElementById('PD3').innerHTML = texts.E[10];
        
    } else {

        document.getElementById('myName').innerHTML = texts.A[1];
        document.getElementById('changeLang').innerHTML = texts.A[2];
        document.getElementById('stop').innerHTML = texts.A[3];
        document.getElementById('score').innerHTML = texts.A[4];
        document.getElementById('startButton').innerHTML = texts.A[5];
        document.getElementById('labelRange').innerHTML = texts.A[6];
        document.getElementById('speedValue').innerHTML = texts.A[7];
        document.getElementById('PD1').innerHTML = texts.A[8];
        document.getElementById('PD2').innerHTML = texts.A[9];
        document.getElementById('PD3').innerHTML = texts.A[10];

    }
    changeDarkModeText();
}