//  البيانات الثابتة - ضع موادك هنا
const subjects = [
  //  الفصل الأول
  {
    name: "GBS101",
    semester: "semester1", // هنا الفصل الاول
    progress: 0,           // نسبة التقدّم (0-100)
    notes: "",             // كيف رح تدرس المادة
    content: "",           // محتوى المادة
    exam: "",              // معلومات عن الامتحان
    channels: [],          // روابط قنوات الدراسة
    sources: []            // روابط مصادر خارجية
  },
  {
    name: "GBS103",
    semester: "semester1", // هنا الفصل الاول
    progress: 0,           // نسبة التقدّم (0-100)
    notes: "",             // كيف رح تدرس المادة
    content: "",           // محتوى المادة
    exam: "",              // معلومات عن الامتحان
    channels: [],          // روابط قنوات الدراسة
    sources: []            // روابط مصادر خارجية

  },
  {
    name: "GMA101",
    semester: "semester1", // هنا الفصل الاول
    progress: 0,           // نسبة التقدّم (0-100)
    notes: "",             // كيف رح تدرس المادة
    content: "",           // محتوى المادة
    exam: "",              // معلومات عن الامتحان
    channels: [],          // روابط قنوات الدراسة
    sources: []            // روابط مصادر خارجية

  },
  {
    name: "IPG101",
    semester: "semester1", // هنا الفصل الاول
    progress: 0,           // نسبة التقدّم (0-100)
    notes: "",             // كيف رح تدرس المادة
    content: "",           // محتوى المادة
    exam: "",              // معلومات عن الامتحان
    channels: [],          // روابط قنوات الدراسة
    sources: []            // روابط مصادر خارجية

  },
  {
    name: "IIS101",
    semester: "semester1", // هنا الفصل الاول
    progress: 0,           // نسبة التقدّم (0-100)
    notes: "",             // كيف رح تدرس المادة
    content: "",           // محتوى المادة
    exam: "",              // معلومات عن الامتحان
    channels: [],          // روابط قنوات الدراسة
    sources: []            // روابط مصادر خارجية

  },
  {
    name: "IWB101",
    semester: "semester1", // هنا الفصل الاول
    progress: 0,           // نسبة التقدّم (0-100)
    notes: "",             // كيف رح تدرس المادة
    content: "",           // محتوى المادة
    exam: "",              // معلومات عن الامتحان
    channels: [],          // روابط قنوات الدراسة
    sources: []            // روابط مصادر خارجية

  },
  {
    name: "ENG 1",
    semester: "semester1", // هنا الفصل الاول
    progress: 0,           // نسبة التقدّم (0-100)
    notes: "",             // كيف رح تدرس المادة
    content: "",           // محتوى المادة
    exam: "",              // معلومات عن الامتحان
    channels: [],          // روابط قنوات الدراسة
    sources: []            // روابط مصادر خارجية

  },

  //  الفصل الثاني
  {
    name: "IPG202",
    semester: "semester2", // ← هنا الفصل الثاني
    progress: 0,           // نسبة التقدّم (0-100)
    notes: "",             // كيف رح تدرس المادة
    content: "",           // محتوى المادة
    exam: "",              // معلومات عن الامتحان
    channels: [],          // روابط قنوات الدراسة
    sources: []            // روابط مصادر خارجية
  },
  {
    name: "INT101",
    semester: "semester2", // ← هنا الفصل الثاني
    progress: 0,          // نسبة التقدّم (0-100)
    notes: "على الرغم من ان الجزء النظري يمثل القسم الاكبر من محتوى المادة الا ان نجاح لا يتحقق الا من خلال الفهم لكل الجوانب النظرية والعلمية  لذلك :\n1_ محاضرات الدكتور جمال خليفة او د.عروة الخولي او د.حنان السمان فصول قديمة \n2_ ملفات المادة وحل اسئلة قنوات الاختبار", // كيف رح تدرس المادة
    content: "ستتعلم في هذا المقرر أساسيات شبكات الحاسوب، بما في ذلك أنواع الشبكات، ومكوناتها، والبروتوكولات الأساسية مثل (TCP/IP) التي تنظم عملية الاتصال ونقل البيانات بين الأجهزة.",
    exam: "يتكون الامتحان من 35 الى 40 سؤال وهو مزيج متنوع يشمل اسئلة عملية ونظرية مع غلبة واضحة للجانب النظري . \nيتسم الامتحان بكونه شاملا لجميل فصول المقرر ويصنف مستواه بين السهل والمتوسط نسبيا . يعد هذا فرصة حقيقية للطلاب حيث ان الدراسة المنظمة والتحضير المنتظم لكل محاور المادة يضمنان تحقيق معدلات مرتفعة", // معلومات عن الامتحان
    channels: [
      "https://t.me/INT101_TEST",
      "https://t.me/Neven_INT101",
      "https://t.me/INT101_new",
      "https://t.me/int101ahmads23",
      "https://t.me/INT101_Y_M"  // روابط قنوات الدراسة
    ],
    "sources": [
      "https://youtube.com/playlist?list=PL8s4OGp0649_e_Wbz5MlBgW5rBW-9hD0c&si=L3yWzpglFfMkponx"
    ]          // روابط مصادر خارجية
  },
  {
    name: "IOS101",
    semester: "semester2", // ← هنا الفصل الثاني
    progress: 0,           // نسبة التقدّم (0-100)
    notes: "حضور محاضرات الدكتور اسعد + دراسة سلايدات المادة \nحضور محاضرات الدكتورة سيرا فصول سابقة لفهم القسم العملي (خوارزميات التشغيل)", // كيف رح تدرس المادة
    content: "يستعرض المقرر المكونات والوظائف الأساسية لأنظمة التشغيل، مثل إدارة الذاكرة، والعمليات، ونظام الملفات. الهدف هو فهم كيفية إدارة نظام التشغيل لموارد الحاسوب ليسمح للبرامج بالعمل بكفاءة.",// محتوى المادة
    exam: "يتكون امتحان المادة من 30 الى 35 سؤال وهو امتحان شامل يغطي جميع فصول المقرر . وينقسم الى قسمين : القسم النظري والقسم العملي التطبيقي يتضمن مسائل بسيطة تتطلب تطبيق خوارزميات معينة ويتطلب تحقيق معدلات عالية في هذه المادة فهما عميقا للمفاهيم النظرية بالاضافة للقدرة على تطبيق المفاهيم العملية (خوارزميات التشغيل)", // معلومات عن الامتحان
    channels: [
      "https://t.me/IOS101TIC",
      "https://t.me/IOS_FCFS_SJF_Priorety_RR",
      "https://t.me/ios101ahmads23" // روابط قنوات الدراسة
    ],
    "sources": [
      "https://t.me/IOS_FCFS_SJF_Priorety_RR/7"  // روابط مصادر خارجية
    ]
  },
  {
    name: "GDE101",
    semester: "semester2", // ← هنا الفصل الثاني
    progress: 0,           // نسبة التقدّم (0-100)
    notes: "",             // كيف رح تدرس المادة
    content: "",           // محتوى المادة
    exam: "",              // معلومات عن الامتحان
    channels: [],          // روابط قنوات الدراسة
    sources: []            // روابط مصادر خارجية
  },
  {
    name: "IIS201",
    semester: "semester2", // ← هنا الفصل الثاني
    progress: 0,           // نسبة التقدّم (0-100)
    notes: "",             // كيف رح تدرس المادة
    content: "",           // محتوى المادة
    exam: "",              // معلومات عن الامتحان
    channels: [],          // روابط قنوات الدراسة
    sources: []            // روابط مصادر خارجية
  },
  {
    name: "ENG 2",
    semester: "semester2", // ← هنا الفصل الثاني
    progress: 0,           // نسبة التقدّم (0-100)
    notes: "",             // كيف رح تدرس المادة
    content: "",           // محتوى المادة
    exam: "",              // معلومات عن الامتحان
    channels: [],          // روابط قنوات الدراسة
    sources: []            // روابط مصادر خارجية
  },

  //  الفصل الثالث
  {
    name: "GBS102",
    semester: "semester3", // هنا الفصل الثالث
    progress: 0,           // نسبة التقدّم (0-100)
    notes: "",             // كيف رح تدرس المادة
    content: "",           // محتوى المادة
    exam: "",              // معلومات عن الامتحان
    channels: [],          // روابط قنوات الدراسة
    sources: []            // روابط مصادر خارجية
  },
  {
    name: "IWB201",
    semester: "semester3", // هنا الفصل الثالث
    progress: 0,           // نسبة التقدّم (0-100)
    notes: "",             // كيف رح تدرس المادة
    content: "",           // محتوى المادة
    exam: "",              // معلومات عن الامتحان
    channels: [],          // روابط قنوات الدراسة
    sources: []            // روابط مصادر خارجية

  },
  {
    "name": "IOS201",
    semester: "semester3", // هنا الفصل الثالث
    progress: 0,           // نسبة التقدّم (0-100)
    notes: "مقرر المادة مع محاضرات الدكتورة حنان فصول سابقة او الدكتورة الفت بركات + ماضرة الشابتر 5 (RAID) + ملخص المادة + حل اسئلة اختبار", // كيف رح تدرس المادة
    content: "يتناول المقرر أنظمة التشغيل المصممة لإدارة موارد الشبكة والخوادم. ستتعلم كيفية إعداد الخدمات الشبكية، إدارة المستخدمين والصلاحيات، وتأمين البيئات الشبكية.",  // محتوى المادة
    exam: "يكون امتحان مادة نظم التشغيل الشبكية بشكل رئيسي نظري مع امكانية ورود سؤال او سؤالين عمليين لقياس الفهم التطبيقي للمفاهيم الاساسية . يتكون الامتحان عادة من 25 الى 40 سؤال متنوعا يغطي مختلف محاور المقرر المتعلقة بانظمة التشغيل الشبكية والمخدمات ومراكز المعطيات وامن الشبكات",  // معلومات عن الامتحان
    channels: [
      "https://t.me/ios201F23TIC",
      "https://t.me/ios2011b",
      "https://t.me/ios201_204_AJ_F23" // روابط قنوات الدراسة
    ],
    "sources": []            // روابط مصادر خارجية

  },
  {
    name: "IPG201",
    semester: "semester3", // هنا الفصل الثالث
    progress: 0,           // نسبة التقدّم (0-100)
    notes: "محاضرات الدكتورة هويدا او محمد الخباز و دراسة الملفات وحل اسئلة اختبار", // كيف رح تدرس المادة
    content: "يركز المقرر على تطوير تطبيقات ذات واجهات مستخدم رسومية (GUI). ستتعلم كيفية تصميم النوافذ والأزرار والقوائم، وبرمجة استجابة التطبيق لتفاعلات المستخدم مثل نقرات الفأرة أو إدخال النص.", // محتوى المادة
    exam: "يعد امتحان مادة البرمجة المعتمدة على الاحداث متوسط الصعوبة ويحتاج ال تركيز ودقة في الاجابة . اذ يجمع بين الاسئلة النظرية والعلمية التي تقيس فهم الطالب للمفاهيم الاساسية والتطبيقات البرمجية . ويتكون الامتحان عادة من 25 الى 30 سؤال وقد يزيد عددها في بعض الدورات الامحانية", // معلومات عن الامتحان
    channels: [
      "https://t.me/Akram_IPG201_IPG203",
      "https://t.me/IPG201_TIC_IPG203_BAIT_MXM" // روابط قنوات الدراسة
    ],
    sources: [
      "https://youtube.com/playlist?list=PLHIfW1KZRIfnbNoGB0NdoRdllq9fdo6uM&si=ICq_-MMX2WuXwrXp"
    ]            // روابط مصادر خارجية

  },
  {
    name: "IPG203",
    semester: "semester3", // هنا الفصل الثالث
    progress: 0,           // نسبة التقدّم (0-100)
    notes: "حضور محاضرات الدكتور معاذ الخباز وهويدا الداوود والدكتور جهاد العيسى + ملفات المقرر \n+ حل اسئلة قنوات تلغرام", // كيف رح تدرس المادة
    content: "يقدم هذا المقرر منهجية البرمجة كائنية التوجه (OOP)، وهي طريقة متقدمة لتصميم البرمجيات تقوم على محاكاة الكائنات الواقعية. ستتعلم مفاهيم مثل الأصناف، الكائنات، والوراثة لبناء برامج مرنة وقابلة للتوسعة.", // محتوى المادة
    exam: "الامتحان متوسط الصعوبة ويتنوع بين الاسئلة النظرية والعملية التي تقيس فهم الطالب للمفاهيم الاساسية وتطبيقها C# ويتكون الامتحان من حوالي 25 سؤالا تغطي الجوانب المفاهيمية والبرمجية للمقرر", // معلومات عن الامتحان
    channels: [
      "https://t.me/IPG201_TIC_IPG203_BAIT_MXM",
      "https://t.me/TICIPG203" // روابط قنوات الدراسة
    ],
    "sources": [
      "https://t.me/IPG201_TIC_IPG203_BAIT_MXM/95",
      "https://youtube.com/playlist?list=PLX1bW_GeBRhAfq0EsDHH4YemBAd6G-H75&si=so98sUptLHnUbS2-",
      "https://youtube.com/playlist?list=PL4K-VuBVuyoXvxPD48LjjBEUGxWxHRHQO&si=9TnUv7YYve_7jsSa" // روابط مصادر خارجية
    ]

  },
  {
    name: "IIS202",
    semester: "semester3", // هنا الفصل الثالث
    progress: 0,           // نسبة التقدّم (0-100)
    notes: "محاضرات المادة : د.جمال محمود او د.محمد الدسوقي + ملفات المقرر",
    content: "يهدف المقرر إلى تعميق معرفتك بلغة SQL، حيث ستتعلم كيفية كتابة استعلامات معقدة، واستخدام الوظائف المتقدمة، والإجراءات المخزنة لمعالجة البيانات وتحليلها بكفاءة عالية.",
    exam: "امتحان هذه المادة يتكون من 20 لل 25 سؤال مؤتمت ويصنف بمستوى صعوبة متوسط . الامتحان لا يتطلب كتابة اكواد بل يركز بشكل اساسي على الجانب التحليلي حيث سيعرض لك اسئلة تحتوي على استعلامات SQL او مقاطع برمجية جاهزة ويتطلب منك الاجابة على سؤال يتعلق بها مثل تحليل نتيجتها او تحديد وظيفتها او اكتشاف الخطأ فيها",
    channels: [
      "https://t.me/Akram_IIS202_IIS303",
      "https://t.me/IIS202_TIC_IIS303_BAIT_MXM",
      "https://t.me/TIC_iis202_S23"
    ],
    "sources": [
      "https://youtube.com/playlist?list=PL1DUmTEdeA6J6oDLTveTt4Z7E5qEfFluE&si=Nuc8Na238E_O2Qtb"
    ]

  },
  {
    name: "ENG 3",
    semester: "semester3", // هنا الفصل الثالث
    progress: 0,           // نسبة التقدّم (0-100)
    notes: "",             // كيف رح تدرس المادة
    content: "",           // محتوى المادة
    exam: "",              // معلومات عن الامتحان
    channels: [],          // روابط قنوات الدراسة
    sources: []            // روابط مصادر خارجية

  },
  //  الفصل الرابع 
  {
    name: "IOS202",
    semester: "semester4", // هنا الفصل الثالث
    progress: 0,           // نسبة التقدّم (0-100)
    notes: "محاضرات المادة : د.الياس حبي \n او مقرر المادة او ملخص الزميلة الاء عرابي\nاو حل اسئلة قنوات الاختبار",
    content: "يركز هذا المقرر على إدارة بيئات العمل والخوادم التي تعمل بنظام تشغيل Windows Server. ستكتسب مهارات عملية في إدارة الشبكات، المستخدمين، والخدمات الأساسية في بيئة ويندوز.",
    exam: "يتكون من 25 سؤال نظري بالكامل وهو يعتمد بشكل اساسي على الفهم العميق وليس فقط الحفظ . ويصنف مستواه بين السهل والمتوسط . مع اشارة الى ان بعض الاسئلة الدورات السابقة قد تتكرر ولكن ليس شرطا ان تاتي بالحرفية",
    channels: [
      "https://t.me/IOS202test"
    ],
    "sources": [
      "https://youtube.com/playlist?list=PLDxVq3TlR9y2sMXaL_yLp-r6pUpevgC-w&si=jDvNV4jwmjwLw6n_" // روابط مصادر خارجية
    ]
  },
  {
    name: "IOS203",
    semester: "semester4", // ← هنا الفصل الرابع
    progress: 0,           // نسبة التقدّم (0-100)
    notes: "محاضرات الدكتور رداد الكنج او الدكتور نعمان فلوح او مقرر المادة",
    content: "ستتعلم في هذا المقرر أساسيات إدارة أنظمة التشغيل المستندة إلى Linux، بما في ذلك التعامل مع سطر الأوامر، إدارة الملفات والصلاحيات، وتثبيت البرامج، وهي مهارات أساسية للعمل مع الخوادم.",
    exam: "يتكون من 35 الى 40 سؤال وهو يعتمد بشكل اساسي على الفهم وليس الحفظ فقط . ويصنف مستواه بانه متوسط مع الاشارة الى ان بعض الاسئلة الدورات السابقة قد تتكرر ولكن ليس شرطا ان تأتي بالحرفية",
    channels: [
      "https://t.me/IOS203_AM",
      "https://t.me/IOS203test",
      "https://t.me/ios203_AA_S24"
    ],
    "sources": [
      "https://youtube.com/playlist?list=PLT98CRl2KxKHjHLIHrmmi5FmBGIZ8cNJE&si=HhaXcRMp9R7II5m1"// روابط مصادر خارجية
    ]
  },
  {
    name: "IIS303",
    semester: "semester4", // ← هنا الفصل الرابع
    progress: 0,           // نسبة التقدّم (0-100)
    notes: "محاضرات الدكتور فادي بشكل اساسي و مقرر المادة الجديد و قنوات الاختبار", // كيف رح تدرس المادة
    content: "يوفر هذا المقرر المهارات اللازمة لإدارة وصيانة أنظمة قواعد بيانات Microsoft SQL Server. ستغطي موضوعات مثل التثبيت، النسخ الاحتياطي والاستعادة، مراقبة الأداء، وتطبيق سياسات الأمان.", // محتوى المادة
    exam: "نظرا لان هذا الامتحان الاول الذي يجرى تحت اشراف المنسق الجديد لذلكح لا توجد اي معلومات او نماذج سابقة", // معلومات عن الامتحان
    channels: [
      "https://t.me/IIS303_New",
      "https://t.me/iis303_404_AJ_S24" // روابط قنوات الدراسة
    ],
    "sources": []
  },
  {
    name: "IIS203",
    semester: "semester4", // ← هنا الفصل الرابع
    progress: 0,           // نسبة التقدّم (0-100)
    notes: "محاضرات الدكتور جمال بطيخ و اسئلة الشابترات وقنوات الاختبار", // كيف رح تدرس المادة
    content: "يركز المقرر على إدارة أنظمة قواعد بيانات Oracle، التي تستخدم على نطاق واسع في المؤسسات الكبرى. ستتعلم بنيتها المعمارية، وأدوات إدارتها، وكيفية تنفيذ مهام الصيانة والأمان الأساسية.", // محتوى المادة
    exam: "يتألف الامتحان من 20 ل 25 سؤال نظريا وتتميز معظم الاسئلة بكونها مأخوذة بشكل حرفي من الشابترات بالاضافة الى ذلك يتضمن الامتحان قسم مقالي يتكون من 3 ل 4 اسئلة ويخصص لهذا القسم 20 او 21 علامة من اجمالي الدرجة", // معلومات عن الامتحان
    channels: [
      "https://t.me/iis203TestCH",
      "https://t.me/IIS203_R_S" // روابط قنوات الدراسة
    ],
    sources: [
      "https://youtube.com/playlist?list=PL1KA7P5hJ-obwTDetMyuMNUzkwTm-M6tG&si=1HrT8NxTXZpFF5IJ"  // روابط مصادر خارجية
    ]
  },
  {
    name: "IPG204",
    semester: "semester4", // ← هنا الفصل الرابع
    progress: 0,           // نسبة التقدّم (0-100)
    notes: "محاضرات الدكتور محمد مازن مصطفى و مقرر المادة وملخص امل عثمان و حل اسئلة الاختبار", // كيف رح تدرس المادة
    content: "يقدم المقرر المفاهيم الأساسية لتطوير التطبيقات على الهواتف المحمولة. ستتعرف على خصائص بيئات الموبايل المختلفة، ودورة حياة التطبيق، وكيفية تصميم واجهات مستخدم مناسبة للشاشات الصغيرة.", // محتوى المادة
    exam: "يتألف الامتحان من 35 الى 40 وتتنوع طبيعة الاسئلة لتشمل مزيجا من الاسئلة النظرية وسيناريوهات تطبيقية بالاضافة الى بعض الاسئلة المتعلقة بالسكريبتات . يعتمد مستوى صعوبة الامتحان بشكل مباشر على جودة الدراسة : الطالب الذي حضر بشكل جيد وكاف سيجد مستواه يتراوح بين السهل والمتوسط . اما في حال عدم الدراسة بشكل كاف . فسيكون المستوى متوسط يميل للصعب",
    channels: [
      "https://t.me/Akram_IPG204",
      "https://t.me/IPG204_IWB303_AA_S24" // روابط قنوات الدراسة
    ],
    sources: [
      "https://youtube.com/playlist?list=PLCInYL3l2AajYlZGzU_LVrHdoouf8W6ZN&si=rN0HhY54jyRFYgVu"  // روابط مصادر خارجية
    ]
  },
  {
    name: "IPI201",
    semester: "semester4", // ← هنا الفصل الرابع
    progress: 100,           // نسبة التقدّم (0-100)
    notes: "لا يوجد", // كيف رح تدرس المادة
    content: "في هذا المقرر التطبيقي، ستقوم بتوظيف جميع المهارات والمعارف التي اكتسبتها خلال دراستك لتطوير مشروع برمجي متكامل. ستمر بكافة مراحل تطوير البرمجيات، بدءًا من التحليل ووضع المتطلبات، وصولًا إلى التصميم والتنفيذ والاختبار، مما يمنحك خبرة عملية تحاكي بيئة العمل الحقيقية سواء قمت بتصميم موقع وب او تطبيق موبايل او تطبيق ديسكتوب....الخ", // محتوى المادة
    exam: "يوجد مناقشة مشروع تخرج ",
    channels: [],
    sources: []
  },
];

// عناصر القوائم الخاصة بالفصول
const semester1List = document.getElementById("semester1List");
const semester2List = document.getElementById("semester2List");
const semester3List = document.getElementById("semester3List");
const semester4List = document.getElementById("semester4List");

const modalOverlay = document.createElement("div");
modalOverlay.className = "subject-modal-overlay hidden";
modalOverlay.innerHTML = `
  <div class="subject-modal" role="dialog" aria-modal="true" aria-labelledby="subjectModalTitle">
    <button class="subject-modal-close" type="button" aria-label="Close">x</button>
    <h3 id="subjectModalTitle"></h3>
    <div class="subject-modal-body"></div>
  </div>
`;
document.body.appendChild(modalOverlay);

const modalTitle = modalOverlay.querySelector("#subjectModalTitle");
const modalBody = modalOverlay.querySelector(".subject-modal-body");
const modalCloseBtn = modalOverlay.querySelector(".subject-modal-close");

function createLinksBlock(title, links) {
  if (!links || !links.length) return "";
  const items = links
    .map(
      (link) =>
        `<li><a href="${link}" target="_blank" rel="noopener noreferrer">${link}</a></li>`
    )
    .join("");

  return `<div class="links-block"><strong>${title}</strong><ul>${items}</ul></div>`;
}

function openSubjectModal(item) {
  modalTitle.textContent = item.name || "Subject";
  modalBody.innerHTML = `
    <div class="item-details">
      <div><strong>Study method:</strong> ${item.notes || ""}</div>
      <div><strong>Content:</strong> ${item.content || ""}</div>
      <div><strong>Exam:</strong> ${item.exam || ""}</div>
      ${createLinksBlock("Channels:", item.channels)}
      ${createLinksBlock("Sources:", item.sources)}
    </div>
  `;

  modalOverlay.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function closeSubjectModal() {
  modalOverlay.classList.add("hidden");
  document.body.classList.remove("modal-open");
}

modalCloseBtn.addEventListener("click", closeSubjectModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeSubjectModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modalOverlay.classList.contains("hidden")) {
    closeSubjectModal();
  }
});

function createItemCard(item) {
  const card = document.createElement("div");
  card.className = "item";

  const header = document.createElement("div");
  header.className = "item-header clickable";

  const title = document.createElement("strong");
  title.textContent = item.name || "Subject";

  const badge = document.createElement("span");
  badge.className = "pill";
  badge.textContent = item.semester;

  const arrow = document.createElement("span");
  arrow.className = "arrow";
  arrow.textContent = "Open";

  header.appendChild(title);
  header.appendChild(badge);
  header.appendChild(arrow);

  header.addEventListener("click", () => openSubjectModal(item));

  card.appendChild(header);
  return card;
}

function render() {
  semester1List.innerHTML = "";
  semester2List.innerHTML = "";
  semester3List.innerHTML = "";
  semester4List.innerHTML = "";

  subjects.forEach((item) => {
    const card = createItemCard(item);
    if (item.semester === "semester1") semester1List.appendChild(card);
    if (item.semester === "semester2") semester2List.appendChild(card);
    if (item.semester === "semester3") semester3List.appendChild(card);
    if (item.semester === "semester4") semester4List.appendChild(card);
  });
}

render();
