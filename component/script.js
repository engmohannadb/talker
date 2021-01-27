// initialize by constructing a named function...


var chatWindow = new mhndbubbles(
  document.getElementById("chat"), // ...passing HTML container element...
  "chatWindow" // ...and name of the function as a parameter
)
jQuery.noConflict();
jQuery(function ($) {
// conversation object defined separately, but just the same as in the
// "Basic chat-mhndbubble Example" (1-basics.html)
var convo = {
  // "ice" (as in "breaking the ice") is a required conversation object
  // that maps the first thing the bot will say to the user
    
     
    
          ConvT : {
    says: ["مرحبا بك", "انا نايف من مركز التدرب الإلكتروني أتشرف بخدمتك" , "هل انت مدرب أم متدرب؟", "<script async src='https://www.googletagmanager.com/gtag/js?id=G-7JR3QWVJS3'></script> <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-7JR3QWVJS3'); </script>"],
    reply: [
      {
        question: "متدرب",
        answer: "mainConv"
      },
    {
        question: "مدرب",
        answer: "TrainerC"
      },
    ]
  },
    
    
          TrainerC : {
    says: ["ما هي المشكلة التي تواجهك؟"],
    reply: [
      {
        question: "مشكلة في البريد الالكتروني",
        answer: "ConvT1"
      },
    {
        question: "مشكلة في البلاك بورد",
        answer: "ConvT2"
      },
            {
        question: "مشكلة في رايات",
        answer: "ConvT3"
      },
    ]
  },
    
    
              ConvT1 : {
    says: ["نأمل رفع طلب دعم فني عبر بوابة الدعم للمؤسسة" , "<a href='https://tvtc.gov.sa/tech-support-page.html' target='_blank'>itsmsso.tvtc.gov.sa/</a>" , "هل أستطيع خدمتك خدمة أخرى؟"],
    reply: [
      {
        question: "لا ، شكرا لك",
        answer: "BYE"
      },
    {
        question: "نعم لدي مشكلة أخرى",
        answer: "TrainerC"
      },
    ]
  },
    

    
                     ConvT3 : {
    says: ["نأمل التواصل مع مسؤول القبول والتسجيل (مسؤول نظام رايات) في الوحدة التدريبية" , "<a href='http://elearning.edu.sa/support/' target='_blank'>Elearning.edu.sa/support</a>", "هل أستطيع خدمتك خدمة أخرى؟"],
    reply: [
      {
        question: "لا ، شكرا لك",
        answer: "BYE"
      },
    {
        question: "نعم لدي مشكلة أخرى",
        answer: "TrainerC"
      },
    ]
  },
    
    
                    ConvT2 : {
        says: ["ما هو نوع المشكلة التي تواجهك؟"],
    reply: [
      {
        question: "أدوات ومحتوى الشعبة التدريبية",
        answer: "ConvT21"
      },
    {
        question: "عدم ظهور المقررات",
        answer: "ConvT22"
      },
          {
        question: "تسجيل الدخول للنظام",
        answer: "ConvT23"
      },
    ]
  },
    
                        ConvT21 : {
        says: ["ما هي المشكلة بالتحديد؟"],
    reply: [
      {
        question: "لا يمكنني رفع محتوى أو استيراد اختبار في الشعبة",
        answer: "ConvT211"
      },
    {
        question: "جلسات بث المحاضرات",
        answer: "ConvT212"
      },
          {
        question: "أخرى",
        answer: "ConvT213"
      },
    ]
  },
    
                            ConvT211 : {
        says: ["تم تجاوز المساحة المحددة للشعبة على النظام" , "نأمل رفع الملفات كروابط لتتاح مساحة اضافية للشعبة" , "هل أستطيع خدمتك خدمة أخرى؟"],
    reply: [
      {
        question: "لا ، شكرا لك",
        answer: "BYE"
      },
    {
        question: "نعم لدي مشكلة أخرى",
        answer: "TrainerC"
      },
    ]
  },
    
                                ConvT212 : {
        says: ["حسناً ، لنحدد المشكلة بالتحديد"],
    reply: [
      {
        question: "لا أجد أداة كلابوريت في الشعبة",
        answer: "ConvT2121"
      },
    {
        question: "الصوت لا يعمل داخل جلسة البث",
        answer: "ConvT2122"
      },
            {
        question: "لا يمكنني الدخول على الجلسة",
        answer: "ConvT2123"
      },
    ]
  },
    
                                    ConvT2121 : {
        says: ["يرجى اتاحة الاداة في الشعبة من خلال لوحة التحكم" , " ثم تخصيص ثم إزاحة الاداوات ثم وضع علامة صح أمام أداة Collaborate" , "هل لا زالت المشكلة مستمرة؟"],
    reply: [
    {
        question: "نعم",
        answer: "YES1"
      },
            {
        question: "لا",
        answer: "NO1"
      },
    ]
  },
    
    
                                        ConvT2122 : {
        says: ["يجب التأكد من تفعيل الميكروفون من إعدادات المتصفح، من خلال" , "أعلى صفحة المتصفح إنقر على علامة القفل بجانب الرابط في شريط العنوان" , "اختيار اعدادات المواقع الالكترونية" , "من قائمة الأذونات قم باختيار (سماح) للمايكروفون" , "هل لا زالت المشكلة مستمرة؟"],
    reply: [
    {
        question: "نعم",
        answer: "YES1"
      },
            {
        question: "لا",
        answer: "NO1"
      },
    ]
  },
    
                                            ConvT2123 : {
        says: ["تأكد من أن متصفحك يدعم تشغيل جلسات الكولابريت" , "تأكد من تحديث المتصفح إلى أخر نسخة" , "تأكد من السماح بملفات الارتباط (الكوكيز) من إعدادات المتصفح" , "هل لا زالت المشكلة مستمرة؟"],
    reply: [
    {
        question: "نعم",
        answer: "YES1"
      },
            {
        question: "لا",
        answer: "NO1"
      },
    ]
  },
    
                YES1 : {
        says: ["نأمل التواصل مع مدير المركز الفرعي للتدريب الالكتروني في الوحدة التدريبية" , "رابط موقع الدعم الفني <a href='http://elearning.edu.sa/support/' target='_blank'>Elearning.edu.sa/support</a>"],
    reply: [
    ]
  },
    
                    NO1 : {
        says: ["سعدنا بخدمتك" , "مع السلامة"],
    reply: [
    ]
  },
    

    
    
                                                ConvT213 : {
        says: ["نأمل التواصل مع مدير المركز الفرعي للتدريب الالكتروني بالوحدة التدريبية" , "<a href='http://elearning.edu.sa/support/' target='_blank'>Elearning.edu.sa/support</a>"],
    reply: [
    ]
  },
    
    
    
    
    
    
                ConvT22 : {
        says: ["هل المقرر مسند لك في نظام رايات؟"],
    reply: [
    {
        question: "نعم",
        answer: "ConvT221"
      },
            {
        question: "لا",
        answer: "ConvT222"
      },
    ]
  },
    
                    ConvT221 : {
        says: ["نأمل التأكد من إعدادات إظهار المقرر" , "وذلك من خلال علامة العجلة بجانب قائمة المقررات الدراسية في الصفحة الرئيسية" , "نأمل محاولة تسجيل الدخول" , "هل ما زالت المشكلة مستمرة؟"],
    reply: [
    {
        question: "نعم",
        answer: "ConvT2211"
      },
            {
        question: "لا",
        answer: "NO1"
      },
    ]
  },
    
    
                        ConvT222 : {
        says: ["نأمل طلب دعم فني (تحديث بيانات البلاك بورد) عبر بوابة الدعم للمؤسسة عبر الرابط:" , "<a href='https://tvtc.gov.sa/tech-support-page.html' target='_blank'>itsmsso.tvtc.gov.sa/</a>"],
    reply: [
    ]
  },
    
    
    
    
                        ConvT23 : {
        says: ["حدد نوع المشكلة"],
    reply: [
    {
        question: "عدم إمكانية تسجيل الدخول على المتصفح",
        answer: "ConvT231"
      },
            {
        question: "التطبيق لا يعمل",
        answer: "ConvT232"
      },
    ]
  },
    
                            ConvT231 : {
        says: ["حدد نوع المشكلة"],
    reply: [
    {
        question: "عدم إمكانية تسجيل الدخول على المتصفح",
        answer: "ConvT2311"
      },
            {
        question: "التطبيق لا يعمل",
        answer: "ConvT2312"
      },
    ]
  },
    
                                ConvT2311 : {
        says: ["هل يوجد مقررات مسندة لك في نظام رايات؟"],
    reply: [
    {
        question: "نعم",
        answer: "ConvT23111"
      },
            {
        question: "لا",
        answer: "ConvT23112"
      },
    ]
  },
    
    
                                    ConvT23111 : {
        says: ["أسم المستخدم هو أسم مستخدم بوابة الموظفين" , "وكلمة المرور الافتراضية هو الرقم الوظيفي المكون من 7 ارقام" , "نأمل محاولة تسجيل الدخول" , "هل لازالت المشكلة مستمرة؟"],
    reply: [
    {
        question: "نعم",
        answer: "ConvT231111"
      },
            {
        question: "لا",
        answer: "NO1"
      },
    ]
  },
    
    
                                        ConvT231111 : {
        says: ["يمكنك تغيير كلمة المرور الافتراضية من خلال الضغط على" , "نسيت كلمة المرور الخاصة بك؟" , "من صفحة الدخول على نظام البلاك بورد" , "نأمل محاولة تغيير كلمة المرور ثم محاولة تسجيل الدخول" , "هل لازالت المشكلة مستمرة؟"],
    reply: [
    {
        question: "نعم",
        answer: "ConvT2311111"
      },
            {
        question: "لا",
        answer: "NO1"
      },
    ]
  },
    
                                            ConvT2311111 : {
        says: ["نأمل التواصل مع مدير المركز الفرعي للتدريب الالكتروني في الوحدة التدريبية" , "<a href='http://elearning.edu.sa/support/' target='_blank'>Elearning.edu.sa/support</a>"],
    reply: [
    ]
  },
    
    
    
    
    
                                            ConvT23112 : {
        says: ["يمكنك الوصول للبلاك بورد فقط في حال وجود مقررات مسندة لك في نظام رايات" , "هل استطيع خدمتك خدمة أخرى؟"],
    reply: [
    {
        question: "نعم",
        answer: "TrainerC"
      },
            {
        question: "لا , شكرا لك",
        answer: "NO1"
      },
    ]
  },
    
 // above is the trainer part
 // Below youll find the student part
    
    
    
    
    
    
    
    
    
  mainConv: {
    // "says" defines an array of sequential mhndbubbles
    // that the bot will produce
    says: ["مرحبا بك","يسعدني خدمتك","هل مشكلتك تتعلق بأي من"],

    // "reply" is an array of possible options the user can pick from
    // as a reply
    reply: [
             {
        question: "مشكلة أخرى", // label for the reply option
        answer: "answer5" // key for the next conversation object
      },
	{
        question: "البريد الالكتروني ومنصة Teams", // label for the reply option
        answer: "answer4" // key for the next conversation object
      },
      {
        question: "المكافأة", // label for the reply option
        answer: "answer2" // key for the next conversation object
      },
	  {
        question: "البلاك بورد", // label for the reply option
        answer: "answer3" // key for the next conversation object
      },
        {
        question: "رايات", // label for the reply option
        answer: "answer1" // key for the next conversation object
      },
        
    ]
  }, 
    
      answer5 : {
    says: ["هل مشكلتك تتعلق بأي من"],
    reply: [
      {
        question: "الشهادات الاحترافية",
        answer: "answer6"
      },
    {
        question: "الاكاديميات العالمية",
        answer: "answer7"
      },
            {
        question: "مراكز الاختبارات الدولية",
        answer: "answer8"
      },
    ]
  },
    
          answer6 : {
    says: ["حدد نوع المشكلة"],
    reply: [
      {
        question: "قسائم الاختبارات",
        answer: "ConvD1"
      },
    {
        question: "كيفية الحصول على شهادة احترافية",
        answer: "ConvD2"
      },
            {
        question: "معادلة الشهادة",
        answer: "ConvD3"
      },
    ]
  },

        ConvD1 : {
    says: ["نأمل التواصل مع مدير مركز التدريب الالكتروني بالوحدة التدريبية للإطلاع على القسائم المتوفرة " , "<a href='http://elearning.edu.sa/support/' target='_blank'>Elearning.edu.sa/support</a>" , "هل أستطيع خدمتك خدمة أخرى؟"],
    reply: [
      {
        question: "نعم",
        answer: "mainConv"
      },
    {
        question: "لا",
        answer: "BYE"
      },
    ]
  },
    
            ConvD2 : 
    {
    says: ["الاستعداد للاختبار من خلال المحتوى الخاص به" , "الحصول على القسيمة الخاصة بالاختبار" , "إجراء الاختبار في مركز الاختبار المعتمد" , "لمزيد من المعلومات نأمل التواصل مع مدير مركز التدريب الالكتروني بالوحدة التدريبية" , "<a href='http://elearning.edu.sa/support/' target='_blank'>Elearning.edu.sa/support</a>" , "هل أستطيع خدمتك خدمة أخرى؟"],
    reply: [
      {
        question: "نعم",
        answer: "mainConv"
      },
    {
        question: "لا",
        answer: "BYE"
      },
    ]
  },
    
               ConvD3 :
    {
    says: ["نأمل الاطلاع على ضوابط وإجراءات وألية الرفع بطلب المعادلات عبر الرابط <a href='http://elearning.edu.sa/support/' target='_blank'>Elearning.edu.sa/support</a>" , "هل أستطيع خدمتك خدمة أخرى؟"],
    reply: [
      {
        question: "نعم",
        answer: "mainConv"
      },
    {
        question: "لا",
        answer: "BYE"
      },
    ]
  },
    
                answer7 : {
                    says: ["لنعمل على تحديد المشكلة"],
                    reply: [
                        {
                            question: "الاستفادة من خدمات الاكاديميات العالمية",
                            answer: "ConvD4"
                        },
                        {
                            question: "التعريف بالاكاديميات العالمية بالمؤسسة",
                            answer: "ConvD5"
                        },
                    ]
                },
    
                    ConvD4 : {
                    says: ["نأمل التواصل مع مدير مركز التدريب الالكتروني بالوحدة التدريبية" , "<a href='http://elearning.edu.sa/support/' target='_blank'>Elearning.edu.sa/support</a>" , "هل أستطيع خدمتك خدمة أخرى؟"],
                    reply: [
                        {
                            question: "نعم لدي مشكلة أخرى",
                            answer: "mainConv"
                        },
                        {
                            question: "لا ، شكراً لك",
                            answer: "BYE"
                        },
                    ]
                },
    
                     ConvD5 : {
                    says: ["نأمل الاطلاع على الدليل التعريفي الخاص بالاكاديميات العالمية على الرابط التالي:" ,".............", "هل أستطيع خدمتك خدمة أخرى؟"],
                    reply: [
                        {
                            question: "نعم لدي مشكلة أخرى",
                            answer: "mainConv"
                        },
                        {
                            question: "لا ، شكراً لك",
                            answer: "BYE"
                        },
                    ]
                },   
    
                             answer8 : {
                    says: ["نأمل التواصل مع مدير مركز التدريب الالكتروني بالوحدة التدريبية" , "<a href='http://elearning.edu.sa/support/' target='_blank'>Elearning.edu.sa/support</a>" , "هل أستطيع خدمتك خدمة أخرى؟"],
                    reply: [
                        {
                            question: "نعم لدي مشكلة أخرى",
                            answer: "mainConv"
                        },
                        {
                            question: "لا ، شكراً لك",
                            answer: "BYE"
                        },
                    ]
                },  

    
    
    
  answer1 : {
    says: ["نأمل التواصل مع مسؤول القبول والتسجيل (مسؤول نظام رايات) في الوحدة التدريبية." , "كما يمكنكم التواصل معهم عن طريق الرابط التالي: <a href='http://elearning.edu.sa/support/' target='_blank'>Elearning.edu.sa/support</a>" , "هل أستطيع تقديم أي خدمة أخرى؟"],
    reply: [
      {
        question: "نعم لدي مشكلة أخرى",
        answer: "mainConv"
      },
    {
        question: "لا ، شكراً لك",
        answer: "BYE"
      },
    ]
  }, // end conversation object
  
    
      answer2 : {
    says: ["نأمل التواصل مع وحدة التوجية والارشاد في الوحدة التدريبية." , "هل أستطيع تقديم أي خدمة أخرى؟"],
    reply: [
      {
        question: "نعم لدي مشكلة أخرى",
        answer: "mainConv"
      },
    {
        question: "لا ، شكراً لك",
        answer: "BYE"
      },
    ]
  }, // end conversation object
    
    
    
          answer3 : {
    says: ["ما هي نوع المشكلة التي تواجهك؟"],
    reply: [
      {
        question: "تسجيل الدخول للنظام",
        answer: "answer11"
      },
      {
        question: "عدم ظهور المقرر",
        answer: "answer22"
      },
        {
        question: "أدوات ومحتوى الشعبة التدريبية",
        answer: "answer33"
      },
        
    ]
  }, 
    
    
        answer11 : {
    says: ["حدد نوع المشكلة"],
    reply: [
      {
        question: "التطبيق لا يعمل",
        answer: "Conv1"
      },     
        {
        question: "عدم إمكانية تسجيل الدخول على المتصفح",
        answer: "Conv2"
      },     
    ]
  },
    
            Conv1 : {
    says: ["التطبيق معطل حالياً، نأمل استخدام المتصفح فقط." , "هل أستطيع تقديم أي خدمة أخرى؟"],
    reply: [
      {
        question: "نعم لدي مشكلة أخرى",
        answer: "mainConv"
      },     
        {
        question: "لا ، شكراً لك.",
        answer: "BYE"
      },     
    ]
  },
    
            Conv2 : {
    says: ["هل يوجد مقررات مسجلة لك في نظام رايات؟"],
    reply: [
      {
        question: "نعم",
        answer: "Conv3"
      },     
        {
        question: "لا",
        answer: "Conv4"
      },     
    ]
  },
    
                    Conv3 : {
                                says: ["نوع الوحدة التدريبية الملتحق بها"],
                                reply: [
                                    {
                                        question: "كلية تقنية",
                                        answer: "Conv5"
                                    },   
                                                                        {
                                        question: "معهد صناعي",
                                        answer: "Conv6"
                                    },   
                                ]
                            },
                    Conv4 : {
                        says: ["يمكنك الوصول للبلاك بورد فقط في حال وجود مقررات مسجلة لك على نظام رايات" , "هل أستطيع تقديم أي خدمة أخرى؟" ],
                        reply: [
                                {
                                    question: "نعم لدي مشكلة أخرى",
                                    answer: "mainConv"
                                },       
                                {
                                    question: "لا ، شكراً لك.",
                                    answer: "BYE"
                                }, 
                                ]
                            },
    
                                                            Conv5 : {
                                                                says: ["هل رقمك التدريبي يبدأ بـ 4 ؟" ],
                                                                reply: [
                                                                    {
                                                                        question: "نعم",
                                                                        answer: "Conv7"
                                                                    },       
                                                                    {
                                                                        question: "لا",
                                                                        answer: "Conv8"
                                                                    }, 
                                                                    ]
                                                                    },
    
    
                                                                Conv6 : {
                                                                says: ["أسم المستخدم هو رقم الهوية مقترنا مع رمز المعهد وكلمة المرور الافتراضية هي رقم الهوية كمثال:" , "MHI844362216" , "هل أستطيع خدمتك خدمة أخرى"],
                                                                reply: [
                                                                    {
                                                                        question: "نعم لدي مشكلة أخرى",
                                                                        answer: "mainConv"
                                                                    },       
                                                                    {
                                                                        question: "لا ، شكراُ لك.",
                                                                        answer: "BYE"
                                                                    }, 
                                                                    ]
                                                                    },
    
    
    
                                                                            Conv7 : {
                                                                                    says: ["أسم المستخدم هو الرقم التدريبي المكون من 9 خانات وكلمة المرور هي رقم الهوية باللغة الانجليزية" , "نأمل محاولة تسجيل الدخول، هل لا زالت المشكلة مستمرة؟"],
                                                                                    reply: [
                                                                                        {
                                                                                            question: "نعم",
                                                                                            answer: "Conv9"
                                                                                        },       
                                                                                        {
                                                                                            question: "لا",
                                                                                            answer: "BYE"
                                                                                        }, 
                                                                                    ]
                                                                            },
    
                                                                                Conv8 : {
                                                                                    says: ["أسم المستخدم هو الرقم التدريبي مقترناً مع رمز الكلية والمكون من 10 خانات، وكلمة المرور الافتراضية هي رقم الهوية باللغة الانجليزية." , "كمثال RDCT343614" , "نأمل محاولة تسجيل الدخول، هل لا زالت المشكلة مستمرة؟"],
                                                                                    reply: [
                                                                                        {
                                                                                            question: "نعم",
                                                                                            answer: "Conv9"
                                                                                        },       
                                                                                        {
                                                                                            question: "لا",
                                                                                            answer: "BYE"
                                                                                        }, 
                                                                                    ]
                                                                            },
    
    
    
                                                                                            Conv9 : {
                                                                                    says: ["يمكنك تغيير كلمة المرور الافتراضية من خلال الضغط على (نسيت كلمة المرور الخاصة بك) من صفحة الدخول على نظام البلاك بورد." , "نأمل محاولة تغيير كلمة المرور ثم محاولة الدخول مرة أخرى، هل لازالت المشكلة مستمرة؟"],
                                                                                    reply: [
                                                                                        {
                                                                                            question: "نعم",
                                                                                            answer: "Conv10"
                                                                                        },       
                                                                                        {
                                                                                            question: "لا",
                                                                                            answer: "BYE"
                                                                                        }, 
                                                                                    ]
                                                                            },
    
    
                                                                                        Conv10 : {
                                                                                    says: ["نأمل التواصل مع مدير المركز الفرعي بالوحدة التدريبية" , "أهل استطيع خدمتك خدمة أخرى؟"],
                                                                                    reply: [
                                                                                        {
                                                                                            question: "نعم لدي إستفسار اخر.",
                                                                                            answer: "mainConv"
                                                                                        },       
                                                                                        {
                                                                                            question: "لا ، شكراُ لك",
                                                                                            answer: "BYE"
                                                                                        }, 
                                                                                    ]
                                                                            },
    
    
                        answer22 : {
                                says: ["هل يوجد حالة مسجلة للمقرر على نظام رايات كالحرمان أو طي القيد أو غيرها؟"],
                                reply: [
                                    {
                                        question: "نعم",
                                        answer: "ConvB1"
                                    },
                                    {
                                        question: "لا ، لا يوجد ",
                                        answer: "ConvB2"
                                    },
                                ]
                        }, 
    
                            ConvB1 : {
                                says: ["نأمل معالجة أي حالة مسجلة في نظام رايات ثم الانتظار 24 ساعة ليظهر لك المقرر في البلاك بورد" , "هل أستطيع تقديم أي خدمات أخرى؟"],
                                reply: [
                                    {
                                        question: "نعم",
                                        answer: "mainConv"
                                    },
                                    {
                                        question: "لا شكراُ لك",
                                        answer: "BYE"
                                    },
                                ]
                        }, 
    
                                ConvB2 : {
                                says: ["نأمل التأكد من إعدادات إظهار المقرر وذلك من خلال علامة العجلة بجانب قائمة المقررات الدراسية في الصفحة الرئيسية للنظام" , "نأمل محاولة تسجيل الدخول ، هل ما زالت المشكلة مستمرة؟"],
                                reply: [
                                    {
                                        question: "نعم",
                                        answer: "ConvB3"
                                    },
                                    {
                                        question: "لا",
                                        answer: "BYE"
                                    },
                                ]
                        }, 
    
    
                                    ConvB3 : {
                                says: ["نأمل إرسال طلب دعم فني (تحديث بيانات البلاك بورد) عبر بوابة الدعم الفني للمؤسسة.", "<a href='https://tvtc.gov.sa/tech-support-page.html' target='_blank'>itsmsso.tvtc.gov.sa/</a>" , "هل أستطيع خدمتك خدمة أخرى؟"],
                                reply: [
                                    {
                                        question: "نعم",
                                        answer: "mainConv"
                                    },
                                    {
                                        question: "لا",
                                        answer: "BYE"
                                    },
                                ]
                        }, 
    
    
    
                            answer33 : {
                       says: ["حدد نوع المشكلة؟"],
                        reply: [
                          {
                            question: "الاختبارات والدرجات",
                            answer: "ConvC1"
                          },
                          {
                            question: "جلسات بث المحاضرات",
                            answer: "ConvC2"
                          },
                          {
                            question: "أخرى",
                            answer: "ConvC3"
                          }, 
                         ]
                        }, 
    
    
                                        ConvC1 : {
                                            says: ["نأمل التواصل حول جميع مع يخص الاختبارات والدرجات مع مدرب المقرر" , "هل أستطيع خدمتك خدمة أخرى؟"],
                                            reply: [
                                                {
                                                    question: "نعم",
                                                    answer: "mainConv"
                                                },
                                                {
                                                    question: "لا شكراً لك",
                                                    answer: "BYE"
                                                },
                                            ]
                                            }, 
    
                                            ConvC3 : {
                                            says: ["نأمل التواصل مع مدير المركز الفرعي للتدريب الالكتروني بالوحدة التدريبية" , "<a href='http://elearning.edu.sa/support/' target='_blank'>Elearning.edu.sa/support</a>" , "هل أستطيع خدمتك خدمة أخرى؟"],
                                            reply: [
                                                {
                                                    question: "نعم",
                                                    answer: "mainConv"
                                                },
                                                {
                                                    question: "لا شكراً لك",
                                                    answer: "BYE"
                                                },
                                            ]
                                            }, 
                                                ConvC2 : {
                                            says: ["ما هي نوع المشكلة التي تواجهك؟"],
                                            reply: [
                                                {
                                                    question: "لا أجد رابط بث المحاضرة في الشعبة",
                                                    answer: "ConvC4"
                                                },
                                                {
                                                    question: "الصوت لا يعمل داخل جلسة البث",
                                                    answer: "ConvC5"
                                                },
                                                {
                                                    question: "لا يمكنني الدخول على الجلسة",
                                                    answer: "ConvC6"
                                                },
                                            ]
                                            }, 
    
    
                                                    ConvC4 : {
                                            says: ["نأمل التواصل مع مدرب المقرر" , "هل أستطيع خدمتك خدمة أخرى؟"],
                                            reply: [
                                                {
                                                    question: "نعم",
                                                    answer: "mainConv"
                                                },
                                                {
                                                    question: "لا شكرا لك",
                                                    answer: "BYE"
                                                },
                                            ]
                                            }, 
    
    
                                                     ConvC5: {
                                            says: ["يجب التأكد من تفعيل المايكروفون من إعدادات المتصفح من خلال:" , "أعلى صفحة المتصفح انقر على علامة القفل بجانب الرابط في شريط العنوان." , "أختيار إعدادات المواقع الالكترونية" , "من قائمة الاذونات قم باختيار (سماح) للمايكروفون" , "هل لا زالت المشكلة مستمرة؟"],
                                            reply: [
                                                {
                                                    question: "نعم",
                                                    answer: "ConvC8"
                                                },
                                                {
                                                    question: "لا",
                                                    answer: "BYE"
                                                },
                                            ]
                                            }, 
                                                         ConvC6: {
                                            says: ["تأكد من أن متصفحك يدعم تشغيل جلسات الكولابريت" , "تأكد من تحديث نسخة المتصفح الى أخر نسخة" ,"تأكد من السماح بملفات الارتباط (الكوكيز) من إعدادات المتصفح" , "هل لا زالت المشكلة مستمرة"],
                                            reply: [
                                                {
                                                    question: "نعم",
                                                    answer: "ConvC8"
                                                },
                                                {
                                                    question: "لا",
                                                    answer: "BYE"
                                                },
                                            ]
                                            }, 
    
    
    
                                    ConvC8: {
                                        says: ["نأمل التواصل مع مدير المركز الفرعي للتدريب الالكتروني في الوحدة التدريبية" ,"<a href='http://elearning.edu.sa/support/' target='_blank'>Elearning.edu.sa/support</a>"],
                                         reply: [ ]
                                            }, 
          answer4 : {
    says: ["نأمل التواصل مع مشرف تقنية المعلومات والدعم الفني في الوحدة التدريبية." , "<a href='http://elearning.edu.sa/support/' target='_blank'>Elearning.edu.sa/support</a>" , "هل أستطيع تقديم أي خدمة أخرى؟"],
    reply: [
      {
        question: "نعم لدي مشكلة أخرى",
        answer: "mainConv"
      },
    {
        question: "لا ، شكراً لك",
        answer: "BYE"
      },
    ]
  }, // end conversation object
    
    
    
    
    
  
   BYE: {
    says: ["تشرفنا بخدمتك", "مع السلامة", "ساعدنا بتطوير الخدمة عبر  تقييمها من الرابط أدناه","<a href='https://forms.gle/3s1K4ZabC1gMPkhY7' target='_blank'>https://forms.gle/3s1K4ZabC1gMPkhY7</a>"],
    reply: []

  }
}

// CUSTOM STARTPOINT for conversation block defined as a
// second parameter in .talk() function:
chatWindow.talk(convo, "ConvT")

// that's it!
  
	hideChat(0);

	

$('#prime').click(function() {
  hideChat(1);
  toggleFab();
  
});


//Toggle chat and links
function toggleFab() {
  $('.prime').toggleClass('zmdi-comment-outline');
  $('.prime').toggleClass('zmdi-close');
  $('.prime').toggleClass('is-active');
  $('.prime').toggleClass('is-visible');
  $('#prime').toggleClass('is-float');
  $('.chat').toggleClass('is-visible');
  $('.fab').toggleClass('is-visible');
  
}

  $('#chat_first_screen').click(function(e) {
        hideChat(1);
  });

  $('#chat_second_screen').click(function(e) {
        hideChat(2);
  });

  $('#chat_third_screen').click(function(e) {
        hideChat(3);
  });

  $('#chat_fourth_screen').click(function(e) {
        hideChat(4);
  });

  $('#chat_fullscreen_loader').click(function(e) {
      $('.fullscreen').toggleClass('zmdi-window-maximize');
      $('.fullscreen').toggleClass('zmdi-window-restore');
      $('.chat').toggleClass('chat_fullscreen');
      $('.fab').toggleClass('is-hide');
      $('.header_img').toggleClass('change_img');
      $('.img_container').toggleClass('change_img');
      $('.chat_header').toggleClass('chat_header2');
      $('.fab_field').toggleClass('fab_field2');
      $('.chat_converse').toggleClass('chat_converse2');
      //$('#chat_converse').css('display', 'none');
     // $('#chat_body').css('display', 'none');
     // $('#chat_form').css('display', 'none');
     // $('.chat_login').css('display', 'none');
     // $('#chat_fullscreen').css('display', 'block');
  });

function hideChat(hide) {
    switch (hide) {
      case 0:
            $('#chat_converse').css('display', 'none');
            $('#chat_body').css('display', 'none');
            $('#chat_form').css('display', 'none');
            $('.chat_login').css('display', 'block');
            $('.chat_fullscreen_loader').css('display', 'none');
             $('#chat_fullscreen').css('display', 'none');
            break;
      case 1:
            $('#chat_converse').css('display', 'block');
            $('#chat_body').css('display', 'none');
            $('#chat_form').css('display', 'none');
            $('.chat_login').css('display', 'none');
            $('.chat_fullscreen_loader').css('display', 'block');
            break;
      case 2:
            $('#chat_converse').css('display', 'none');
            $('#chat_body').css('display', 'block');
            $('#chat_form').css('display', 'none');
            $('.chat_login').css('display', 'none');
            $('.chat_fullscreen_loader').css('display', 'block');
            break;
      case 3:
            $('#chat_converse').css('display', 'none');
            $('#chat_body').css('display', 'none');
            $('#chat_form').css('display', 'block');
            $('.chat_login').css('display', 'none');
            $('.chat_fullscreen_loader').css('display', 'block');
            break;
      case 4:
            $('#chat_converse').css('display', 'none');
            $('#chat_body').css('display', 'none');
            $('#chat_form').css('display', 'none');
            $('.chat_login').css('display', 'none');
            $('.chat_fullscreen_loader').css('display', 'block');
            $('#chat_fullscreen').css('display', 'block');
            break;
    }
}

});
