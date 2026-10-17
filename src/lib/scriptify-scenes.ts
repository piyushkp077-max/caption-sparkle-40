export type ScriptScene = { category: "funny" | "puneet" | "love" | "friendzone" | "daily"; title: string; cast: "solo" | "group"; hinglish: [string, string, string]; hindi: [string, string, string]; arabic: [string, string, string] };

// Three spoken lines per scene; translated subjects change the actual setup, not filler.
export const scriptifyScenes: ScriptScene[] = [
  {
    "category": "funny",
    "title": "Family startup · Mummy",
    "cast": "solo",
    "hinglish": [
      "Mummy bole reels waste hain!",
      "Khud channel khola, camera mujhe pakdaya.",
      "Unka business, meri unpaid internship!"
    ],
    "hindi": [
      "मम्मी बोले रील्स बेकार हैं!",
      "खुद चैनल खोला, कैमरा मुझे पकड़ाया।",
      "उनका कारोबार, मेरी मुफ्त नौकरी!"
    ],
    "arabic": [
      "أمي يقول إن المقاطع مضيعة!",
      "فتح قناة وطلب مني التصوير.",
      "مشروعه مربح، وتدريبي بلا راتب!"
    ]
  },
  {
    "category": "funny",
    "title": "Family startup · Papa",
    "cast": "solo",
    "hinglish": [
      "Papa bole reels waste hain!",
      "Khud channel khola, camera mujhe pakdaya.",
      "Unka business, meri unpaid internship!"
    ],
    "hindi": [
      "पापा बोले रील्स बेकार हैं!",
      "खुद चैनल खोला, कैमरा मुझे पकड़ाया।",
      "उनका कारोबार, मेरी मुफ्त नौकरी!"
    ],
    "arabic": [
      "أبي يقول إن المقاطع مضيعة!",
      "فتح قناة وطلب مني التصوير.",
      "مشروعه مربح، وتدريبي بلا راتب!"
    ]
  },
  {
    "category": "funny",
    "title": "Family startup · Didi",
    "cast": "solo",
    "hinglish": [
      "Didi bole reels waste hain!",
      "Khud channel khola, camera mujhe pakdaya.",
      "Unka business, meri unpaid internship!"
    ],
    "hindi": [
      "दीदी बोले रील्स बेकार हैं!",
      "खुद चैनल खोला, कैमरा मुझे पकड़ाया।",
      "उनका कारोबार, मेरी मुफ्त नौकरी!"
    ],
    "arabic": [
      "أختي يقول إن المقاطع مضيعة!",
      "فتح قناة وطلب مني التصوير.",
      "مشروعه مربح، وتدريبي بلا راتب!"
    ]
  },
  {
    "category": "funny",
    "title": "Family startup · Bhai",
    "cast": "solo",
    "hinglish": [
      "Bhai bole reels waste hain!",
      "Khud channel khola, camera mujhe pakdaya.",
      "Unka business, meri unpaid internship!"
    ],
    "hindi": [
      "भाई बोले रील्स बेकार हैं!",
      "खुद चैनल खोला, कैमरा मुझे पकड़ाया।",
      "उनका कारोबार, मेरी मुफ्त नौकरी!"
    ],
    "arabic": [
      "أخي يقول إن المقاطع مضيعة!",
      "فتح قناة وطلب مني التصوير.",
      "مشروعه مربح، وتدريبي بلا راتب!"
    ]
  },
  {
    "category": "funny",
    "title": "Checkout shock · Shirt",
    "cast": "solo",
    "hinglish": [
      "Shirt sirf ninety-nine rupees!",
      "Fees jodke bill five hundred.",
      "Product nahi, uski baraat bula raha hoon!"
    ],
    "hindi": [
      "शर्ट सिर्फ निन्यानवे रुपये!",
      "फीस जोड़कर बिल पाँच सौ।",
      "सामान नहीं, उसकी बारात बुला रहा हूँ!"
    ],
    "arabic": [
      "قميص بتسعة وتسعين فقط!",
      "مع الرسوم صار الحساب خمسمئة.",
      "أشتري منتجاً أم أمول حفل زفافه؟"
    ]
  },
  {
    "category": "funny",
    "title": "Checkout shock · Cap",
    "cast": "solo",
    "hinglish": [
      "Cap sirf ninety-nine rupees!",
      "Fees jodke bill five hundred.",
      "Product nahi, uski baraat bula raha hoon!"
    ],
    "hindi": [
      "टोपी सिर्फ निन्यानवे रुपये!",
      "फीस जोड़कर बिल पाँच सौ।",
      "सामान नहीं, उसकी बारात बुला रहा हूँ!"
    ],
    "arabic": [
      "قبعة بتسعة وتسعين فقط!",
      "مع الرسوم صار الحساب خمسمئة.",
      "أشتري منتجاً أم أمول حفل زفافه؟"
    ]
  },
  {
    "category": "funny",
    "title": "Checkout shock · Mug",
    "cast": "solo",
    "hinglish": [
      "Mug sirf ninety-nine rupees!",
      "Fees jodke bill five hundred.",
      "Product nahi, uski baraat bula raha hoon!"
    ],
    "hindi": [
      "मग सिर्फ निन्यानवे रुपये!",
      "फीस जोड़कर बिल पाँच सौ।",
      "सामान नहीं, उसकी बारात बुला रहा हूँ!"
    ],
    "arabic": [
      "كوب بتسعة وتسعين فقط!",
      "مع الرسوم صار الحساب خمسمئة.",
      "أشتري منتجاً أم أمول حفل زفافه؟"
    ]
  },
  {
    "category": "funny",
    "title": "Checkout shock · Phone cover",
    "cast": "solo",
    "hinglish": [
      "Phone cover sirf ninety-nine rupees!",
      "Fees jodke bill five hundred.",
      "Product nahi, uski baraat bula raha hoon!"
    ],
    "hindi": [
      "फोन कवर सिर्फ निन्यानवे रुपये!",
      "फीस जोड़कर बिल पाँच सौ।",
      "सामान नहीं, उसकी बारात बुला रहा हूँ!"
    ],
    "arabic": [
      "غطاء هاتف بتسعة وتسعين فقط!",
      "مع الرسوم صار الحساب خمسمئة.",
      "أشتري منتجاً أم أمول حفل زفافه؟"
    ]
  },
  {
    "category": "funny",
    "title": "Subscription transformation · Gym",
    "cast": "solo",
    "hinglish": [
      "Gym ka annual plan liya!",
      "Payment full, attendance zero.",
      "Transformation sirf wallet ka hua!"
    ],
    "hindi": [
      "जिम का सालाना प्लान लिया!",
      "भुगतान पूरा, हाज़िरी शून्य।",
      "बदलाव सिर्फ बटुए का हुआ!"
    ],
    "arabic": [
      "اشتريت اشتراك النادي السنوي!",
      "الدفع كامل والحضور صفر.",
      "التحول الوحيد حصل لمحفظتي!"
    ]
  },
  {
    "category": "funny",
    "title": "Subscription transformation · Yoga",
    "cast": "solo",
    "hinglish": [
      "Yoga ka annual plan liya!",
      "Payment full, attendance zero.",
      "Transformation sirf wallet ka hua!"
    ],
    "hindi": [
      "योग का सालाना प्लान लिया!",
      "भुगतान पूरा, हाज़िरी शून्य।",
      "बदलाव सिर्फ बटुए का हुआ!"
    ],
    "arabic": [
      "اشتريت اشتراك اليوغا السنوي!",
      "الدفع كامل والحضور صفر.",
      "التحول الوحيد حصل لمحفظتي!"
    ]
  },
  {
    "category": "funny",
    "title": "Subscription transformation · Swimming",
    "cast": "solo",
    "hinglish": [
      "Swimming ka annual plan liya!",
      "Payment full, attendance zero.",
      "Transformation sirf wallet ka hua!"
    ],
    "hindi": [
      "तैराकी का सालाना प्लान लिया!",
      "भुगतान पूरा, हाज़िरी शून्य।",
      "बदलाव सिर्फ बटुए का हुआ!"
    ],
    "arabic": [
      "اشتريت اشتراك السباحة السنوي!",
      "الدفع كامل والحضور صفر.",
      "التحول الوحيد حصل لمحفظتي!"
    ]
  },
  {
    "category": "funny",
    "title": "Subscription transformation · Dance",
    "cast": "solo",
    "hinglish": [
      "Dance ka annual plan liya!",
      "Payment full, attendance zero.",
      "Transformation sirf wallet ka hua!"
    ],
    "hindi": [
      "डांस का सालाना प्लान लिया!",
      "भुगतान पूरा, हाज़िरी शून्य।",
      "बदलाव सिर्फ बटुए का हुआ!"
    ],
    "arabic": [
      "اشتريت اشتراك الرقص السنوي!",
      "الدفع كامل والحضور صفر.",
      "التحول الوحيد حصل لمحفظتي!"
    ]
  },
  {
    "category": "funny",
    "title": "Artificial confidence · Assignment",
    "cast": "solo",
    "hinglish": [
      "Assignment AI se banwaya!",
      "Sir bole explain karo; main loading.",
      "Knowledge free trial pe tha!"
    ],
    "hindi": [
      "असाइनमेंट एआई से बनवाया!",
      "सर बोले समझाओ; मैं अटक गया।",
      "ज्ञान मुफ्त ट्रायल पर था!"
    ],
    "arabic": [
      "صنعت الواجب بالذكاء الاصطناعي!",
      "طلب الأستاذ الشرح فتجمدت.",
      "معرفتي كانت نسخة تجريبية!"
    ]
  },
  {
    "category": "funny",
    "title": "Artificial confidence · Presentation",
    "cast": "solo",
    "hinglish": [
      "Presentation AI se banwaya!",
      "Sir bole explain karo; main loading.",
      "Knowledge free trial pe tha!"
    ],
    "hindi": [
      "प्रेजेंटेशन एआई से बनवाया!",
      "सर बोले समझाओ; मैं अटक गया।",
      "ज्ञान मुफ्त ट्रायल पर था!"
    ],
    "arabic": [
      "صنعت العرض بالذكاء الاصطناعي!",
      "طلب الأستاذ الشرح فتجمدت.",
      "معرفتي كانت نسخة تجريبية!"
    ]
  },
  {
    "category": "funny",
    "title": "Artificial confidence · Project report",
    "cast": "solo",
    "hinglish": [
      "Project report AI se banwaya!",
      "Sir bole explain karo; main loading.",
      "Knowledge free trial pe tha!"
    ],
    "hindi": [
      "प्रोजेक्ट रिपोर्ट एआई से बनवाया!",
      "सर बोले समझाओ; मैं अटक गया।",
      "ज्ञान मुफ्त ट्रायल पर था!"
    ],
    "arabic": [
      "صنعت تقرير المشروع بالذكاء الاصطناعي!",
      "طلب الأستاذ الشرح فتجمدت.",
      "معرفتي كانت نسخة تجريبية!"
    ]
  },
  {
    "category": "funny",
    "title": "Artificial confidence · Essay",
    "cast": "solo",
    "hinglish": [
      "Essay AI se banwaya!",
      "Sir bole explain karo; main loading.",
      "Knowledge free trial pe tha!"
    ],
    "hindi": [
      "निबंध एआई से बनवाया!",
      "सर बोले समझाओ; मैं अटक गया।",
      "ज्ञान मुफ्त ट्रायल पर था!"
    ],
    "arabic": [
      "صنعت المقال بالذكاء الاصطناعي!",
      "طلب الأستاذ الشرح فتجمدت.",
      "معرفتي كانت نسخة تجريبية!"
    ]
  },
  {
    "category": "funny",
    "title": "VIP arrival · Party",
    "cast": "solo",
    "hinglish": [
      "Party pe late pahucha!",
      "Entry dramatic, sab ja chuke the.",
      "VIP nahi, closing staff nikla!"
    ],
    "hindi": [
      "पार्टी में देर से पहुँचा!",
      "एंट्री शानदार, सब जा चुके थे।",
      "वीआईपी नहीं, सफाई कर्मचारी निकला!"
    ],
    "arabic": [
      "وصلت متأخراً إلى الحفلة!",
      "دخولي درامي والجميع غادر.",
      "لست ضيفاً مهماً، أنا فريق الإغلاق!"
    ]
  },
  {
    "category": "funny",
    "title": "VIP arrival · Reunion",
    "cast": "solo",
    "hinglish": [
      "Reunion pe late pahucha!",
      "Entry dramatic, sab ja chuke the.",
      "VIP nahi, closing staff nikla!"
    ],
    "hindi": [
      "मिलन में देर से पहुँचा!",
      "एंट्री शानदार, सब जा चुके थे।",
      "वीआईपी नहीं, सफाई कर्मचारी निकला!"
    ],
    "arabic": [
      "وصلت متأخراً إلى لقاء الأصدقاء!",
      "دخولي درامي والجميع غادر.",
      "لست ضيفاً مهماً، أنا فريق الإغلاق!"
    ]
  },
  {
    "category": "funny",
    "title": "VIP arrival · Wedding",
    "cast": "solo",
    "hinglish": [
      "Wedding pe late pahucha!",
      "Entry dramatic, sab ja chuke the.",
      "VIP nahi, closing staff nikla!"
    ],
    "hindi": [
      "शादी में देर से पहुँचा!",
      "एंट्री शानदार, सब जा चुके थे।",
      "वीआईपी नहीं, सफाई कर्मचारी निकला!"
    ],
    "arabic": [
      "وصلت متأخراً إلى الزفاف!",
      "دخولي درامي والجميع غادر.",
      "لست ضيفاً مهماً، أنا فريق الإغلاق!"
    ]
  },
  {
    "category": "funny",
    "title": "VIP arrival · College fest",
    "cast": "solo",
    "hinglish": [
      "College fest pe late pahucha!",
      "Entry dramatic, sab ja chuke the.",
      "VIP nahi, closing staff nikla!"
    ],
    "hindi": [
      "कॉलेज उत्सव में देर से पहुँचा!",
      "एंट्री शानदार, सब जा चुके थे।",
      "वीआईपी नहीं, सफाई कर्मचारी निकला!"
    ],
    "arabic": [
      "وصلت متأخراً إلى مهرجان الجامعة!",
      "دخولي درامي والجميع غادر.",
      "لست ضيفاً مهماً، أنا فريق الإغلاق!"
    ]
  },
  {
    "category": "funny",
    "title": "Luxury upgrade · Water bottle",
    "cast": "solo",
    "hinglish": [
      "Water bottle premium liya!",
      "Features same, bas naam fancy.",
      "Upgrade product ka nahi, mere dhokhe ka!"
    ],
    "hindi": [
      "पानी की बोतल प्रीमियम लिया!",
      "काम वही, बस नाम शानदार।",
      "सामान नहीं, मेरा धोखा अपग्रेड हुआ!"
    ],
    "arabic": [
      "اشتريت زجاجة الماء الفاخر!",
      "نفس الوظيفة، اسم أفخم فقط.",
      "الترقية كانت لمستوى خداعي!"
    ]
  },
  {
    "category": "funny",
    "title": "Luxury upgrade · Notebook",
    "cast": "solo",
    "hinglish": [
      "Notebook premium liya!",
      "Features same, bas naam fancy.",
      "Upgrade product ka nahi, mere dhokhe ka!"
    ],
    "hindi": [
      "नोटबुक प्रीमियम लिया!",
      "काम वही, बस नाम शानदार।",
      "सामान नहीं, मेरा धोखा अपग्रेड हुआ!"
    ],
    "arabic": [
      "اشتريت الدفتر الفاخر!",
      "نفس الوظيفة، اسم أفخم فقط.",
      "الترقية كانت لمستوى خداعي!"
    ]
  },
  {
    "category": "funny",
    "title": "Luxury upgrade · Coffee",
    "cast": "solo",
    "hinglish": [
      "Coffee premium liya!",
      "Features same, bas naam fancy.",
      "Upgrade product ka nahi, mere dhokhe ka!"
    ],
    "hindi": [
      "कॉफी प्रीमियम लिया!",
      "काम वही, बस नाम शानदार।",
      "सामान नहीं, मेरा धोखा अपग्रेड हुआ!"
    ],
    "arabic": [
      "اشتريت القهوة الفاخر!",
      "نفس الوظيفة، اسم أفخم فقط.",
      "الترقية كانت لمستوى خداعي!"
    ]
  },
  {
    "category": "funny",
    "title": "Luxury upgrade · Soap",
    "cast": "solo",
    "hinglish": [
      "Soap premium liya!",
      "Features same, bas naam fancy.",
      "Upgrade product ka nahi, mere dhokhe ka!"
    ],
    "hindi": [
      "साबुन प्रीमियम लिया!",
      "काम वही, बस नाम शानदार।",
      "सामान नहीं, मेरा धोखा अपग्रेड हुआ!"
    ],
    "arabic": [
      "اشتريت الصابون الفاخر!",
      "نفس الوظيفة، اسم أفخم فقط.",
      "الترقية كانت لمستوى خداعي!"
    ]
  },
  {
    "category": "funny",
    "title": "Production attendance · Dance",
    "cast": "group",
    "hinglish": [
      "A: Dance reel banate hain!",
      "B: Thirty takes, sirf five views?",
      "A: Teen mere. B: Do mere. Attendance full!"
    ],
    "hindi": [
      "एक: डांस रील बनाएँ!",
      "दो: तीस टेक, सिर्फ पाँच व्यूज़?",
      "एक: तीन मेरे। दो: दो मेरे। हाज़िरी पूरी!"
    ],
    "arabic": [
      "أ: نصور مقطع رقص!",
      "ب: ثلاثون محاولة وخمس مشاهدات فقط؟",
      "أ: ثلاث مني. ب: اثنتان مني. الحضور كامل!"
    ]
  },
  {
    "category": "funny",
    "title": "Production attendance · Fitness",
    "cast": "group",
    "hinglish": [
      "A: Fitness reel banate hain!",
      "B: Thirty takes, sirf five views?",
      "A: Teen mere. B: Do mere. Attendance full!"
    ],
    "hindi": [
      "एक: फिटनेस रील बनाएँ!",
      "दो: तीस टेक, सिर्फ पाँच व्यूज़?",
      "एक: तीन मेरे। दो: दो मेरे। हाज़िरी पूरी!"
    ],
    "arabic": [
      "أ: نصور مقطع لياقة!",
      "ب: ثلاثون محاولة وخمس مشاهدات فقط؟",
      "أ: ثلاث مني. ب: اثنتان مني. الحضور كامل!"
    ]
  },
  {
    "category": "funny",
    "title": "Production attendance · Fashion",
    "cast": "group",
    "hinglish": [
      "A: Fashion reel banate hain!",
      "B: Thirty takes, sirf five views?",
      "A: Teen mere. B: Do mere. Attendance full!"
    ],
    "hindi": [
      "एक: फैशन रील बनाएँ!",
      "दो: तीस टेक, सिर्फ पाँच व्यूज़?",
      "एक: तीन मेरे। दो: दो मेरे। हाज़िरी पूरी!"
    ],
    "arabic": [
      "أ: نصور مقطع أزياء!",
      "ب: ثلاثون محاولة وخمس مشاهدات فقط؟",
      "أ: ثلاث مني. ب: اثنتان مني. الحضور كامل!"
    ]
  },
  {
    "category": "funny",
    "title": "Production attendance · Travel",
    "cast": "group",
    "hinglish": [
      "A: Travel reel banate hain!",
      "B: Thirty takes, sirf five views?",
      "A: Teen mere. B: Do mere. Attendance full!"
    ],
    "hindi": [
      "एक: यात्रा रील बनाएँ!",
      "दो: तीस टेक, सिर्फ पाँच व्यूज़?",
      "एक: तीन मेरे। दो: दो मेरे। हाज़िरी पूरी!"
    ],
    "arabic": [
      "أ: نصور مقطع سفر!",
      "ب: ثلاثون محاولة وخمس مشاهدات فقط؟",
      "أ: ثلاث مني. ب: اثنتان مني. الحضور كامل!"
    ]
  },
  {
    "category": "funny",
    "title": "Borrowed confidence · Jacket",
    "cast": "group",
    "hinglish": [
      "A: Tera Jacket chahiye, bas photo ke liye!",
      "B: Caption mein self-made likh raha hai?",
      "A: Haan! B: Pehle borrowed-made likh!"
    ],
    "hindi": [
      "एक: तेरा जैकेट चाहिए, फोटो के लिए!",
      "दो: कैप्शन में अपने दम पर लिखेगा?",
      "एक: हाँ! दो: पहले उधार के दम पर लिख!"
    ],
    "arabic": [
      "أ: أريد سترتك للصورة فقط!",
      "ب: ستكتب نجاحي من جهدي؟",
      "أ: نعم! ب: اكتب نجاحي من الاستعارة!"
    ]
  },
  {
    "category": "funny",
    "title": "Borrowed confidence · Watch",
    "cast": "group",
    "hinglish": [
      "A: Tera Watch chahiye, bas photo ke liye!",
      "B: Caption mein self-made likh raha hai?",
      "A: Haan! B: Pehle borrowed-made likh!"
    ],
    "hindi": [
      "एक: तेरा घड़ी चाहिए, फोटो के लिए!",
      "दो: कैप्शन में अपने दम पर लिखेगा?",
      "एक: हाँ! दो: पहले उधार के दम पर लिख!"
    ],
    "arabic": [
      "أ: أريد ساعتك للصورة فقط!",
      "ب: ستكتب نجاحي من جهدي؟",
      "أ: نعم! ب: اكتب نجاحي من الاستعارة!"
    ]
  },
  {
    "category": "funny",
    "title": "Borrowed confidence · Bike",
    "cast": "group",
    "hinglish": [
      "A: Tera Bike chahiye, bas photo ke liye!",
      "B: Caption mein self-made likh raha hai?",
      "A: Haan! B: Pehle borrowed-made likh!"
    ],
    "hindi": [
      "एक: तेरा बाइक चाहिए, फोटो के लिए!",
      "दो: कैप्शन में अपने दम पर लिखेगा?",
      "एक: हाँ! दो: पहले उधार के दम पर लिख!"
    ],
    "arabic": [
      "أ: أريد دراجتك للصورة فقط!",
      "ب: ستكتب نجاحي من جهدي؟",
      "أ: نعم! ب: اكتب نجاحي من الاستعارة!"
    ]
  },
  {
    "category": "funny",
    "title": "Borrowed confidence · Sunglasses",
    "cast": "group",
    "hinglish": [
      "A: Tera Sunglasses chahiye, bas photo ke liye!",
      "B: Caption mein self-made likh raha hai?",
      "A: Haan! B: Pehle borrowed-made likh!"
    ],
    "hindi": [
      "एक: तेरा चश्मा चाहिए, फोटो के लिए!",
      "दो: कैप्शन में अपने दम पर लिखेगा?",
      "एक: हाँ! दो: पहले उधार के दम पर लिख!"
    ],
    "arabic": [
      "أ: أريد نظارتك للصورة فقط!",
      "ب: ستكتب نجاحي من جهدي؟",
      "أ: نعم! ب: اكتب نجاحي من الاستعارة!"
    ]
  },
  {
    "category": "puneet",
    "title": "Coupon romance · Food app",
    "cast": "solo",
    "hinglish": [
      "Food app bola: we miss you!",
      "Main pighla; neeche discount code tha.",
      "Pyaar nahi, customer retention hoon!"
    ],
    "hindi": [
      "खाने वाला ऐप बोला: आपकी याद आती है!",
      "मैं पिघला; नीचे छूट का कोड था।",
      "प्यार नहीं, ग्राहक बचाने की योजना हूँ!"
    ],
    "arabic": [
      "تطبيق الطعام يقول: اشتقنا إليك!",
      "تأثرت، ثم رأيت رمز الخصم.",
      "لست محبوباً، أنا خطة استبقاء العملاء!"
    ]
  },
  {
    "category": "puneet",
    "title": "Coupon romance · Shopping app",
    "cast": "solo",
    "hinglish": [
      "Shopping app bola: we miss you!",
      "Main pighla; neeche discount code tha.",
      "Pyaar nahi, customer retention hoon!"
    ],
    "hindi": [
      "खरीदारी ऐप बोला: आपकी याद आती है!",
      "मैं पिघला; नीचे छूट का कोड था।",
      "प्यार नहीं, ग्राहक बचाने की योजना हूँ!"
    ],
    "arabic": [
      "تطبيق التسوق يقول: اشتقنا إليك!",
      "تأثرت، ثم رأيت رمز الخصم.",
      "لست محبوباً، أنا خطة استبقاء العملاء!"
    ]
  },
  {
    "category": "puneet",
    "title": "Coupon romance · Salon",
    "cast": "solo",
    "hinglish": [
      "Salon bola: we miss you!",
      "Main pighla; neeche discount code tha.",
      "Pyaar nahi, customer retention hoon!"
    ],
    "hindi": [
      "सैलून बोला: आपकी याद आती है!",
      "मैं पिघला; नीचे छूट का कोड था।",
      "प्यार नहीं, ग्राहक बचाने की योजना हूँ!"
    ],
    "arabic": [
      "الصالون يقول: اشتقنا إليك!",
      "تأثرت، ثم رأيت رمز الخصم.",
      "لست محبوباً، أنا خطة استبقاء العملاء!"
    ]
  },
  {
    "category": "puneet",
    "title": "Coupon romance · Gym",
    "cast": "solo",
    "hinglish": [
      "Gym bola: we miss you!",
      "Main pighla; neeche discount code tha.",
      "Pyaar nahi, customer retention hoon!"
    ],
    "hindi": [
      "जिम बोला: आपकी याद आती है!",
      "मैं पिघला; नीचे छूट का कोड था।",
      "प्यार नहीं, ग्राहक बचाने की योजना हूँ!"
    ],
    "arabic": [
      "النادي يقول: اشتقنا إليك!",
      "تأثرت، ثم رأيت رمز الخصم.",
      "لست محبوباً، أنا خطة استبقاء العملاء!"
    ]
  },
  {
    "category": "puneet",
    "title": "Midnight champion · Running",
    "cast": "solo",
    "hinglish": [
      "Kal se Running, pakka!",
      "Subah kambal ne veto laga diya.",
      "Discipline international, attendance invisible!"
    ],
    "hindi": [
      "कल से दौड़, पक्का!",
      "सुबह कंबल ने मंज़ूरी रोक दी।",
      "अनुशासन अंतरराष्ट्रीय, हाज़िरी अदृश्य!"
    ],
    "arabic": [
      "من الغد أبدأ الجري، مؤكد!",
      "صباحاً اعترضت البطانية على القرار.",
      "انضباط عالمي وحضور غير مرئي!"
    ]
  },
  {
    "category": "puneet",
    "title": "Midnight champion · Studying",
    "cast": "solo",
    "hinglish": [
      "Kal se Studying, pakka!",
      "Subah kambal ne veto laga diya.",
      "Discipline international, attendance invisible!"
    ],
    "hindi": [
      "कल से पढ़ाई, पक्का!",
      "सुबह कंबल ने मंज़ूरी रोक दी।",
      "अनुशासन अंतरराष्ट्रीय, हाज़िरी अदृश्य!"
    ],
    "arabic": [
      "من الغد أبدأ الدراسة، مؤكد!",
      "صباحاً اعترضت البطانية على القرار.",
      "انضباط عالمي وحضور غير مرئي!"
    ]
  },
  {
    "category": "puneet",
    "title": "Midnight champion · Workout",
    "cast": "solo",
    "hinglish": [
      "Kal se Workout, pakka!",
      "Subah kambal ne veto laga diya.",
      "Discipline international, attendance invisible!"
    ],
    "hindi": [
      "कल से कसरत, पक्का!",
      "सुबह कंबल ने मंज़ूरी रोक दी।",
      "अनुशासन अंतरराष्ट्रीय, हाज़िरी अदृश्य!"
    ],
    "arabic": [
      "من الغد أبدأ التمرين، مؤكد!",
      "صباحاً اعترضت البطانية على القرار.",
      "انضباط عالمي وحضور غير مرئي!"
    ]
  },
  {
    "category": "puneet",
    "title": "Midnight champion · Meditation",
    "cast": "solo",
    "hinglish": [
      "Kal se Meditation, pakka!",
      "Subah kambal ne veto laga diya.",
      "Discipline international, attendance invisible!"
    ],
    "hindi": [
      "कल से ध्यान, पक्का!",
      "सुबह कंबल ने मंज़ूरी रोक दी।",
      "अनुशासन अंतरराष्ट्रीय, हाज़िरी अदृश्य!"
    ],
    "arabic": [
      "من الغد أبدأ التأمل، مؤكد!",
      "صباحاً اعترضت البطانية على القرار.",
      "انضباط عالمي وحضور غير مرئي!"
    ]
  },
  {
    "category": "puneet",
    "title": "Selective busy · Stories",
    "cast": "solo",
    "hinglish": [
      "Mera message seen; reply zero!",
      "Par Stories ke liye time full.",
      "Busy nahi, meri chat pe curfew hai!"
    ],
    "hindi": [
      "मेरा संदेश देखा; जवाब शून्य!",
      "पर स्टोरी के लिए पूरा समय।",
      "व्यस्त नहीं, मेरी चैट पर कर्फ्यू है!"
    ],
    "arabic": [
      "قرأت رسالتي ولم ترد!",
      "لكن لديها وقت كامل لـالقصص.",
      "ليست مشغولة، محادثتي تحت حظر التجول!"
    ]
  },
  {
    "category": "puneet",
    "title": "Selective busy · Live stream",
    "cast": "solo",
    "hinglish": [
      "Mera message seen; reply zero!",
      "Par Live stream ke liye time full.",
      "Busy nahi, meri chat pe curfew hai!"
    ],
    "hindi": [
      "मेरा संदेश देखा; जवाब शून्य!",
      "पर लाइव के लिए पूरा समय।",
      "व्यस्त नहीं, मेरी चैट पर कर्फ्यू है!"
    ],
    "arabic": [
      "قرأت رسالتي ولم ترد!",
      "لكن لديها وقت كامل لـالبث المباشر.",
      "ليست مشغولة، محادثتي تحت حظر التجول!"
    ]
  },
  {
    "category": "puneet",
    "title": "Selective busy · Comments",
    "cast": "solo",
    "hinglish": [
      "Mera message seen; reply zero!",
      "Par Comments ke liye time full.",
      "Busy nahi, meri chat pe curfew hai!"
    ],
    "hindi": [
      "मेरा संदेश देखा; जवाब शून्य!",
      "पर कमेंट के लिए पूरा समय।",
      "व्यस्त नहीं, मेरी चैट पर कर्फ्यू है!"
    ],
    "arabic": [
      "قرأت رسالتي ولم ترد!",
      "لكن لديها وقت كامل لـالتعليقات.",
      "ليست مشغولة، محادثتي تحت حظر التجول!"
    ]
  },
  {
    "category": "puneet",
    "title": "Selective busy · Reels",
    "cast": "solo",
    "hinglish": [
      "Mera message seen; reply zero!",
      "Par Reels ke liye time full.",
      "Busy nahi, meri chat pe curfew hai!"
    ],
    "hindi": [
      "मेरा संदेश देखा; जवाब शून्य!",
      "पर रील्स के लिए पूरा समय।",
      "व्यस्त नहीं, मेरी चैट पर कर्फ्यू है!"
    ],
    "arabic": [
      "قرأت رسالتي ولم ترد!",
      "لكن لديها وقت كامل لـالمقاطع.",
      "ليست مشغولة، محادثتي تحت حظر التجول!"
    ]
  },
  {
    "category": "puneet",
    "title": "Draft billionaire · Reel",
    "cast": "solo",
    "hinglish": [
      "Mera Reel ready hai!",
      "Bas publish karne ka confidence pending.",
      "Talent unlimited, upload unavailable!"
    ],
    "hindi": [
      "मेरा रील तैयार है!",
      "बस पोस्ट करने का भरोसा बाकी।",
      "प्रतिभा असीमित, अपलोड अनुपलब्ध!"
    ],
    "arabic": [
      "المقطع جاهز عندي!",
      "فقط ثقة النشر ما زالت معلقة.",
      "موهبة بلا حدود ونشر غير متاح!"
    ]
  },
  {
    "category": "puneet",
    "title": "Draft billionaire · Podcast",
    "cast": "solo",
    "hinglish": [
      "Mera Podcast ready hai!",
      "Bas publish karne ka confidence pending.",
      "Talent unlimited, upload unavailable!"
    ],
    "hindi": [
      "मेरा पॉडकास्ट तैयार है!",
      "बस पोस्ट करने का भरोसा बाकी।",
      "प्रतिभा असीमित, अपलोड अनुपलब्ध!"
    ],
    "arabic": [
      "البودكاست جاهز عندي!",
      "فقط ثقة النشر ما زالت معلقة.",
      "موهبة بلا حدود ونشر غير متاح!"
    ]
  },
  {
    "category": "puneet",
    "title": "Draft billionaire · Vlog",
    "cast": "solo",
    "hinglish": [
      "Mera Vlog ready hai!",
      "Bas publish karne ka confidence pending.",
      "Talent unlimited, upload unavailable!"
    ],
    "hindi": [
      "मेरा व्लॉग तैयार है!",
      "बस पोस्ट करने का भरोसा बाकी।",
      "प्रतिभा असीमित, अपलोड अनुपलब्ध!"
    ],
    "arabic": [
      "الفيديو اليومي جاهز عندي!",
      "فقط ثقة النشر ما زالت معلقة.",
      "موهبة بلا حدود ونشر غير متاح!"
    ]
  },
  {
    "category": "puneet",
    "title": "Draft billionaire · Song",
    "cast": "solo",
    "hinglish": [
      "Mera Song ready hai!",
      "Bas publish karne ka confidence pending.",
      "Talent unlimited, upload unavailable!"
    ],
    "hindi": [
      "मेरा गाना तैयार है!",
      "बस पोस्ट करने का भरोसा बाकी।",
      "प्रतिभा असीमित, अपलोड अनुपलब्ध!"
    ],
    "arabic": [
      "الأغنية جاهز عندي!",
      "فقط ثقة النشر ما زالت معلقة.",
      "موهبة بلا حدود ونشر غير متاح!"
    ]
  },
  {
    "category": "puneet",
    "title": "Fake rich era · Phone",
    "cast": "solo",
    "hinglish": [
      "Aaj Phone liya; rich feel ho raha!",
      "Payment EMI, attitude cash mein.",
      "Luxury meri, ownership bank ki!"
    ],
    "hindi": [
      "आज फोन लिया; अमीर महसूस हो रहा!",
      "भुगतान किस्तों में, अकड़ नकद।",
      "शान मेरी, मालिकाना बैंक का!"
    ],
    "arabic": [
      "اشتريت هاتفاً وأشعر بالثراء!",
      "الدفع أقساط والغرور نقداً.",
      "الفخامة لي والملكية للبنك!"
    ]
  },
  {
    "category": "puneet",
    "title": "Fake rich era · Laptop",
    "cast": "solo",
    "hinglish": [
      "Aaj Laptop liya; rich feel ho raha!",
      "Payment EMI, attitude cash mein.",
      "Luxury meri, ownership bank ki!"
    ],
    "hindi": [
      "आज लैपटॉप लिया; अमीर महसूस हो रहा!",
      "भुगतान किस्तों में, अकड़ नकद।",
      "शान मेरी, मालिकाना बैंक का!"
    ],
    "arabic": [
      "اشتريت حاسوباً وأشعر بالثراء!",
      "الدفع أقساط والغرور نقداً.",
      "الفخامة لي والملكية للبنك!"
    ]
  },
  {
    "category": "puneet",
    "title": "Fake rich era · Bike",
    "cast": "solo",
    "hinglish": [
      "Aaj Bike liya; rich feel ho raha!",
      "Payment EMI, attitude cash mein.",
      "Luxury meri, ownership bank ki!"
    ],
    "hindi": [
      "आज बाइक लिया; अमीर महसूस हो रहा!",
      "भुगतान किस्तों में, अकड़ नकद।",
      "शान मेरी, मालिकाना बैंक का!"
    ],
    "arabic": [
      "اشتريت دراجة وأشعر بالثراء!",
      "الدفع أقساط والغرور نقداً.",
      "الفخامة لي والملكية للبنك!"
    ]
  },
  {
    "category": "puneet",
    "title": "Fake rich era · Camera",
    "cast": "solo",
    "hinglish": [
      "Aaj Camera liya; rich feel ho raha!",
      "Payment EMI, attitude cash mein.",
      "Luxury meri, ownership bank ki!"
    ],
    "hindi": [
      "आज कैमरा लिया; अमीर महसूस हो रहा!",
      "भुगतान किस्तों में, अकड़ नकद।",
      "शान मेरी, मालिकाना बैंक का!"
    ],
    "arabic": [
      "اشتريت كاميرا وأشعر بالثراء!",
      "الدفع أقساط والغرور نقداً.",
      "الفخامة لي والملكية للبنك!"
    ]
  },
  {
    "category": "puneet",
    "title": "Life coach loading · Fitness",
    "cast": "solo",
    "hinglish": [
      "Sabko Fitness ki advice deta hoon!",
      "Khud ka routine kal se start.",
      "Main coach hoon, player out of syllabus!"
    ],
    "hindi": [
      "सबको फिटनेस की सलाह देता हूँ!",
      "खुद की दिनचर्या कल से शुरू।",
      "मैं कोच हूँ, खिलाड़ी पाठ्यक्रम से बाहर!"
    ],
    "arabic": [
      "أنصح الجميع في اللياقة!",
      "روتيني الشخصي يبدأ غداً.",
      "أنا المدرب، واللاعب خارج المنهج!"
    ]
  },
  {
    "category": "puneet",
    "title": "Life coach loading · Savings",
    "cast": "solo",
    "hinglish": [
      "Sabko Savings ki advice deta hoon!",
      "Khud ka routine kal se start.",
      "Main coach hoon, player out of syllabus!"
    ],
    "hindi": [
      "सबको बचत की सलाह देता हूँ!",
      "खुद की दिनचर्या कल से शुरू।",
      "मैं कोच हूँ, खिलाड़ी पाठ्यक्रम से बाहर!"
    ],
    "arabic": [
      "أنصح الجميع في الادخار!",
      "روتيني الشخصي يبدأ غداً.",
      "أنا المدرب، واللاعب خارج المنهج!"
    ]
  },
  {
    "category": "puneet",
    "title": "Life coach loading · Study",
    "cast": "solo",
    "hinglish": [
      "Sabko Study ki advice deta hoon!",
      "Khud ka routine kal se start.",
      "Main coach hoon, player out of syllabus!"
    ],
    "hindi": [
      "सबको पढ़ाई की सलाह देता हूँ!",
      "खुद की दिनचर्या कल से शुरू।",
      "मैं कोच हूँ, खिलाड़ी पाठ्यक्रम से बाहर!"
    ],
    "arabic": [
      "أنصح الجميع في الدراسة!",
      "روتيني الشخصي يبدأ غداً.",
      "أنا المدرب، واللاعب خارج المنهج!"
    ]
  },
  {
    "category": "puneet",
    "title": "Life coach loading · Sleep",
    "cast": "solo",
    "hinglish": [
      "Sabko Sleep ki advice deta hoon!",
      "Khud ka routine kal se start.",
      "Main coach hoon, player out of syllabus!"
    ],
    "hindi": [
      "सबको नींद की सलाह देता हूँ!",
      "खुद की दिनचर्या कल से शुरू।",
      "मैं कोच हूँ, खिलाड़ी पाठ्यक्रम से बाहर!"
    ],
    "arabic": [
      "أنصح الجميع في النوم!",
      "روتيني الشخصي يبدأ غداً.",
      "أنا المدرب، واللاعب خارج المنهج!"
    ]
  },
  {
    "category": "puneet",
    "title": "Emotionless test · Crush",
    "cast": "group",
    "hinglish": [
      "A: Main emotionless hoon!",
      "B: Crush ka message! A: Phone de!",
      "B: Emotionless? Soul notification pe deliver hoti hai!"
    ],
    "hindi": [
      "एक: मेरी भावनाएँ खत्म!",
      "दो: क्रश का संदेश! एक: फोन दे!",
      "दो: भावनाएँ खत्म? आत्मा नोटिफिकेशन पर आती है!"
    ],
    "arabic": [
      "أ: صرت بلا مشاعر!",
      "ب: رسالة من المعجبة! أ: أعطني الهاتف!",
      "ب: روحك تصل فور كل إشعار!"
    ]
  },
  {
    "category": "puneet",
    "title": "Emotionless test · Ex",
    "cast": "group",
    "hinglish": [
      "A: Main emotionless hoon!",
      "B: Ex ka message! A: Phone de!",
      "B: Emotionless? Soul notification pe deliver hoti hai!"
    ],
    "hindi": [
      "एक: मेरी भावनाएँ खत्म!",
      "दो: पूर्व प्रेमिका का संदेश! एक: फोन दे!",
      "दो: भावनाएँ खत्म? आत्मा नोटिफिकेशन पर आती है!"
    ],
    "arabic": [
      "أ: صرت بلا مشاعر!",
      "ب: رسالة من الحبيبة السابقة! أ: أعطني الهاتف!",
      "ب: روحك تصل فور كل إشعار!"
    ]
  },
  {
    "category": "puneet",
    "title": "Emotionless test · Date",
    "cast": "group",
    "hinglish": [
      "A: Main emotionless hoon!",
      "B: Date ka message! A: Phone de!",
      "B: Emotionless? Soul notification pe deliver hoti hai!"
    ],
    "hindi": [
      "एक: मेरी भावनाएँ खत्म!",
      "दो: डेट का संदेश! एक: फोन दे!",
      "दो: भावनाएँ खत्म? आत्मा नोटिफिकेशन पर आती है!"
    ],
    "arabic": [
      "أ: صرت بلا مشاعر!",
      "ب: رسالة من رفيقة الموعد! أ: أعطني الهاتف!",
      "ب: روحك تصل فور كل إشعار!"
    ]
  },
  {
    "category": "puneet",
    "title": "Emotionless test · Bestie",
    "cast": "group",
    "hinglish": [
      "A: Main emotionless hoon!",
      "B: Bestie ka message! A: Phone de!",
      "B: Emotionless? Soul notification pe deliver hoti hai!"
    ],
    "hindi": [
      "एक: मेरी भावनाएँ खत्म!",
      "दो: बेस्टी का संदेश! एक: फोन दे!",
      "दो: भावनाएँ खत्म? आत्मा नोटिफिकेशन पर आती है!"
    ],
    "arabic": [
      "أ: صرت بلا مشاعر!",
      "ب: رسالة من الصديقة المقربة! أ: أعطني الهاتف!",
      "ب: روحك تصل فور كل إشعار!"
    ]
  },
  {
    "category": "puneet",
    "title": "Sigma reality · Instagram",
    "cast": "group",
    "hinglish": [
      "A: Instagram chhod diya; sigma hoon!",
      "B: Kal phir use kar raha tha?",
      "A: Research! B: Addiction ka naya naam?"
    ],
    "hindi": [
      "एक: इंस्टाग्राम छोड़ दिया; सिग्मा हूँ!",
      "दो: कल फिर इस्तेमाल कर रहा था?",
      "एक: शोध! दो: लत का नया नाम?"
    ],
    "arabic": [
      "أ: تركت إنستغرام، أنا مستقل!",
      "ب: لكنك استخدمته أمس؟",
      "أ: بحث! ب: اسم جديد للإدمان؟"
    ]
  },
  {
    "category": "puneet",
    "title": "Sigma reality · Dating app",
    "cast": "group",
    "hinglish": [
      "A: Dating app chhod diya; sigma hoon!",
      "B: Kal phir use kar raha tha?",
      "A: Research! B: Addiction ka naya naam?"
    ],
    "hindi": [
      "एक: डेटिंग ऐप छोड़ दिया; सिग्मा हूँ!",
      "दो: कल फिर इस्तेमाल कर रहा था?",
      "एक: शोध! दो: लत का नया नाम?"
    ],
    "arabic": [
      "أ: تركت تطبيق المواعدة، أنا مستقل!",
      "ب: لكنك استخدمته أمس؟",
      "أ: بحث! ب: اسم جديد للإدمان؟"
    ]
  },
  {
    "category": "puneet",
    "title": "Sigma reality · Gaming",
    "cast": "group",
    "hinglish": [
      "A: Gaming chhod diya; sigma hoon!",
      "B: Kal phir use kar raha tha?",
      "A: Research! B: Addiction ka naya naam?"
    ],
    "hindi": [
      "एक: गेमिंग छोड़ दिया; सिग्मा हूँ!",
      "दो: कल फिर इस्तेमाल कर रहा था?",
      "एक: शोध! दो: लत का नया नाम?"
    ],
    "arabic": [
      "أ: تركت الألعاب، أنا مستقل!",
      "ب: لكنك استخدمته أمس؟",
      "أ: بحث! ب: اسم جديد للإدمان؟"
    ]
  },
  {
    "category": "puneet",
    "title": "Sigma reality · Short videos",
    "cast": "group",
    "hinglish": [
      "A: Short videos chhod diya; sigma hoon!",
      "B: Kal phir use kar raha tha?",
      "A: Research! B: Addiction ka naya naam?"
    ],
    "hindi": [
      "एक: छोटे वीडियो छोड़ दिया; सिग्मा हूँ!",
      "दो: कल फिर इस्तेमाल कर रहा था?",
      "एक: शोध! दो: लत का नया नाम?"
    ],
    "arabic": [
      "أ: تركت المقاطع القصيرة، أنا مستقل!",
      "ب: لكنك استخدمته أمس؟",
      "أ: بحث! ب: اسم جديد للإدمان؟"
    ]
  },
  {
    "category": "love",
    "title": "Date mathematics · Coffee",
    "cast": "solo",
    "hinglish": [
      "Date boli Coffee simple rahega!",
      "Bill aaya, calculator ne aansu baha diye.",
      "Romance pending, budget breakup confirmed!"
    ],
    "hindi": [
      "डेट बोली कॉफी सादा रहेगा!",
      "बिल आया, कैलकुलेटर रो पड़ा।",
      "प्यार बाकी, बजट का ब्रेकअप पक्का!"
    ],
    "arabic": [
      "قالت إن القهوة سيكون بسيطاً!",
      "وصل الحساب وبكت الآلة الحاسبة.",
      "الحب معلق وانفصال الميزانية مؤكد!"
    ]
  },
  {
    "category": "love",
    "title": "Date mathematics · Dinner",
    "cast": "solo",
    "hinglish": [
      "Date boli Dinner simple rahega!",
      "Bill aaya, calculator ne aansu baha diye.",
      "Romance pending, budget breakup confirmed!"
    ],
    "hindi": [
      "डेट बोली डिनर सादा रहेगा!",
      "बिल आया, कैलकुलेटर रो पड़ा।",
      "प्यार बाकी, बजट का ब्रेकअप पक्का!"
    ],
    "arabic": [
      "قالت إن العشاء سيكون بسيطاً!",
      "وصل الحساب وبكت الآلة الحاسبة.",
      "الحب معلق وانفصال الميزانية مؤكد!"
    ]
  },
  {
    "category": "love",
    "title": "Date mathematics · Movie",
    "cast": "solo",
    "hinglish": [
      "Date boli Movie simple rahega!",
      "Bill aaya, calculator ne aansu baha diye.",
      "Romance pending, budget breakup confirmed!"
    ],
    "hindi": [
      "डेट बोली फिल्म सादा रहेगा!",
      "बिल आया, कैलकुलेटर रो पड़ा।",
      "प्यार बाकी, बजट का ब्रेकअप पक्का!"
    ],
    "arabic": [
      "قالت إن الفيلم سيكون بسيطاً!",
      "وصل الحساب وبكت الآلة الحاسبة.",
      "الحب معلق وانفصال الميزانية مؤكد!"
    ]
  },
  {
    "category": "love",
    "title": "Date mathematics · Brunch",
    "cast": "solo",
    "hinglish": [
      "Date boli Brunch simple rahega!",
      "Bill aaya, calculator ne aansu baha diye.",
      "Romance pending, budget breakup confirmed!"
    ],
    "hindi": [
      "डेट बोली ब्रंच सादा रहेगा!",
      "बिल आया, कैलकुलेटर रो पड़ा।",
      "प्यार बाकी, बजट का ब्रेकअप पक्का!"
    ],
    "arabic": [
      "قالت إن الفطور المتأخر سيكون بسيطاً!",
      "وصل الحساب وبكت الآلة الحاسبة.",
      "الحب معلق وانفصال الميزانية مؤكد!"
    ]
  },
  {
    "category": "love",
    "title": "Soft launch detectives · Two cups",
    "cast": "solo",
    "hinglish": [
      "Story mein sirf Two cups dikhaya!",
      "Family ne partner tak identify kar liya.",
      "Soft launch tha, press conference ho gayi!"
    ],
    "hindi": [
      "स्टोरी में सिर्फ दो कप दिखाया!",
      "परिवार ने साथी तक पहचान लिया।",
      "धीमी शुरुआत थी, प्रेस कॉन्फ्रेंस हो गई!"
    ],
    "arabic": [
      "أظهرت كوبين فقط في القصة!",
      "العائلة تعرفت حتى على شريكي.",
      "إعلان هادئ تحول لمؤتمر صحفي!"
    ]
  },
  {
    "category": "love",
    "title": "Soft launch detectives · Two tickets",
    "cast": "solo",
    "hinglish": [
      "Story mein sirf Two tickets dikhaya!",
      "Family ne partner tak identify kar liya.",
      "Soft launch tha, press conference ho gayi!"
    ],
    "hindi": [
      "स्टोरी में सिर्फ दो टिकट दिखाया!",
      "परिवार ने साथी तक पहचान लिया।",
      "धीमी शुरुआत थी, प्रेस कॉन्फ्रेंस हो गई!"
    ],
    "arabic": [
      "أظهرت تذكرتين فقط في القصة!",
      "العائلة تعرفت حتى على شريكي.",
      "إعلان هادئ تحول لمؤتمر صحفي!"
    ]
  },
  {
    "category": "love",
    "title": "Soft launch detectives · Two plates",
    "cast": "solo",
    "hinglish": [
      "Story mein sirf Two plates dikhaya!",
      "Family ne partner tak identify kar liya.",
      "Soft launch tha, press conference ho gayi!"
    ],
    "hindi": [
      "स्टोरी में सिर्फ दो प्लेट दिखाया!",
      "परिवार ने साथी तक पहचान लिया।",
      "धीमी शुरुआत थी, प्रेस कॉन्फ्रेंस हो गई!"
    ],
    "arabic": [
      "أظهرت طبقين فقط في القصة!",
      "العائلة تعرفت حتى على شريكي.",
      "إعلان هادئ تحول لمؤتمر صحفي!"
    ]
  },
  {
    "category": "love",
    "title": "Soft launch detectives · Matching shoes",
    "cast": "solo",
    "hinglish": [
      "Story mein sirf Matching shoes dikhaya!",
      "Family ne partner tak identify kar liya.",
      "Soft launch tha, press conference ho gayi!"
    ],
    "hindi": [
      "स्टोरी में सिर्फ एक जैसे जूते दिखाया!",
      "परिवार ने साथी तक पहचान लिया।",
      "धीमी शुरुआत थी, प्रेस कॉन्फ्रेंस हो गई!"
    ],
    "arabic": [
      "أظهرت حذاءين متشابهين فقط في القصة!",
      "العائلة تعرفت حتى على شريكي.",
      "إعلان هادئ تحول لمؤتمر صحفي!"
    ]
  },
  {
    "category": "love",
    "title": "Romantic referral · Tera friend",
    "cast": "solo",
    "hinglish": [
      "Crush boli: Tera friend single hai?",
      "Main hero samjha, recruiter nikla.",
      "Dil toot gaya, referral bonus bhi nahi!"
    ],
    "hindi": [
      "क्रश बोली: तेरा दोस्त सिंगल है?",
      "खुद को हीरो समझा, भर्तीकर्ता निकला।",
      "दिल टूटा, सिफारिश का बोनस भी नहीं!"
    ],
    "arabic": [
      "سألت المعجبة: هل صديقك أعزب؟",
      "ظننتني البطل، طلعت موظف توظيف.",
      "قلبي انكسر ولا مكافأة إحالة!"
    ]
  },
  {
    "category": "love",
    "title": "Romantic referral · Tera cousin",
    "cast": "solo",
    "hinglish": [
      "Crush boli: Tera cousin single hai?",
      "Main hero samjha, recruiter nikla.",
      "Dil toot gaya, referral bonus bhi nahi!"
    ],
    "hindi": [
      "क्रश बोली: तेरा कज़िन सिंगल है?",
      "खुद को हीरो समझा, भर्तीकर्ता निकला।",
      "दिल टूटा, सिफारिश का बोनस भी नहीं!"
    ],
    "arabic": [
      "سألت المعجبة: هل ابن عمك أعزب؟",
      "ظننتني البطل، طلعت موظف توظيف.",
      "قلبي انكسر ولا مكافأة إحالة!"
    ]
  },
  {
    "category": "love",
    "title": "Romantic referral · Tera roommate",
    "cast": "solo",
    "hinglish": [
      "Crush boli: Tera roommate single hai?",
      "Main hero samjha, recruiter nikla.",
      "Dil toot gaya, referral bonus bhi nahi!"
    ],
    "hindi": [
      "क्रश बोली: तेरा रूममेट सिंगल है?",
      "खुद को हीरो समझा, भर्तीकर्ता निकला।",
      "दिल टूटा, सिफारिश का बोनस भी नहीं!"
    ],
    "arabic": [
      "سألت المعجبة: هل زميل سكنك أعزب؟",
      "ظننتني البطل، طلعت موظف توظيف.",
      "قلبي انكسر ولا مكافأة إحالة!"
    ]
  },
  {
    "category": "love",
    "title": "Romantic referral · Tera colleague",
    "cast": "solo",
    "hinglish": [
      "Crush boli: Tera colleague single hai?",
      "Main hero samjha, recruiter nikla.",
      "Dil toot gaya, referral bonus bhi nahi!"
    ],
    "hindi": [
      "क्रश बोली: तेरा सहकर्मी सिंगल है?",
      "खुद को हीरो समझा, भर्तीकर्ता निकला।",
      "दिल टूटा, सिफारिश का बोनस भी नहीं!"
    ],
    "arabic": [
      "سألت المعجبة: هل زميل عملك أعزب؟",
      "ظننتني البطل، طلعت موظف توظيف.",
      "قلبي انكسر ولا مكافأة إحالة!"
    ]
  },
  {
    "category": "love",
    "title": "Communication syllabus · Good morning",
    "cast": "solo",
    "hinglish": [
      "Usne bola Good morning bhejna!",
      "Bheja toh boli: you text too much.",
      "Syllabus unka, fail main!"
    ],
    "hindi": [
      "उसने कहा शुभ प्रभात भेजना!",
      "भेजा तो बोली: बहुत संदेश भेजते हो।",
      "पाठ्यक्रम उनका, फेल मैं!"
    ],
    "arabic": [
      "طلبت إرسال تحية الصباح!",
      "أرسلت فقالت: رسائلك كثيرة.",
      "المنهج منها والرسوب لي!"
    ]
  },
  {
    "category": "love",
    "title": "Communication syllabus · Daily update",
    "cast": "solo",
    "hinglish": [
      "Usne bola Daily update bhejna!",
      "Bheja toh boli: you text too much.",
      "Syllabus unka, fail main!"
    ],
    "hindi": [
      "उसने कहा रोज़ का हाल भेजना!",
      "भेजा तो बोली: बहुत संदेश भेजते हो।",
      "पाठ्यक्रम उनका, फेल मैं!"
    ],
    "arabic": [
      "طلبت إرسال تحديث يومي!",
      "أرسلت فقالت: رسائلك كثيرة.",
      "المنهج منها والرسوب لي!"
    ]
  },
  {
    "category": "love",
    "title": "Communication syllabus · Good night",
    "cast": "solo",
    "hinglish": [
      "Usne bola Good night bhejna!",
      "Bheja toh boli: you text too much.",
      "Syllabus unka, fail main!"
    ],
    "hindi": [
      "उसने कहा शुभ रात्रि भेजना!",
      "भेजा तो बोली: बहुत संदेश भेजते हो।",
      "पाठ्यक्रम उनका, फेल मैं!"
    ],
    "arabic": [
      "طلبت إرسال تحية المساء!",
      "أرسلت فقالت: رسائلك كثيرة.",
      "المنهج منها والرسوب لي!"
    ]
  },
  {
    "category": "love",
    "title": "Communication syllabus · Voice note",
    "cast": "solo",
    "hinglish": [
      "Usne bola Voice note bhejna!",
      "Bheja toh boli: you text too much.",
      "Syllabus unka, fail main!"
    ],
    "hindi": [
      "उसने कहा वॉइस नोट भेजना!",
      "भेजा तो बोली: बहुत संदेश भेजते हो।",
      "पाठ्यक्रम उनका, फेल मैं!"
    ],
    "arabic": [
      "طلبت إرسال رسالة صوتية!",
      "أرسلت فقالت: رسائلك كثيرة.",
      "المنهج منها والرسوب لي!"
    ]
  },
  {
    "category": "love",
    "title": "Surprise scheduling · Birthday",
    "cast": "solo",
    "hinglish": [
      "Birthday surprise plan kiya!",
      "Usne bola: pehle calendar invite bhejo.",
      "Pyaar nahi, quarterly meeting hai!"
    ],
    "hindi": [
      "जन्मदिन का सरप्राइज़ बनाया!",
      "बोली: पहले कैलेंडर का न्योता भेजो।",
      "प्यार नहीं, तिमाही बैठक है!"
    ],
    "arabic": [
      "خططت لمفاجأة عيد الميلاد!",
      "قالت: أرسل دعوة التقويم أولاً.",
      "هذا ليس حباً، إنه اجتماع ربع سنوي!"
    ]
  },
  {
    "category": "love",
    "title": "Surprise scheduling · Anniversary",
    "cast": "solo",
    "hinglish": [
      "Anniversary surprise plan kiya!",
      "Usne bola: pehle calendar invite bhejo.",
      "Pyaar nahi, quarterly meeting hai!"
    ],
    "hindi": [
      "सालगिरह का सरप्राइज़ बनाया!",
      "बोली: पहले कैलेंडर का न्योता भेजो।",
      "प्यार नहीं, तिमाही बैठक है!"
    ],
    "arabic": [
      "خططت لمفاجأة الذكرى!",
      "قالت: أرسل دعوة التقويم أولاً.",
      "هذا ليس حباً، إنه اجتماع ربع سنوي!"
    ]
  },
  {
    "category": "love",
    "title": "Surprise scheduling · Weekend",
    "cast": "solo",
    "hinglish": [
      "Weekend surprise plan kiya!",
      "Usne bola: pehle calendar invite bhejo.",
      "Pyaar nahi, quarterly meeting hai!"
    ],
    "hindi": [
      "वीकेंड का सरप्राइज़ बनाया!",
      "बोली: पहले कैलेंडर का न्योता भेजो।",
      "प्यार नहीं, तिमाही बैठक है!"
    ],
    "arabic": [
      "خططت لمفاجأة نهاية الأسبوع!",
      "قالت: أرسل دعوة التقويم أولاً.",
      "هذا ليس حباً، إنه اجتماع ربع سنوي!"
    ]
  },
  {
    "category": "love",
    "title": "Surprise scheduling · Valentine",
    "cast": "solo",
    "hinglish": [
      "Valentine surprise plan kiya!",
      "Usne bola: pehle calendar invite bhejo.",
      "Pyaar nahi, quarterly meeting hai!"
    ],
    "hindi": [
      "वैलेंटाइन का सरप्राइज़ बनाया!",
      "बोली: पहले कैलेंडर का न्योता भेजो।",
      "प्यार नहीं, तिमाही बैठक है!"
    ],
    "arabic": [
      "خططت لمفاجأة عيد الحب!",
      "قالت: أرسل دعوة التقويم أولاً.",
      "هذا ليس حباً، إنه اجتماع ربع سنوي!"
    ]
  },
  {
    "category": "love",
    "title": "Matching confusion · Bracelet",
    "cast": "solo",
    "hinglish": [
      "Uske liye matching Bracelet liya!",
      "Uske bestie ke paas bhi same.",
      "Couple edition nahi, wholesale batch tha!"
    ],
    "hindi": [
      "उसके लिए एक जैसा कंगन लिया!",
      "उसके दोस्त के पास भी वही।",
      "कपल एडिशन नहीं, थोक का माल था!"
    ],
    "arabic": [
      "اشتريت لنا سواراً متطابقاً!",
      "لصديقها المقرب نفس الشيء أيضاً.",
      "ليست نسخة للعشاق، إنها دفعة بالجملة!"
    ]
  },
  {
    "category": "love",
    "title": "Matching confusion · Hoodie",
    "cast": "solo",
    "hinglish": [
      "Uske liye matching Hoodie liya!",
      "Uske bestie ke paas bhi same.",
      "Couple edition nahi, wholesale batch tha!"
    ],
    "hindi": [
      "उसके लिए एक जैसा हुडी लिया!",
      "उसके दोस्त के पास भी वही।",
      "कपल एडिशन नहीं, थोक का माल था!"
    ],
    "arabic": [
      "اشتريت لنا سترة متطابقاً!",
      "لصديقها المقرب نفس الشيء أيضاً.",
      "ليست نسخة للعشاق، إنها دفعة بالجملة!"
    ]
  },
  {
    "category": "love",
    "title": "Matching confusion · Phone cover",
    "cast": "solo",
    "hinglish": [
      "Uske liye matching Phone cover liya!",
      "Uske bestie ke paas bhi same.",
      "Couple edition nahi, wholesale batch tha!"
    ],
    "hindi": [
      "उसके लिए एक जैसा फोन कवर लिया!",
      "उसके दोस्त के पास भी वही।",
      "कपल एडिशन नहीं, थोक का माल था!"
    ],
    "arabic": [
      "اشتريت لنا غطاء هاتف متطابقاً!",
      "لصديقها المقرب نفس الشيء أيضاً.",
      "ليست نسخة للعشاق، إنها دفعة بالجملة!"
    ]
  },
  {
    "category": "love",
    "title": "Matching confusion · Keychain",
    "cast": "solo",
    "hinglish": [
      "Uske liye matching Keychain liya!",
      "Uske bestie ke paas bhi same.",
      "Couple edition nahi, wholesale batch tha!"
    ],
    "hindi": [
      "उसके लिए एक जैसा चाबी का छल्ला लिया!",
      "उसके दोस्त के पास भी वही।",
      "कपल एडिशन नहीं, थोक का माल था!"
    ],
    "arabic": [
      "اشتريت لنا ميدالية مفاتيح متطابقاً!",
      "لصديقها المقرب نفس الشيء أيضاً.",
      "ليست نسخة للعشاق، إنها دفعة بالجملة!"
    ]
  },
  {
    "category": "love",
    "title": "Effortless production · Dance",
    "cast": "group",
    "hinglish": [
      "A: Dance couple reel banayein?",
      "B: Forty takes! Natural smile kahan hai?",
      "A: Caption: effortless love. B: Jhooth effortless hai!"
    ],
    "hindi": [
      "एक: डांस कपल रील बनाएँ?",
      "दो: चालीस टेक! सहज मुस्कान कहाँ है?",
      "एक: सहज प्यार। दो: झूठ सहज है!"
    ],
    "arabic": [
      "أ: نصور مقطع رقص لنا؟",
      "ب: أربعون محاولة! أين الابتسامة الطبيعية؟",
      "أ: حب بلا مجهود. ب: الكذب بلا مجهود!"
    ]
  },
  {
    "category": "love",
    "title": "Effortless production · Cooking",
    "cast": "group",
    "hinglish": [
      "A: Cooking couple reel banayein?",
      "B: Forty takes! Natural smile kahan hai?",
      "A: Caption: effortless love. B: Jhooth effortless hai!"
    ],
    "hindi": [
      "एक: कुकिंग कपल रील बनाएँ?",
      "दो: चालीस टेक! सहज मुस्कान कहाँ है?",
      "एक: सहज प्यार। दो: झूठ सहज है!"
    ],
    "arabic": [
      "أ: نصور مقطع طبخ لنا؟",
      "ب: أربعون محاولة! أين الابتسامة الطبيعية؟",
      "أ: حب بلا مجهود. ب: الكذب بلا مجهود!"
    ]
  },
  {
    "category": "love",
    "title": "Effortless production · Travel",
    "cast": "group",
    "hinglish": [
      "A: Travel couple reel banayein?",
      "B: Forty takes! Natural smile kahan hai?",
      "A: Caption: effortless love. B: Jhooth effortless hai!"
    ],
    "hindi": [
      "एक: यात्रा कपल रील बनाएँ?",
      "दो: चालीस टेक! सहज मुस्कान कहाँ है?",
      "एक: सहज प्यार। दो: झूठ सहज है!"
    ],
    "arabic": [
      "أ: نصور مقطع سفر لنا؟",
      "ب: أربعون محاولة! أين الابتسامة الطبيعية؟",
      "أ: حب بلا مجهود. ب: الكذب بلا مجهود!"
    ]
  },
  {
    "category": "love",
    "title": "Effortless production · Workout",
    "cast": "group",
    "hinglish": [
      "A: Workout couple reel banayein?",
      "B: Forty takes! Natural smile kahan hai?",
      "A: Caption: effortless love. B: Jhooth effortless hai!"
    ],
    "hindi": [
      "एक: कसरत कपल रील बनाएँ?",
      "दो: चालीस टेक! सहज मुस्कान कहाँ है?",
      "एक: सहज प्यार। दो: झूठ सहज है!"
    ],
    "arabic": [
      "أ: نصور مقطع تمرين لنا؟",
      "ب: أربعون محاولة! أين الابتسامة الطبيعية؟",
      "أ: حب بلا مجهود. ب: الكذب بلا مجهود!"
    ]
  },
  {
    "category": "love",
    "title": "Shared account · Streaming account",
    "cast": "group",
    "hinglish": [
      "A: Hum Streaming account share karenge!",
      "B: Password? A: Mera birthday.",
      "B: Date bata do. A: Romance logout!"
    ],
    "hindi": [
      "एक: हम स्ट्रीमिंग खाता साझा करेंगे!",
      "दो: पासवर्ड? एक: मेरा जन्मदिन।",
      "दो: तारीख बता दो। एक: प्यार लॉगआउट!"
    ],
    "arabic": [
      "أ: سنتشارك حساب المشاهدة!",
      "ب: كلمة المرور؟ أ: عيد ميلادي.",
      "ب: ما التاريخ؟ أ: الحب سجل خروجاً!"
    ]
  },
  {
    "category": "love",
    "title": "Shared account · Music account",
    "cast": "group",
    "hinglish": [
      "A: Hum Music account share karenge!",
      "B: Password? A: Mera birthday.",
      "B: Date bata do. A: Romance logout!"
    ],
    "hindi": [
      "एक: हम संगीत खाता साझा करेंगे!",
      "दो: पासवर्ड? एक: मेरा जन्मदिन।",
      "दो: तारीख बता दो। एक: प्यार लॉगआउट!"
    ],
    "arabic": [
      "أ: سنتشارك حساب الموسيقى!",
      "ب: كلمة المرور؟ أ: عيد ميلادي.",
      "ب: ما التاريخ؟ أ: الحب سجل خروجاً!"
    ]
  },
  {
    "category": "love",
    "title": "Shared account · Photo folder",
    "cast": "group",
    "hinglish": [
      "A: Hum Photo folder share karenge!",
      "B: Password? A: Mera birthday.",
      "B: Date bata do. A: Romance logout!"
    ],
    "hindi": [
      "एक: हम फोटो फोल्डर साझा करेंगे!",
      "दो: पासवर्ड? एक: मेरा जन्मदिन।",
      "दो: तारीख बता दो। एक: प्यार लॉगआउट!"
    ],
    "arabic": [
      "أ: سنتشارك مجلد الصور!",
      "ب: كلمة المرور؟ أ: عيد ميلادي.",
      "ب: ما التاريخ؟ أ: الحب سجل خروجاً!"
    ]
  },
  {
    "category": "love",
    "title": "Shared account · Travel account",
    "cast": "group",
    "hinglish": [
      "A: Hum Travel account share karenge!",
      "B: Password? A: Mera birthday.",
      "B: Date bata do. A: Romance logout!"
    ],
    "hindi": [
      "एक: हम यात्रा खाता साझा करेंगे!",
      "दो: पासवर्ड? एक: मेरा जन्मदिन।",
      "दो: तारीख बता दो। एक: प्यार लॉगआउट!"
    ],
    "arabic": [
      "أ: سنتشارك حساب السفر!",
      "ب: كلمة المرور؟ أ: عيد ميلادي.",
      "ب: ما التاريخ؟ أ: الحب سجل خروجاً!"
    ]
  },
  {
    "category": "friendzone",
    "title": "Emotional helpdesk · Boyfriend",
    "cast": "solo",
    "hinglish": [
      "Boli: tumhare bina kya karti!",
      "Phir Boyfriend se patch-up karwaya.",
      "Love story unki, night shift meri!"
    ],
    "hindi": [
      "बोली: तुम्हारे बिना क्या करती!",
      "फिर प्रेमी से सुलह करवाई।",
      "प्रेम कहानी उनकी, रात की ड्यूटी मेरी!"
    ],
    "arabic": [
      "قالت: ماذا أفعل بدونك!",
      "ثم أصلحت خلافها مع حبيبها.",
      "قصة الحب لهما والمناوبة الليلية لي!"
    ]
  },
  {
    "category": "friendzone",
    "title": "Emotional helpdesk · Ex",
    "cast": "solo",
    "hinglish": [
      "Boli: tumhare bina kya karti!",
      "Phir Ex se patch-up karwaya.",
      "Love story unki, night shift meri!"
    ],
    "hindi": [
      "बोली: तुम्हारे बिना क्या करती!",
      "फिर पूर्व प्रेमी से सुलह करवाई।",
      "प्रेम कहानी उनकी, रात की ड्यूटी मेरी!"
    ],
    "arabic": [
      "قالت: ماذا أفعل بدونك!",
      "ثم أصلحت خلافها مع حبيبها السابق.",
      "قصة الحب لهما والمناوبة الليلية لي!"
    ]
  },
  {
    "category": "friendzone",
    "title": "Emotional helpdesk · Crush",
    "cast": "solo",
    "hinglish": [
      "Boli: tumhare bina kya karti!",
      "Phir Crush se patch-up karwaya.",
      "Love story unki, night shift meri!"
    ],
    "hindi": [
      "बोली: तुम्हारे बिना क्या करती!",
      "फिर क्रश से सुलह करवाई।",
      "प्रेम कहानी उनकी, रात की ड्यूटी मेरी!"
    ],
    "arabic": [
      "قالت: ماذا أفعل بدونك!",
      "ثم أصلحت خلافها مع معجبها.",
      "قصة الحب لهما والمناوبة الليلية لي!"
    ]
  },
  {
    "category": "friendzone",
    "title": "Emotional helpdesk · Date",
    "cast": "solo",
    "hinglish": [
      "Boli: tumhare bina kya karti!",
      "Phir Date se patch-up karwaya.",
      "Love story unki, night shift meri!"
    ],
    "hindi": [
      "बोली: तुम्हारे बिना क्या करती!",
      "फिर डेट से सुलह करवाई।",
      "प्रेम कहानी उनकी, रात की ड्यूटी मेरी!"
    ],
    "arabic": [
      "قالت: ماذا أفعل بدونك!",
      "ثم أصلحت خلافها مع رفيق موعدها.",
      "قصة الحب لهما والمناوبة الليلية لي!"
    ]
  },
  {
    "category": "friendzone",
    "title": "Bro announcement · Party",
    "cast": "solo",
    "hinglish": [
      "Party pe boli: mera favourite bhai!",
      "Maine bola: thanks behen. Smile gayab.",
      "Family one-way kyun chal rahi hai?"
    ],
    "hindi": [
      "पार्टी में बोली: मेरा प्यारा भाई!",
      "कहा: धन्यवाद बहन। मुस्कान गायब।",
      "परिवार एक तरफ क्यों चल रहा है?"
    ],
    "arabic": [
      "في الحفلة قالت: أخي المفضل!",
      "قلت: شكراً أختي. اختفت ابتسامتها.",
      "لماذا الأخوة باتجاه واحد؟"
    ]
  },
  {
    "category": "friendzone",
    "title": "Bro announcement · Wedding",
    "cast": "solo",
    "hinglish": [
      "Wedding pe boli: mera favourite bhai!",
      "Maine bola: thanks behen. Smile gayab.",
      "Family one-way kyun chal rahi hai?"
    ],
    "hindi": [
      "शादी में बोली: मेरा प्यारा भाई!",
      "कहा: धन्यवाद बहन। मुस्कान गायब।",
      "परिवार एक तरफ क्यों चल रहा है?"
    ],
    "arabic": [
      "في الزفاف قالت: أخي المفضل!",
      "قلت: شكراً أختي. اختفت ابتسامتها.",
      "لماذا الأخوة باتجاه واحد؟"
    ]
  },
  {
    "category": "friendzone",
    "title": "Bro announcement · Reunion",
    "cast": "solo",
    "hinglish": [
      "Reunion pe boli: mera favourite bhai!",
      "Maine bola: thanks behen. Smile gayab.",
      "Family one-way kyun chal rahi hai?"
    ],
    "hindi": [
      "मिलन में बोली: मेरा प्यारा भाई!",
      "कहा: धन्यवाद बहन। मुस्कान गायब।",
      "परिवार एक तरफ क्यों चल रहा है?"
    ],
    "arabic": [
      "في لقاء الأصدقاء قالت: أخي المفضل!",
      "قلت: شكراً أختي. اختفت ابتسامتها.",
      "لماذا الأخوة باتجاه واحد؟"
    ]
  },
  {
    "category": "friendzone",
    "title": "Bro announcement · College fest",
    "cast": "solo",
    "hinglish": [
      "College fest pe boli: mera favourite bhai!",
      "Maine bola: thanks behen. Smile gayab.",
      "Family one-way kyun chal rahi hai?"
    ],
    "hindi": [
      "कॉलेज उत्सव में बोली: मेरा प्यारा भाई!",
      "कहा: धन्यवाद बहन। मुस्कान गायब।",
      "परिवार एक तरफ क्यों चल रहा है?"
    ],
    "arabic": [
      "في مهرجان الجامعة قالت: أخي المفضل!",
      "قلت: شكراً أختي. اختفت ابتسامتها.",
      "لماذا الأخوة باتجاه واحد؟"
    ]
  },
  {
    "category": "friendzone",
    "title": "Dating department · Dating profile",
    "cast": "solo",
    "hinglish": [
      "Usne Dating profile dikhaya: boyfriend material?",
      "Meri opinion chahiye, mera proposal nahi.",
      "Candidate nahi, HR department hoon!"
    ],
    "hindi": [
      "उसने डेटिंग प्रोफाइल दिखाया: अच्छा प्रेमी होगा?",
      "मेरी राय चाहिए, मेरा प्रस्ताव नहीं।",
      "उम्मीदवार नहीं, भर्ती विभाग हूँ!"
    ],
    "arabic": [
      "أرتني ملف المواعدة: يصلح حبيباً؟",
      "تريد رأيي لا عرضي للارتباط.",
      "لست مرشحاً، أنا قسم الموارد البشرية!"
    ]
  },
  {
    "category": "friendzone",
    "title": "Dating department · Instagram profile",
    "cast": "solo",
    "hinglish": [
      "Usne Instagram profile dikhaya: boyfriend material?",
      "Meri opinion chahiye, mera proposal nahi.",
      "Candidate nahi, HR department hoon!"
    ],
    "hindi": [
      "उसने इंस्टाग्राम प्रोफाइल दिखाया: अच्छा प्रेमी होगा?",
      "मेरी राय चाहिए, मेरा प्रस्ताव नहीं।",
      "उम्मीदवार नहीं, भर्ती विभाग हूँ!"
    ],
    "arabic": [
      "أرتني حساب إنستغرام: يصلح حبيباً؟",
      "تريد رأيي لا عرضي للارتباط.",
      "لست مرشحاً، أنا قسم الموارد البشرية!"
    ]
  },
  {
    "category": "friendzone",
    "title": "Dating department · Gym selfie",
    "cast": "solo",
    "hinglish": [
      "Usne Gym selfie dikhaya: boyfriend material?",
      "Meri opinion chahiye, mera proposal nahi.",
      "Candidate nahi, HR department hoon!"
    ],
    "hindi": [
      "उसने जिम सेल्फी दिखाया: अच्छा प्रेमी होगा?",
      "मेरी राय चाहिए, मेरा प्रस्ताव नहीं।",
      "उम्मीदवार नहीं, भर्ती विभाग हूँ!"
    ],
    "arabic": [
      "أرتني صورة النادي: يصلح حبيباً؟",
      "تريد رأيي لا عرضي للارتباط.",
      "لست مرشحاً، أنا قسم الموارد البشرية!"
    ]
  },
  {
    "category": "friendzone",
    "title": "Dating department · College photo",
    "cast": "solo",
    "hinglish": [
      "Usne College photo dikhaya: boyfriend material?",
      "Meri opinion chahiye, mera proposal nahi.",
      "Candidate nahi, HR department hoon!"
    ],
    "hindi": [
      "उसने कॉलेज फोटो दिखाया: अच्छा प्रेमी होगा?",
      "मेरी राय चाहिए, मेरा प्रस्ताव नहीं।",
      "उम्मीदवार नहीं, भर्ती विभाग हूँ!"
    ],
    "arabic": [
      "أرتني صورة الجامعة: يصلح حبيباً؟",
      "تريد رأيي لا عرضي للارتباط.",
      "لست مرشحاً، أنا قسم الموارد البشرية!"
    ]
  },
  {
    "category": "friendzone",
    "title": "Romantic courier · Birthday gift",
    "cast": "solo",
    "hinglish": [
      "Uska Birthday gift deliver karne gaya!",
      "Boyfriend khush, main gate ke bahar.",
      "Tracking available, feelings undelivered!"
    ],
    "hindi": [
      "उसका जन्मदिन का तोहफा पहुँचाने गया!",
      "प्रेमी खुश, मैं गेट के बाहर।",
      "ट्रैकिंग उपलब्ध, भावनाएँ नहीं पहुँचीं!"
    ],
    "arabic": [
      "ذهبت لتوصيل هدية الميلاد لها!",
      "حبيبها سعيد وأنا خارج البوابة.",
      "التتبع متاح والمشاعر لم تصل!"
    ]
  },
  {
    "category": "friendzone",
    "title": "Romantic courier · Cake",
    "cast": "solo",
    "hinglish": [
      "Uska Cake deliver karne gaya!",
      "Boyfriend khush, main gate ke bahar.",
      "Tracking available, feelings undelivered!"
    ],
    "hindi": [
      "उसका केक पहुँचाने गया!",
      "प्रेमी खुश, मैं गेट के बाहर।",
      "ट्रैकिंग उपलब्ध, भावनाएँ नहीं पहुँचीं!"
    ],
    "arabic": [
      "ذهبت لتوصيل الكعكة لها!",
      "حبيبها سعيد وأنا خارج البوابة.",
      "التتبع متاح والمشاعر لم تصل!"
    ]
  },
  {
    "category": "friendzone",
    "title": "Romantic courier · Flowers",
    "cast": "solo",
    "hinglish": [
      "Uska Flowers deliver karne gaya!",
      "Boyfriend khush, main gate ke bahar.",
      "Tracking available, feelings undelivered!"
    ],
    "hindi": [
      "उसका फूल पहुँचाने गया!",
      "प्रेमी खुश, मैं गेट के बाहर।",
      "ट्रैकिंग उपलब्ध, भावनाएँ नहीं पहुँचीं!"
    ],
    "arabic": [
      "ذهبت لتوصيل الزهور لها!",
      "حبيبها سعيد وأنا خارج البوابة.",
      "التتبع متاح والمشاعر لم تصل!"
    ]
  },
  {
    "category": "friendzone",
    "title": "Romantic courier · Love letter",
    "cast": "solo",
    "hinglish": [
      "Uska Love letter deliver karne gaya!",
      "Boyfriend khush, main gate ke bahar.",
      "Tracking available, feelings undelivered!"
    ],
    "hindi": [
      "उसका प्रेम पत्र पहुँचाने गया!",
      "प्रेमी खुश, मैं गेट के बाहर।",
      "ट्रैकिंग उपलब्ध, भावनाएँ नहीं पहुँचीं!"
    ],
    "arabic": [
      "ذهبت لتوصيل رسالة الحب لها!",
      "حبيبها سعيد وأنا خارج البوابة.",
      "التتبع متاح والمشاعر لم تصل!"
    ]
  },
  {
    "category": "friendzone",
    "title": "Contact classification · Notes guy",
    "cast": "solo",
    "hinglish": [
      "Usne mujhe Notes guy naam se save kiya!",
      "Main romantic nickname expect kar raha tha.",
      "Dil ka hero, phone ka utility folder!"
    ],
    "hindi": [
      "उसने मुझे नोट्स वाला नाम से सेव किया!",
      "मैं प्यार वाला नाम सोच रहा था।",
      "दिल का हीरो, फोन का उपयोगी फोल्डर!"
    ],
    "arabic": [
      "حفظت رقمي باسم صاحب الملاحظات!",
      "كنت أتوقع لقباً رومانسياً.",
      "بطل في قلبي، مجلد خدمات بهاتفها!"
    ]
  },
  {
    "category": "friendzone",
    "title": "Contact classification · Wi-Fi guy",
    "cast": "solo",
    "hinglish": [
      "Usne mujhe Wi-Fi guy naam se save kiya!",
      "Main romantic nickname expect kar raha tha.",
      "Dil ka hero, phone ka utility folder!"
    ],
    "hindi": [
      "उसने मुझे वाईफाई वाला नाम से सेव किया!",
      "मैं प्यार वाला नाम सोच रहा था।",
      "दिल का हीरो, फोन का उपयोगी फोल्डर!"
    ],
    "arabic": [
      "حفظت رقمي باسم صاحب الإنترنت!",
      "كنت أتوقع لقباً رومانسياً.",
      "بطل في قلبي، مجلد خدمات بهاتفها!"
    ]
  },
  {
    "category": "friendzone",
    "title": "Contact classification · Cab guy",
    "cast": "solo",
    "hinglish": [
      "Usne mujhe Cab guy naam se save kiya!",
      "Main romantic nickname expect kar raha tha.",
      "Dil ka hero, phone ka utility folder!"
    ],
    "hindi": [
      "उसने मुझे कैब वाला नाम से सेव किया!",
      "मैं प्यार वाला नाम सोच रहा था।",
      "दिल का हीरो, फोन का उपयोगी फोल्डर!"
    ],
    "arabic": [
      "حفظت رقمي باسم صاحب التوصيلة!",
      "كنت أتوقع لقباً رومانسياً.",
      "بطل في قلبي، مجلد خدمات بهاتفها!"
    ]
  },
  {
    "category": "friendzone",
    "title": "Contact classification · Charger guy",
    "cast": "solo",
    "hinglish": [
      "Usne mujhe Charger guy naam se save kiya!",
      "Main romantic nickname expect kar raha tha.",
      "Dil ka hero, phone ka utility folder!"
    ],
    "hindi": [
      "उसने मुझे चार्जर वाला नाम से सेव किया!",
      "मैं प्यार वाला नाम सोच रहा था।",
      "दिल का हीरो, फोन का उपयोगी फोल्डर!"
    ],
    "arabic": [
      "حفظت رقمي باسم صاحب الشاحن!",
      "كنت أتوقع لقباً رومانسياً.",
      "بطل في قلبي، مجلد خدمات بهاتفها!"
    ]
  },
  {
    "category": "friendzone",
    "title": "Invitation downgrade · Coffee",
    "cast": "solo",
    "hinglish": [
      "Usne Coffee pe bulaya!",
      "Boli: boyfriend se milwaungi.",
      "Date samjha tha, orientation nikli!"
    ],
    "hindi": [
      "उसने कॉफी में बुलाया!",
      "बोली: प्रेमी से मिलवाऊँगी।",
      "डेट समझा था, परिचय कार्यक्रम निकला!"
    ],
    "arabic": [
      "دعتني إلى القهوة!",
      "قالت: سأعرفك على حبيبي.",
      "ظننته موعداً، صار جلسة تعريف!"
    ]
  },
  {
    "category": "friendzone",
    "title": "Invitation downgrade · Dinner",
    "cast": "solo",
    "hinglish": [
      "Usne Dinner pe bulaya!",
      "Boli: boyfriend se milwaungi.",
      "Date samjha tha, orientation nikli!"
    ],
    "hindi": [
      "उसने डिनर में बुलाया!",
      "बोली: प्रेमी से मिलवाऊँगी।",
      "डेट समझा था, परिचय कार्यक्रम निकला!"
    ],
    "arabic": [
      "دعتني إلى العشاء!",
      "قالت: سأعرفك على حبيبي.",
      "ظننته موعداً، صار جلسة تعريف!"
    ]
  },
  {
    "category": "friendzone",
    "title": "Invitation downgrade · Picnic",
    "cast": "solo",
    "hinglish": [
      "Usne Picnic pe bulaya!",
      "Boli: boyfriend se milwaungi.",
      "Date samjha tha, orientation nikli!"
    ],
    "hindi": [
      "उसने पिकनिक में बुलाया!",
      "बोली: प्रेमी से मिलवाऊँगी।",
      "डेट समझा था, परिचय कार्यक्रम निकला!"
    ],
    "arabic": [
      "دعتني إلى النزهة!",
      "قالت: سأعرفك على حبيبي.",
      "ظننته موعداً، صار جلسة تعريف!"
    ]
  },
  {
    "category": "friendzone",
    "title": "Invitation downgrade · Birthday party",
    "cast": "solo",
    "hinglish": [
      "Usne Birthday party pe bulaya!",
      "Boli: boyfriend se milwaungi.",
      "Date samjha tha, orientation nikli!"
    ],
    "hindi": [
      "उसने जन्मदिन पार्टी में बुलाया!",
      "बोली: प्रेमी से मिलवाऊँगी।",
      "डेट समझा था, परिचय कार्यक्रम निकला!"
    ],
    "arabic": [
      "دعتني إلى حفلة الميلاد!",
      "قالت: سأعرفك على حبيبي.",
      "ظننته موعداً، صار جلسة تعريف!"
    ]
  },
  {
    "category": "friendzone",
    "title": "Emotional extra · Trip",
    "cast": "group",
    "hinglish": [
      "A: Trip pe tum dono favourite!",
      "B: Main boyfriend? A: Nahi, photographer.",
      "C: Smile! B: Meri feelings frame ke bahar!"
    ],
    "hindi": [
      "एक: यात्रा में तुम दोनों पसंदीदा!",
      "दो: मैं प्रेमी? एक: नहीं, फोटोग्राफर।",
      "तीन: मुस्कुराओ! दो: मेरी भावनाएँ तस्वीर से बाहर!"
    ],
    "arabic": [
      "أ: في الرحلة أنتما المفضلان!",
      "ب: أنا الحبيب؟ أ: لا، المصور.",
      "ج: ابتسم! ب: مشاعري خارج الإطار!"
    ]
  },
  {
    "category": "friendzone",
    "title": "Emotional extra · Party",
    "cast": "group",
    "hinglish": [
      "A: Party pe tum dono favourite!",
      "B: Main boyfriend? A: Nahi, photographer.",
      "C: Smile! B: Meri feelings frame ke bahar!"
    ],
    "hindi": [
      "एक: पार्टी में तुम दोनों पसंदीदा!",
      "दो: मैं प्रेमी? एक: नहीं, फोटोग्राफर।",
      "तीन: मुस्कुराओ! दो: मेरी भावनाएँ तस्वीर से बाहर!"
    ],
    "arabic": [
      "أ: في الحفلة أنتما المفضلان!",
      "ب: أنا الحبيب؟ أ: لا، المصور.",
      "ج: ابتسم! ب: مشاعري خارج الإطار!"
    ]
  },
  {
    "category": "friendzone",
    "title": "Emotional extra · Picnic",
    "cast": "group",
    "hinglish": [
      "A: Picnic pe tum dono favourite!",
      "B: Main boyfriend? A: Nahi, photographer.",
      "C: Smile! B: Meri feelings frame ke bahar!"
    ],
    "hindi": [
      "एक: पिकनिक में तुम दोनों पसंदीदा!",
      "दो: मैं प्रेमी? एक: नहीं, फोटोग्राफर।",
      "तीन: मुस्कुराओ! दो: मेरी भावनाएँ तस्वीर से बाहर!"
    ],
    "arabic": [
      "أ: في النزهة أنتما المفضلان!",
      "ب: أنا الحبيب؟ أ: لا، المصور.",
      "ج: ابتسم! ب: مشاعري خارج الإطار!"
    ]
  },
  {
    "category": "friendzone",
    "title": "Emotional extra · Wedding",
    "cast": "group",
    "hinglish": [
      "A: Wedding pe tum dono favourite!",
      "B: Main boyfriend? A: Nahi, photographer.",
      "C: Smile! B: Meri feelings frame ke bahar!"
    ],
    "hindi": [
      "एक: शादी में तुम दोनों पसंदीदा!",
      "दो: मैं प्रेमी? एक: नहीं, फोटोग्राफर।",
      "तीन: मुस्कुराओ! दो: मेरी भावनाएँ तस्वीर से बाहर!"
    ],
    "arabic": [
      "أ: في الزفاف أنتما المفضلان!",
      "ب: أنا الحبيب؟ أ: لا، المصور.",
      "ج: ابتسم! ب: مشاعري خارج الإطار!"
    ]
  },
  {
    "category": "friendzone",
    "title": "Free consultation ends · Crush",
    "cast": "group",
    "hinglish": [
      "A: Crush ko kya reply doon?",
      "B: Advice five hundred rupees.",
      "A: Bestie! B: Friendship free, consulting paid!"
    ],
    "hindi": [
      "एक: क्रश को क्या जवाब दूँ?",
      "दो: सलाह पाँच सौ रुपये।",
      "एक: बेस्टी! दो: दोस्ती मुफ्त, सलाह सशुल्क!"
    ],
    "arabic": [
      "أ: ماذا أجيب المعجب؟",
      "ب: الاستشارة بخمسمئة روبية.",
      "أ: صديقي! ب: الصداقة مجانية والاستشارة مدفوعة!"
    ]
  },
  {
    "category": "friendzone",
    "title": "Free consultation ends · Boyfriend",
    "cast": "group",
    "hinglish": [
      "A: Boyfriend ko kya reply doon?",
      "B: Advice five hundred rupees.",
      "A: Bestie! B: Friendship free, consulting paid!"
    ],
    "hindi": [
      "एक: प्रेमी को क्या जवाब दूँ?",
      "दो: सलाह पाँच सौ रुपये।",
      "एक: बेस्टी! दो: दोस्ती मुफ्त, सलाह सशुल्क!"
    ],
    "arabic": [
      "أ: ماذا أجيب الحبيب؟",
      "ب: الاستشارة بخمسمئة روبية.",
      "أ: صديقي! ب: الصداقة مجانية والاستشارة مدفوعة!"
    ]
  },
  {
    "category": "friendzone",
    "title": "Free consultation ends · Ex",
    "cast": "group",
    "hinglish": [
      "A: Ex ko kya reply doon?",
      "B: Advice five hundred rupees.",
      "A: Bestie! B: Friendship free, consulting paid!"
    ],
    "hindi": [
      "एक: पूर्व प्रेमी को क्या जवाब दूँ?",
      "दो: सलाह पाँच सौ रुपये।",
      "एक: बेस्टी! दो: दोस्ती मुफ्त, सलाह सशुल्क!"
    ],
    "arabic": [
      "أ: ماذا أجيب الحبيب السابق؟",
      "ب: الاستشارة بخمسمئة روبية.",
      "أ: صديقي! ب: الصداقة مجانية والاستشارة مدفوعة!"
    ]
  },
  {
    "category": "friendzone",
    "title": "Free consultation ends · Date",
    "cast": "group",
    "hinglish": [
      "A: Date ko kya reply doon?",
      "B: Advice five hundred rupees.",
      "A: Bestie! B: Friendship free, consulting paid!"
    ],
    "hindi": [
      "एक: डेट को क्या जवाब दूँ?",
      "दो: सलाह पाँच सौ रुपये।",
      "एक: बेस्टी! दो: दोस्ती मुफ्त, सलाह सशुल्क!"
    ],
    "arabic": [
      "أ: ماذا أجيب رفيق الموعد؟",
      "ب: الاستشارة بخمسمئة روبية.",
      "أ: صديقي! ب: الصداقة مجانية والاستشارة مدفوعة!"
    ]
  },
  {
    "category": "daily",
    "title": "Salary tourist · Rent",
    "cast": "solo",
    "hinglish": [
      "Salary aayi! Rent turant kat gaya.",
      "Account mein bas selfie leke gayi.",
      "Main employee nahi, money transit station!"
    ],
    "hindi": [
      "वेतन आया! किराया तुरंत कट गया।",
      "खाते में बस सेल्फी लेकर गया।",
      "मैं कर्मचारी नहीं, पैसों का पड़ाव हूँ!"
    ],
    "arabic": [
      "وصل الراتب! اقتطع الإيجار فوراً.",
      "التقط صورة في الحساب ثم غادر.",
      "لست موظفاً، أنا محطة عبور المال!"
    ]
  },
  {
    "category": "daily",
    "title": "Salary tourist · EMI",
    "cast": "solo",
    "hinglish": [
      "Salary aayi! EMI turant kat gaya.",
      "Account mein bas selfie leke gayi.",
      "Main employee nahi, money transit station!"
    ],
    "hindi": [
      "वेतन आया! किस्त तुरंत कट गया।",
      "खाते में बस सेल्फी लेकर गया।",
      "मैं कर्मचारी नहीं, पैसों का पड़ाव हूँ!"
    ],
    "arabic": [
      "وصل الراتب! اقتطع القسط فوراً.",
      "التقط صورة في الحساب ثم غادر.",
      "لست موظفاً، أنا محطة عبور المال!"
    ]
  },
  {
    "category": "daily",
    "title": "Salary tourist · Credit card bill",
    "cast": "solo",
    "hinglish": [
      "Salary aayi! Credit card bill turant kat gaya.",
      "Account mein bas selfie leke gayi.",
      "Main employee nahi, money transit station!"
    ],
    "hindi": [
      "वेतन आया! कार्ड का बिल तुरंत कट गया।",
      "खाते में बस सेल्फी लेकर गया।",
      "मैं कर्मचारी नहीं, पैसों का पड़ाव हूँ!"
    ],
    "arabic": [
      "وصل الراتب! اقتطع حساب البطاقة فوراً.",
      "التقط صورة في الحساب ثم غادر.",
      "لست موظفاً، أنا محطة عبور المال!"
    ]
  },
  {
    "category": "daily",
    "title": "Salary tourist · Subscriptions",
    "cast": "solo",
    "hinglish": [
      "Salary aayi! Subscriptions turant kat gaya.",
      "Account mein bas selfie leke gayi.",
      "Main employee nahi, money transit station!"
    ],
    "hindi": [
      "वेतन आया! सब्सक्रिप्शन तुरंत कट गया।",
      "खाते में बस सेल्फी लेकर गया।",
      "मैं कर्मचारी नहीं, पैसों का पड़ाव हूँ!"
    ],
    "arabic": [
      "وصل الراتب! اقتطع الاشتراك فوراً.",
      "التقط صورة في الحساب ثم غادر.",
      "لست موظفاً، أنا محطة عبور المال!"
    ]
  },
  {
    "category": "daily",
    "title": "Technical emergency · TV",
    "cast": "solo",
    "hinglish": [
      "Papa bole emergency, ghar aa!",
      "TV ka login karwana tha.",
      "Degree nahi, family helpdesk subscription hoon!"
    ],
    "hindi": [
      "पापा बोले संकट है, घर आओ!",
      "टीवी का लॉगिन करवाना था।",
      "डिग्री नहीं, घरेलू मदद का सब्सक्रिप्शन हूँ!"
    ],
    "arabic": [
      "قال أبي طوارئ، تعال للبيت!",
      "كان يريد تسجيل دخول التلفاز.",
      "شهادتي اشتراك دعم تقني للعائلة!"
    ]
  },
  {
    "category": "daily",
    "title": "Technical emergency · Email",
    "cast": "solo",
    "hinglish": [
      "Papa bole emergency, ghar aa!",
      "Email ka login karwana tha.",
      "Degree nahi, family helpdesk subscription hoon!"
    ],
    "hindi": [
      "पापा बोले संकट है, घर आओ!",
      "ईमेल का लॉगिन करवाना था।",
      "डिग्री नहीं, घरेलू मदद का सब्सक्रिप्शन हूँ!"
    ],
    "arabic": [
      "قال أبي طوارئ، تعال للبيت!",
      "كان يريد تسجيل دخول البريد.",
      "شهادتي اشتراك دعم تقني للعائلة!"
    ]
  },
  {
    "category": "daily",
    "title": "Technical emergency · Shopping app",
    "cast": "solo",
    "hinglish": [
      "Papa bole emergency, ghar aa!",
      "Shopping app ka login karwana tha.",
      "Degree nahi, family helpdesk subscription hoon!"
    ],
    "hindi": [
      "पापा बोले संकट है, घर आओ!",
      "खरीदारी ऐप का लॉगिन करवाना था।",
      "डिग्री नहीं, घरेलू मदद का सब्सक्रिप्शन हूँ!"
    ],
    "arabic": [
      "قال أبي طوارئ، تعال للبيت!",
      "كان يريد تسجيل دخول تطبيق التسوق.",
      "شهادتي اشتراك دعم تقني للعائلة!"
    ]
  },
  {
    "category": "daily",
    "title": "Technical emergency · Streaming app",
    "cast": "solo",
    "hinglish": [
      "Papa bole emergency, ghar aa!",
      "Streaming app ka login karwana tha.",
      "Degree nahi, family helpdesk subscription hoon!"
    ],
    "hindi": [
      "पापा बोले संकट है, घर आओ!",
      "स्ट्रीमिंग ऐप का लॉगिन करवाना था।",
      "डिग्री नहीं, घरेलू मदद का सब्सक्रिप्शन हूँ!"
    ],
    "arabic": [
      "قال أبي طوارئ، تعال للبيت!",
      "كان يريد تسجيل دخول تطبيق المشاهدة.",
      "شهادتي اشتراك دعم تقني للعائلة!"
    ]
  },
  {
    "category": "daily",
    "title": "Fictional attendance · Sunday meetup",
    "cast": "solo",
    "hinglish": [
      "Group mein Sunday meetup plan pakka!",
      "Din aaya: busy, sleeping, seen.",
      "Dosti real, attendance AI-generated!"
    ],
    "hindi": [
      "समूह में रविवार मिलना की योजना पक्की!",
      "दिन आया: व्यस्त, सोते हुए, देखा।",
      "दोस्ती असली, हाज़िरी एआई से बनी!"
    ],
    "arabic": [
      "خطة لقاء الأحد مؤكدة بالمجموعة!",
      "جاء اليوم: مشغول ونائم وقرأ فقط.",
      "الصداقة حقيقية والحضور مولد بالذكاء الاصطناعي!"
    ]
  },
  {
    "category": "daily",
    "title": "Fictional attendance · Movie night",
    "cast": "solo",
    "hinglish": [
      "Group mein Movie night plan pakka!",
      "Din aaya: busy, sleeping, seen.",
      "Dosti real, attendance AI-generated!"
    ],
    "hindi": [
      "समूह में फिल्म की रात की योजना पक्की!",
      "दिन आया: व्यस्त, सोते हुए, देखा।",
      "दोस्ती असली, हाज़िरी एआई से बनी!"
    ],
    "arabic": [
      "خطة ليلة الفيلم مؤكدة بالمجموعة!",
      "جاء اليوم: مشغول ونائم وقرأ فقط.",
      "الصداقة حقيقية والحضور مولد بالذكاء الاصطناعي!"
    ]
  },
  {
    "category": "daily",
    "title": "Fictional attendance · Road trip",
    "cast": "solo",
    "hinglish": [
      "Group mein Road trip plan pakka!",
      "Din aaya: busy, sleeping, seen.",
      "Dosti real, attendance AI-generated!"
    ],
    "hindi": [
      "समूह में सड़क यात्रा की योजना पक्की!",
      "दिन आया: व्यस्त, सोते हुए, देखा।",
      "दोस्ती असली, हाज़िरी एआई से बनी!"
    ],
    "arabic": [
      "خطة الرحلة مؤكدة بالمجموعة!",
      "جاء اليوم: مشغول ونائم وقرأ فقط.",
      "الصداقة حقيقية والحضور مولد بالذكاء الاصطناعي!"
    ]
  },
  {
    "category": "daily",
    "title": "Fictional attendance · Cricket match",
    "cast": "solo",
    "hinglish": [
      "Group mein Cricket match plan pakka!",
      "Din aaya: busy, sleeping, seen.",
      "Dosti real, attendance AI-generated!"
    ],
    "hindi": [
      "समूह में क्रिकेट मैच की योजना पक्की!",
      "दिन आया: व्यस्त, सोते हुए, देखा।",
      "दोस्ती असली, हाज़िरी एआई से बनी!"
    ],
    "arabic": [
      "خطة مباراة الكريكيت مؤكدة بالمجموعة!",
      "جاء اليوم: مشغول ونائم وقرأ فقط.",
      "الصداقة حقيقية والحضور مولد بالذكاء الاصطناعي!"
    ]
  },
  {
    "category": "daily",
    "title": "Instant patience · Milk",
    "cast": "solo",
    "hinglish": [
      "Milk ten minutes mein aayega!",
      "Forty minutes baad: arriving soon.",
      "Delivery slow, anger express!"
    ],
    "hindi": [
      "दूध दस मिनट में आएगा!",
      "चालीस मिनट बाद: जल्द आ रहा है।",
      "डिलीवरी धीमी, गुस्सा एक्सप्रेस!"
    ],
    "arabic": [
      "الحليب يصل خلال عشر دقائق!",
      "بعد أربعين دقيقة: يصل قريباً.",
      "التوصيل بطيء والغضب سريع!"
    ]
  },
  {
    "category": "daily",
    "title": "Instant patience · Bread",
    "cast": "solo",
    "hinglish": [
      "Bread ten minutes mein aayega!",
      "Forty minutes baad: arriving soon.",
      "Delivery slow, anger express!"
    ],
    "hindi": [
      "ब्रेड दस मिनट में आएगा!",
      "चालीस मिनट बाद: जल्द आ रहा है।",
      "डिलीवरी धीमी, गुस्सा एक्सप्रेस!"
    ],
    "arabic": [
      "الخبز يصل خلال عشر دقائق!",
      "بعد أربعين دقيقة: يصل قريباً.",
      "التوصيل بطيء والغضب سريع!"
    ]
  },
  {
    "category": "daily",
    "title": "Instant patience · Snacks",
    "cast": "solo",
    "hinglish": [
      "Snacks ten minutes mein aayega!",
      "Forty minutes baad: arriving soon.",
      "Delivery slow, anger express!"
    ],
    "hindi": [
      "नाश्ता दस मिनट में आएगा!",
      "चालीस मिनट बाद: जल्द आ रहा है।",
      "डिलीवरी धीमी, गुस्सा एक्सप्रेस!"
    ],
    "arabic": [
      "الوجبات الخفيفة يصل خلال عشر دقائق!",
      "بعد أربعين دقيقة: يصل قريباً.",
      "التوصيل بطيء والغضب سريع!"
    ]
  },
  {
    "category": "daily",
    "title": "Instant patience · Coffee",
    "cast": "solo",
    "hinglish": [
      "Coffee ten minutes mein aayega!",
      "Forty minutes baad: arriving soon.",
      "Delivery slow, anger express!"
    ],
    "hindi": [
      "कॉफी दस मिनट में आएगा!",
      "चालीस मिनट बाद: जल्द आ रहा है।",
      "डिलीवरी धीमी, गुस्सा एक्सप्रेस!"
    ],
    "arabic": [
      "القهوة يصل خلال عشر دقائق!",
      "بعد أربعين دقيقة: يصل قريباً.",
      "التوصيل بطيء والغضب سريع!"
    ]
  },
  {
    "category": "daily",
    "title": "Productivity camouflage · Planner",
    "cast": "solo",
    "hinglish": [
      "Planner khola, productive feel hua!",
      "Kaam zero, setup pe three hours.",
      "Busy nahi, stationery influencer hoon!"
    ],
    "hindi": [
      "प्लानर खोला, मेहनती महसूस हुआ!",
      "काम शून्य, तैयारी में तीन घंटे।",
      "व्यस्त नहीं, स्टेशनरी इन्फ्लुएंसर हूँ!"
    ],
    "arabic": [
      "فتحت المخطط وشعرت بالإنتاجية!",
      "عمل صفر وتجهيز ثلاث ساعات.",
      "لست مشغولاً، أنا مؤثر قرطاسية!"
    ]
  },
  {
    "category": "daily",
    "title": "Productivity camouflage · Spreadsheet",
    "cast": "solo",
    "hinglish": [
      "Spreadsheet khola, productive feel hua!",
      "Kaam zero, setup pe three hours.",
      "Busy nahi, stationery influencer hoon!"
    ],
    "hindi": [
      "स्प्रेडशीट खोला, मेहनती महसूस हुआ!",
      "काम शून्य, तैयारी में तीन घंटे।",
      "व्यस्त नहीं, स्टेशनरी इन्फ्लुएंसर हूँ!"
    ],
    "arabic": [
      "فتحت الجدول وشعرت بالإنتاجية!",
      "عمل صفر وتجهيز ثلاث ساعات.",
      "لست مشغولاً، أنا مؤثر قرطاسية!"
    ]
  },
  {
    "category": "daily",
    "title": "Productivity camouflage · To-do app",
    "cast": "solo",
    "hinglish": [
      "To-do app khola, productive feel hua!",
      "Kaam zero, setup pe three hours.",
      "Busy nahi, stationery influencer hoon!"
    ],
    "hindi": [
      "काम का ऐप खोला, मेहनती महसूस हुआ!",
      "काम शून्य, तैयारी में तीन घंटे।",
      "व्यस्त नहीं, स्टेशनरी इन्फ्लुएंसर हूँ!"
    ],
    "arabic": [
      "فتحت تطبيق المهام وشعرت بالإنتاجية!",
      "عمل صفر وتجهيز ثلاث ساعات.",
      "لست مشغولاً، أنا مؤثر قرطاسية!"
    ]
  },
  {
    "category": "daily",
    "title": "Productivity camouflage · New notebook",
    "cast": "solo",
    "hinglish": [
      "New notebook khola, productive feel hua!",
      "Kaam zero, setup pe three hours.",
      "Busy nahi, stationery influencer hoon!"
    ],
    "hindi": [
      "नई नोटबुक खोला, मेहनती महसूस हुआ!",
      "काम शून्य, तैयारी में तीन घंटे।",
      "व्यस्त नहीं, स्टेशनरी इन्फ्लुएंसर हूँ!"
    ],
    "arabic": [
      "فتحت الدفتر الجديد وشعرت بالإنتاجية!",
      "عمل صفر وتجهيز ثلاث ساعات.",
      "لست مشغولاً، أنا مؤثر قرطاسية!"
    ]
  },
  {
    "category": "daily",
    "title": "Mute panic · Office",
    "cast": "solo",
    "hinglish": [
      "Office call mein confident speech di!",
      "Sab bole: unmute yourself.",
      "Motivation full, transmission zero!"
    ],
    "hindi": [
      "ऑफिस कॉल में शानदार भाषण दिया!",
      "सब बोले: माइक चालू करो।",
      "जोश पूरा, प्रसारण शून्य!"
    ],
    "arabic": [
      "ألقيت خطاباً واثقاً بمكالمة العمل!",
      "قال الجميع: افتح الميكروفون.",
      "حماس كامل وبث صفر!"
    ]
  },
  {
    "category": "daily",
    "title": "Mute panic · Class",
    "cast": "solo",
    "hinglish": [
      "Class call mein confident speech di!",
      "Sab bole: unmute yourself.",
      "Motivation full, transmission zero!"
    ],
    "hindi": [
      "क्लास कॉल में शानदार भाषण दिया!",
      "सब बोले: माइक चालू करो।",
      "जोश पूरा, प्रसारण शून्य!"
    ],
    "arabic": [
      "ألقيت خطاباً واثقاً بمكالمة الدرس!",
      "قال الجميع: افتح الميكروفون.",
      "حماس كامل وبث صفر!"
    ]
  },
  {
    "category": "daily",
    "title": "Mute panic · Interview",
    "cast": "solo",
    "hinglish": [
      "Interview call mein confident speech di!",
      "Sab bole: unmute yourself.",
      "Motivation full, transmission zero!"
    ],
    "hindi": [
      "इंटरव्यू कॉल में शानदार भाषण दिया!",
      "सब बोले: माइक चालू करो।",
      "जोश पूरा, प्रसारण शून्य!"
    ],
    "arabic": [
      "ألقيت خطاباً واثقاً بمكالمة المقابلة!",
      "قال الجميع: افتح الميكروفون.",
      "حماس كامل وبث صفر!"
    ]
  },
  {
    "category": "daily",
    "title": "Mute panic · Family",
    "cast": "solo",
    "hinglish": [
      "Family call mein confident speech di!",
      "Sab bole: unmute yourself.",
      "Motivation full, transmission zero!"
    ],
    "hindi": [
      "परिवार कॉल में शानदार भाषण दिया!",
      "सब बोले: माइक चालू करो।",
      "जोश पूरा, प्रसारण शून्य!"
    ],
    "arabic": [
      "ألقيت خطاباً واثقاً بمكالمة العائلة!",
      "قال الجميع: افتح الميكروفون.",
      "حماس كامل وبث صفر!"
    ]
  },
  {
    "category": "daily",
    "title": "Router courtroom · Wi-Fi",
    "cast": "group",
    "hinglish": [
      "A: Wi-Fi band! B: Tune kya kiya?",
      "A: Bill unpaid. B: Reboot kar!",
      "A: Payment hua. B: Dekha, meri engineering!"
    ],
    "hindi": [
      "एक: वाईफाई बंद! दो: क्या किया?",
      "एक: बिल बाकी। दो: रीस्टार्ट करो!",
      "एक: भुगतान हुआ। दो: देखा, मेरी इंजीनियरिंग!"
    ],
    "arabic": [
      "أ: الإنترنت توقف! ب: ماذا فعلت؟",
      "أ: الفاتورة معلقة. ب: أعد التشغيل!",
      "أ: تم الدفع. ب: أرأيت مهارتي الهندسية!"
    ]
  },
  {
    "category": "daily",
    "title": "Router courtroom · TV service",
    "cast": "group",
    "hinglish": [
      "A: TV service band! B: Tune kya kiya?",
      "A: Bill unpaid. B: Reboot kar!",
      "A: Payment hua. B: Dekha, meri engineering!"
    ],
    "hindi": [
      "एक: टीवी सेवा बंद! दो: क्या किया?",
      "एक: बिल बाकी। दो: रीस्टार्ट करो!",
      "एक: भुगतान हुआ। दो: देखा, मेरी इंजीनियरिंग!"
    ],
    "arabic": [
      "أ: اشتراك التلفاز توقف! ب: ماذا فعلت؟",
      "أ: الفاتورة معلقة. ب: أعد التشغيل!",
      "أ: تم الدفع. ب: أرأيت مهارتي الهندسية!"
    ]
  },
  {
    "category": "daily",
    "title": "Router courtroom · Mobile data",
    "cast": "group",
    "hinglish": [
      "A: Mobile data band! B: Tune kya kiya?",
      "A: Bill unpaid. B: Reboot kar!",
      "A: Payment hua. B: Dekha, meri engineering!"
    ],
    "hindi": [
      "एक: मोबाइल डेटा बंद! दो: क्या किया?",
      "एक: बिल बाकी। दो: रीस्टार्ट करो!",
      "एक: भुगतान हुआ। दो: देखा, मेरी इंजीनियरिंग!"
    ],
    "arabic": [
      "أ: بيانات الهاتف توقف! ب: ماذا فعلت؟",
      "أ: الفاتورة معلقة. ب: أعد التشغيل!",
      "أ: تم الدفع. ب: أرأيت مهارتي الهندسية!"
    ]
  },
  {
    "category": "daily",
    "title": "Router courtroom · Streaming",
    "cast": "group",
    "hinglish": [
      "A: Streaming band! B: Tune kya kiya?",
      "A: Bill unpaid. B: Reboot kar!",
      "A: Payment hua. B: Dekha, meri engineering!"
    ],
    "hindi": [
      "एक: स्ट्रीमिंग बंद! दो: क्या किया?",
      "एक: बिल बाकी। दो: रीस्टार्ट करो!",
      "एक: भुगतान हुआ। दो: देखा, मेरी इंजीनियरिंग!"
    ],
    "arabic": [
      "أ: البث توقف! ب: ماذا فعلت؟",
      "أ: الفاتورة معلقة. ب: أعد التشغيل!",
      "أ: تم الدفع. ب: أرأيت مهارتي الهندسية!"
    ]
  },
  {
    "category": "daily",
    "title": "Split bill athletes · Pizza",
    "cast": "group",
    "hinglish": [
      "A: Pizza ka bill split karein!",
      "B: Network nahi. A: Reels chal rahi hain?",
      "B: Haan. A: Payment pe hi blackout hai!"
    ],
    "hindi": [
      "एक: पिज़्ज़ा का बिल बाँटें!",
      "दो: नेटवर्क नहीं। एक: रील्स चल रही हैं?",
      "दो: हाँ। एक: भुगतान पर ही अँधेरा है!"
    ],
    "arabic": [
      "أ: نقسم حساب البيتزا!",
      "ب: لا شبكة. أ: المقاطع تعمل؟",
      "ب: نعم. أ: الانقطاع عند الدفع فقط!"
    ]
  },
  {
    "category": "daily",
    "title": "Split bill athletes · Dinner",
    "cast": "group",
    "hinglish": [
      "A: Dinner ka bill split karein!",
      "B: Network nahi. A: Reels chal rahi hain?",
      "B: Haan. A: Payment pe hi blackout hai!"
    ],
    "hindi": [
      "एक: डिनर का बिल बाँटें!",
      "दो: नेटवर्क नहीं। एक: रील्स चल रही हैं?",
      "दो: हाँ। एक: भुगतान पर ही अँधेरा है!"
    ],
    "arabic": [
      "أ: نقسم حساب العشاء!",
      "ب: لا شبكة. أ: المقاطع تعمل؟",
      "ب: نعم. أ: الانقطاع عند الدفع فقط!"
    ]
  },
  {
    "category": "daily",
    "title": "Split bill athletes · Cab",
    "cast": "group",
    "hinglish": [
      "A: Cab ka bill split karein!",
      "B: Network nahi. A: Reels chal rahi hain?",
      "B: Haan. A: Payment pe hi blackout hai!"
    ],
    "hindi": [
      "एक: कैब का बिल बाँटें!",
      "दो: नेटवर्क नहीं। एक: रील्स चल रही हैं?",
      "दो: हाँ। एक: भुगतान पर ही अँधेरा है!"
    ],
    "arabic": [
      "أ: نقسم حساب السيارة!",
      "ب: لا شبكة. أ: المقاطع تعمل؟",
      "ب: نعم. أ: الانقطاع عند الدفع فقط!"
    ]
  },
  {
    "category": "daily",
    "title": "Split bill athletes · Coffee",
    "cast": "group",
    "hinglish": [
      "A: Coffee ka bill split karein!",
      "B: Network nahi. A: Reels chal rahi hain?",
      "B: Haan. A: Payment pe hi blackout hai!"
    ],
    "hindi": [
      "एक: कॉफी का बिल बाँटें!",
      "दो: नेटवर्क नहीं। एक: रील्स चल रही हैं?",
      "दो: हाँ। एक: भुगतान पर ही अँधेरा है!"
    ],
    "arabic": [
      "أ: نقسم حساب القهوة!",
      "ب: لا شبكة. أ: المقاطع تعمل؟",
      "ب: نعم. أ: الانقطاع عند الدفع فقط!"
    ]
  }
];
